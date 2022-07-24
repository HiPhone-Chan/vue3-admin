<script>
import { h, resolveComponent } from 'vue'

export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render() {
    // TODO
    const icon = this.icon
    const title = this.title
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(h(resolveComponent("el-icon"), {}, this.$slots.default()))
      } else {
        vnodes.push(h(resolveComponent("svg-icon"), { 'icon-class': icon }))
      }
    }

    if (title) {
      vnodes.push(h("span", { 'slot': title }, title))
    }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
