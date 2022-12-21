<template>
  <main>
    <editor></editor>
  </main>
</template>


<script>
import Editor from '@/components/Tinymce/index.vue'

export default {
  name: 'TinymceDemo',
  components: { Editor },
  mounted() {
    tinymce.init({
      target: this.$refs["tiny"]
    })
  }
}
</script>
