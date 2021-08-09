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
  height: 75px;
  background-image: linear-gradient(to left, #e2e2e2dc, #cac8ccdc, #e2e2e2dc);
  backdrop-filter: saturate(210%) blur(60px);
  border-radius: 20px;
  bottom: 5px;

  max-width: 1611px;

  border: 1px solid black;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 8px 40px rgba(0, 0, 0, 0.55);
}
</style>