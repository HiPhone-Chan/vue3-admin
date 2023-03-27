import { ref, reactive } from 'vue';

export default function () {
  let temp = ref({});

  const dialog = reactive({
    visible: false,
    status: ''
  });

  return {
    temp,
    dialog
  };
}
