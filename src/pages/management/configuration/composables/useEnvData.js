import { ref, onMounted } from 'vue';
import { loadEnvConfiguration } from '@/api/management';

export default function () {
  const list = ref([]);
  let listLoading = ref(false);

  onMounted(() => getData());

  const getData = async () => {
    listLoading.value = true;
    await getEnvData();
    listLoading.value = false;
  };

  const getEnvData = async () => {
    const resp = await loadEnvConfiguration();
    const propertySources = resp.data['propertySources'];

    const tmpList = [];
    for (const propertyObject of propertySources) {
      const name = propertyObject['name'];
      const detailProperties = propertyObject['properties'];
      const vals = [];
      for (const keyDetail in detailProperties) {
        if (Object.prototype.hasOwnProperty.call(detailProperties, keyDetail)) {
          vals.push({
            key: keyDetail,
            val: detailProperties[keyDetail]['value']
          });
        }
      }
      tmpList.push({
        key: name,
        properties: vals
      });
    }
    list.value = tmpList;
  };

  return {
    list,
    listLoading,
    getData
  };
}
