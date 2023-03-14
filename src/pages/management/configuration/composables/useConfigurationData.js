import { ref, onMounted } from 'vue';
import { loadConfiguration, loadEnvConfiguration } from '@/api/management';

export default function () {
  const dataSelect = ref('config');
  const list = ref([]);
  let listLoading = ref(false);

  onMounted(() => getData());

  const getData = async () => {
    if (dataSelect.value === 'config') {
      getConfigData()
    } else {
      getEnvData()
    }
  }

  const getConfigData = async () => {
    listLoading.value = true
    const resp = await loadConfiguration()
    const contexts = resp.data.contexts
    const tmpList = []
    for (const key in contexts) {
      tmpList.push({
        key,
        details: contexts[key]
      })
    }
    list.value = tmpList
    listLoading.value = false
  }

  const getEnvData = async () => {
    listLoading.value = true
    const resp = await loadEnvConfiguration()
    const components = resp.data
    const tmpList = []
    for (const key in components) {
      tmpList.push({
        key,
        details: components[key]
      })
    }
    list.value = tmpList
    listLoading.value = false
  }

  const handleFilter = () => {
    getData()
  }

  return {
    dataSelect,
    list,
    listLoading,
    getData,
    handleFilter
  }
}
