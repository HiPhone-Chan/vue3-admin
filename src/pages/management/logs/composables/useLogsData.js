import { ref, onMounted } from 'vue';
import { findAll } from '@/api/log'

export default function useUserData() {
  const list = ref([]);
  let listLoading = ref(false);


  const getData = async () => {
    listLoading.value = true
    const resp = await findAll()
    const loggers = resp.data.loggers
    const tmpList = []
    for (const key in loggers) {
      tmpList.push({
        key,
        ...loggers[key]
      })
    }
    list.value = tmpList
    listLoading.value = false
  }

  onMounted(() => getData());


  const handleFilter = () => {
    getData()
  }

  return {
    list,
    listLoading,
    getData,
    handleFilter
  }
}
