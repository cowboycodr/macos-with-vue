<template>
  <div id="contextMenu" class="context-menu" style="display: none;">
    <ul>
      <li>Finder</li>
    </ul>
    <ul>
      <li><a href="https://github.com/cowboycodr" target="_blank">GitHub</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "contextmenu",
  created: function() {
    document.onclick = hideMenu;
    document.oncontextmenu = showMenu;

    function hideMenu() {
      document.getElementById("contextMenu").style.display = "none";
    }

    function showMenu(e) {
      e.preventDefault();

      if (document.getElementById("contextMenu").style.display == "block")
        hideMenu();
      else {
        var menu = document.getElementById("contextMenu");

        menu.style.display = "block";
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
      }
    }
  },
};
</script>

<style scoped>
.context-menu {
  position: absolute;
  text-align: center;
  background: rgba(216, 216, 216, 0.5);
  backdrop-filter: blur(60px) saturate(210%);

  border: .5px solid rgba(0, 0, 0, .2);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2),0 8px 40px rgba(0, 0, 0, .55);
  border-radius: 9px;
  overflow: auto;
  text-align: start;
  z-index: 9999;
}

.context-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 3px;

  border: .25px solid rgba(255, 255, 255, .2);
}

.context-menu ul li {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
}

.context-menu ul li a {
  text-decoration: none;
  color: black;
}

.context-menu ul li a:hover {
  color: white;
}

.context-menu ul li:hover {
  cursor: pointer;

  color: white;
  background-color: #2d7ef1;
  border-radius: 5px;
}
</style>
