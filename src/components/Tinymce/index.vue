<template>
  <textarea ref="tiny"></textarea>
</template>


<script>
import { render } from '@/components/Tinymce/config'
export default {
  name: 'TinymceEditor',
  mounted() {
    render({
      target: this.$refs["tiny"]
    })
  }
}
</script>
