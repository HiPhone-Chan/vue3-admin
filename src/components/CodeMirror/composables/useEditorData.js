import { getCurrentInstance, onMounted, watch } from 'vue';
import { EditorView, basicSetup } from 'codemirror';

export default function (refName, model, extensions) {
  onMounted(() => {
    init();
  });

  watch(
    () => model.value,
    (val, oldVal) => {
      if (!isInnerChange) {
        let transation = view.state.update({
          changes: [
            { from: 0, to: oldVal.length },
            { from: 0, insert: val }
          ]
        });
        view.dispatchTransactions([transation]);
      }
      isInnerChange = false;
    }
  );

  let view = null;
  let isInnerChange = false;
  const init = () => {
    view = new EditorView({
      parent: getCurrentInstance().refs[refName],
      extensions: [
        basicSetup,
        ...extensions,
        EditorView.updateListener.of((viewUpdate) => {
          if (viewUpdate.docChanged) {
            isInnerChange = true;
            model.value = viewUpdate.state.doc.toString();
          }
        })
      ],
      doc: model.value
    });
  };

  return {};
}
