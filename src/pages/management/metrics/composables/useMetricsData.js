import { ref, onMounted } from 'vue';
import { getMetrics } from '@/api/management';

export default function () {
  const metrics = ref([]);
  let loading = ref(false);

  const getData = async () => {
    loading.value = true;
    const resp = await getMetrics();
    metrics.value = resp.data;
    loading.value = false;
  };

  onMounted(() => getData());

  const handleFilter = () => {
    getData();
  };

  return {
    metrics,
    loading,
    getData,
    handleFilter
  };
}
