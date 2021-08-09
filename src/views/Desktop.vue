<template>
  <menubar />
  <dockbar />
  <contextmenu />
</template>

<script>
import dockbar from '../components/Dock.vue'
import menubar from '../components/MenuBar.vue'
import contextmenu from '../components/ContextMenu.vue'

export default {
  name: 'desktop',
  components: {
    dockbar,
    menubar,
    contextmenu,
  }
}
</script>

<style>

</style>