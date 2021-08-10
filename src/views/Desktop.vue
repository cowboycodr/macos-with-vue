<template>
  <menubar />
  <contextmenu />
</template>

<script>
import menubar from '../components/MenuBar.vue'
import contextmenu from '../components/ContextMenu.vue'

export default {
  name: 'desktop',
  components: {
    menubar,
    contextmenu,
  }
}
</script>

<style>

</style>