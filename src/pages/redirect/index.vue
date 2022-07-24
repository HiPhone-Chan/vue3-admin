<script>
import { h } from 'vue'

export default {
  name: 'RedirectIndex',
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render() {
    return h('div') // avoid warning message
  }
}
</script>
