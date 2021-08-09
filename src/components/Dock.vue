<template>
  <div class="dock-container">
    <div class="dock">
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.dock-container {
  display: flex;
  justify-content: center;
}

.dock {
  position: fixed;
  width: 90%;
  height: 70px;
  background-image: linear-gradient(to left, #e2e2e2dc, #cac8ccdc, #e2e2e2dc);
  border-radius: 20px;
  bottom: 5px;
}
</style>