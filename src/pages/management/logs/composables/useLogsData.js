import { getCurrentInstance, ref, onMounted, nextTick } from 'vue';
import { findAll, changeLevel } from '@/api/log';

export default function (temp, dialog, formName) {
  const list = ref([]);
  const levelsOptions = ref([]);
  const instance = getCurrentInstance();
  const listLoading = ref(false);

  const getData = async () => {
    listLoading.value = true;
    const { data } = await findAll();
    const loggers = data.loggers;
    const tmpList = [];
    for (const key in loggers) {
      tmpList.push({
        name: key,
        ...loggers[key]
      });
    }
    list.value = tmpList;
    levelsOptions.value = data.levels;
    listLoading.value = false;
  };

  onMounted(() => getData());

  const STATUS_UPDATE = 'update';
  const handleUpdate = (row) => {
    dialog.status = STATUS_UPDATE;
    dialog.visible = true;
    temp.value = {
      name: row.name,
      level: row.effectiveLevel
    };

    nextTick(() => {
      instance.refs[formName].clearValidate();
    });
  };

  const updateData = () => {
    instance.refs[formName].validate(async (valid) => {
      if (valid) {
        await changeLevel(temp.value);
        await getData();
        dialog.visible = false;
      }
    });
  };

  return {
    list,
    listLoading,
    levelsOptions,
    STATUS_UPDATE,
    getData,
    handleUpdate,
    updateData
  };
}
