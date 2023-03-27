import { ref, onMounted } from 'vue';
import { checkHealth } from '@/api/management';

export default function () {
  const list = ref([]);
  let listLoading = ref(false);

  const getData = async () => {
    listLoading.value = true;
    const resp = await checkHealth();
    const components = resp.data.components;
    const tmpList = [];
    for (const key in components) {
      tmpList.push({
        key,
        ...components[key]
      });
    }
    list.value = tmpList;
    listLoading.value = false;
  };

  onMounted(() => getData());

  return {
    list,
    listLoading,
    getData
  };
}
