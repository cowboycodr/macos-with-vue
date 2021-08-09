<template>
  <div class="menubar">
    <img class="apple-icon" src="../assets/images/apple.png" alt="Apple">
    <span class="menubar-buttons">
      <span class="menubar-button menubar-window">Chrome</span>
      <span class="menubar-button">File</span>
      <span class="menubar-button">Edit</span>
      <span class="menubar-button">View</span>
      <span class="menubar-button">Go</span>
      <span class="menubar-button">Window</span>
      <span class="menubar-button">Help</span>
    </span>
    <span class="time">{{ hours }}:{{minutes}}:{{seconds}}</span>
  </div>
</template>

<script>
export default {
  name: 'menubar',
  data: function() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourtime: '',
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
      this.seconds = this.getZeroPad(now.getSeconds());
      this.hourtime = this.getHourTime(this.hours);
      this.hours = this.hours % 12 || 12;
      this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    }
  },
  mounted() {
    let timer = window.setTimeout(this.updateDateTime, 1000);
  },
}
</script>

<style scoped>
.menubar {
  width: 100%;
  height: 15px;
  display: flex;
  background-color: #fbfbfb;

  padding-top: 5px;
  padding-bottom: 5px;

  align-items: center;
}

.menubar-window {
  font-weight: bold!important;
}

.menubar-button {
  margin: 10px;
  font-weight: 500;
}

.menubar-button:hover {
  cursor: pointer;
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
  margin-left: auto;
  padding-right: 20px;

  font-weight: 500;
}
</style>