import { ref, onMounted } from 'vue';
import { findAll } from '@/api/log'

export default function useUserData() {
  const list = ref([]);
  const levelsOptions = ref([]);
  let listLoading = ref(false);


  const getData = async () => {
    listLoading.value = true
    const { data } = await findAll()
    const loggers = data.loggers
    const tmpList = []
    for (const key in loggers) {
      tmpList.push({
        name: key,
        ...loggers[key]
      })
    }
    list.value = tmpList
    levelsOptions.value = data.levels
    listLoading.value = false
  }

  onMounted(() => getData());


  const handleFilter = () => {
    getData()
  }

  return {
    list,
    listLoading,
    levelsOptions,
    getData,
    handleFilter
  }
}
