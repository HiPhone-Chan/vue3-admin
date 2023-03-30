import { ref, onMounted } from 'vue';
import { retrieveThreadDump } from '@/api/management';

export default function () {
  const list = ref([]);
  let listLoading = ref(false);

  const getData = async () => {
    listLoading.value = true;
    const resp = await retrieveThreadDump();
    list.value = resp.data.threads;
    listLoading.value = false;
  };

  onMounted(() => getData());

  return {
    list,
    listLoading,
    getData
  };
}
