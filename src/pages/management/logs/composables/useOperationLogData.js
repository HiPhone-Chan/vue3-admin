import {
  getCurrentInstance,
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  watch
} from 'vue';
import { getOperationLogs } from '@/api/log';

export default function () {
  const app = getCurrentInstance().appContext.config.globalProperties;
  const list = ref([]);
  let total = ref(0);
  let listLoading = ref(false);
  let listQuery = reactive({
    page: 0,
    size: 10
  });

  const getData = async () => {
    listLoading.value = true;
    const resp = await getOperationLogs(listQuery);
    list.value = resp.data;
    total.value = Number(resp.headers['x-total-count']);
    listLoading.value = false;
  };

  onBeforeMount(() => {
    const query = app.$route.query;
    if (query) {
      let queryVal = listQuery;
      queryVal.page = query.page ? Number(query.page) : queryVal.page;
      queryVal.size = query.size ? Number(query.size) : queryVal.size;
    }
  });
  onMounted(() => getData());

  watch(
    () => listQuery,
    (val, oldVal) => {
      app.$router.push({
        query: listQuery
      });
    },
    { deep: true }
  );

  const handleFilter = () => {
    listQuery.page = 0;
    getData();
  };

  return {
    list,
    total,
    listLoading,
    listQuery,
    getData,
    handleFilter
  };
}