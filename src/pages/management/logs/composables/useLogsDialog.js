import { getCurrentInstance, ref, reactive, nextTick } from 'vue';

export default function () {

  const instance = getCurrentInstance();
  let temp = ref({})

  const dialog = reactive({
    visible: false,
    status: ''
  })

  const handleUpdate = (row) => {
    dialog.status = 'update'
    dialog.visible = true
    temp.value = Object.assign({}, row)

    nextTick(() => {
      instance.refs['dataForm'].clearValidate()
    })
  }

  return {
    temp, dialog,
    handleUpdate
  }
}
