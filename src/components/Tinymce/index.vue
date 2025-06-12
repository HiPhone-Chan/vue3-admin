<template>
  <editor id="uuid" licenseKey="gpl" :init="init()" />
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
import { init } from '@/components/Tinymce/config'
</script>

<script>
export default {
  name: 'TinymceEditor',
}
</script>
