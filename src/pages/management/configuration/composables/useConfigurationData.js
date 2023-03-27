import { ref, onMounted } from 'vue';
import { loadConfiguration } from '@/api/management';

export default function () {
  const list = ref([]);
  let listLoading = ref(false);

  onMounted(() => getData());

  const getData = async () => {
    listLoading.value = true;
    await getConfigData();
    listLoading.value = false;
  };

  const getConfigData = async () => {
    const resp = await loadConfiguration();
    const contexts = resp.data.contexts;
    let propertiesObject = {};
    for (const key in contexts) {
      if (!key.startsWith('bootstrap')) {
        propertiesObject = contexts[key]['beans'];
        break;
      }
    }

    const tmpList = [];
    for (const key in propertiesObject) {
      tmpList.push(propertiesObject[key]);
    }
    tmpList.sort((propertyA, propertyB) => {
      const comparePrefix = propertyA.prefix < propertyB.prefix ? -1 : 1;
      return propertyA.prefix === propertyB.prefix ? 0 : comparePrefix;
    });

    list.value = tmpList;
  };

  return {
    list,
    listLoading,
    getData
  };
}
