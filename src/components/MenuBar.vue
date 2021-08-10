<template>
  <div class="menubar">
    <img class="apple-icon" src="../assets/images/apple.png" alt="Apple">
    <span class="menubar-buttons">
      <span class="menubar-window">{{ activeWindow }}</span>
      <span v-show="menuBarEnabled" class="menubar-button">File</span>
      <span v-show="menuBarEnabled" class="menubar-button">Edit</span>
      <span v-show="menuBarEnabled" class="menubar-button">View</span>
      <span v-show="menuBarEnabled" class="menubar-button">Go</span>
      <span v-show="menuBarEnabled" class="menubar-button">Window</span>
      <span v-show="menuBarEnabled" class="menubar-button">Help</span>
    </span>
    <span class="fullscreenbar" style="width:100%;height:25px;" @click="toggleFullscreen()"></span>
    <span class="time">{{ hours }}:{{minutes}} {{hourtime}}</span>
  </div>
</template>

<script>
export default {
  name: 'menubar',
  data: function() {
    return {
      hours: 0,
      minutes: 0,
      hourtime: '',
      menuBarEnabled: true,
    }
  },
  methods: {
    getZeroPad(n) {
      return (parseInt(n, 10) >= 10 ? '' : '0') + n
    },
    getHourTime(h) {
      return h >= 12 ? 'PM' : 'AM'
    },
    updateDateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = this.getZeroPad(now.getMinutes());
      this.hourtime = this.getHourTime(this.hours);
      this.hours = this.hours % 12 || 12;
      this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    },
    toggleFullscreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen()
          .catch((err) => console.error(err))
      } else {
        document.documentElement.requestFullscreen();
      }
    }
  },
  mounted() {
    let timer = window.setTimeout(this.updateDateTime, 1);
  },
  computed: {
    activeWindow: function() {
      if (this.$store.state.activeWindow != null ) {
        return this.$store.state.activeWindow;
      } else {
        return this.$store.state.userName;
      }
    }
  }
}
</script>

<style scoped>
.menubar {
  width: 100%;
  height: 25px;
  display: flex;
  background-color: #fbfbfb;
  padding: 0px;

  align-items: center;
}

.menubar-window {
  font-weight: bold;
  margin: 10px;

  cursor: pointer;
}

.menubar-button {
  margin: 7px;
  font-weight: 500;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 5px;
  padding-left: 5px;
}

.menubar-button:hover {
  cursor: pointer;
  background-color: #2d7ef1;
  color: white;
}

.apple-icon {
  margin-left: 20px;
  margin-right: 10px;

  width: 17px;
}

.apple-icon:hover {
  cursor: pointer;
}

.time {
  width: 10%;
  margin-left: auto;
  padding-right: 20px;
  white-space: nowrap;

  font-weight: 500;
}
</style>