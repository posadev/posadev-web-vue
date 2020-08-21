<template>
  <nav class="navBar">
    <NavigationBarItem :path="'/'">
      <img class="navBarLogo" src="../assets/logoTransparente.png" alt="logo" />
    </NavigationBarItem>
    <label for="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <div class="navBarMenuContainer">
      <NavigationBarItem class="navBarItem" :path="'/presentadores'"
        >Presentadores</NavigationBarItem
      >
      <NavigationBarItem class="navBarItem" :path="'/agenda'"
        >Agenda</NavigationBarItem
      >
      <NavigationBarItem class="navBarItem" :path="'/sede'"
        >Sede</NavigationBarItem
      >
      <NavigationBarItem class="navBarItem" :path="'/patrocinadores'"
        >Patrocinadores</NavigationBarItem
      >
      <NavigationBarItem class="navBarItem" :path="'/login'"
        >Login</NavigationBarItem
      >
      <NavigationBarItem class="navBarItem" :path="'/idioma'"
        >Idioma</NavigationBarItem
      >
      <NavigationBarItem class="navBarItem navBarTicket" :path="'/boletos'"
        >Boletos</NavigationBarItem
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationBarItem from './NavigationBarItem.vue';

@Component({
  components: { NavigationBarItem }
})
export default class NavigationBar extends Vue {}
</script>

<style lang="scss">
@import '../styles/variables';
.navBar {
  display: flex;
  background-color: $primary-dark-color;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 139px;
  width: 100%;
  position: sticky;
}
.navBarLogo {
  max-height: 70px;
  padding: 0 0 0 24px;
  cursor: pointer;
}
.navBarMenuContainer {
  width: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
label {
  margin: 0 40px 0 0;
  font-size: 26px;
  line-height: 70px;
  display: none;
  width: 26px;
  float: right;
  color: $inactive-color;
}
#toggle {
  display: none;
}
.navBarItem {
  position: relative;
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  font: {
    family: $project-font;
    size: 16px;
  }
  clear: right;
}
.navBarItem ::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: -3px;
  left: 0;
  background-color: $accent-color;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transition: 0.25s linear;
}
.navBarItem :hover:before,
.navBarItem :active::before {
  visibility: visible;
  transform: scaleX(1);
}
.navBarTicket {
  background-color: $accent-color;
  padding: calc(120px / 2) 25px calc(120px / 2) 25px;
  color: $primary-dark-color;
  cursor: pointer;
  font: {
    family: $project-font;
    size: 16px;
    weight: 800;
  }
}
.navBarTicket ::before {
  content: '';
  position: absolute;
  width: 55px;
  height: 3px;
  bottom: calc(119px / 2);
  left: auto;
  right: auto;
  background-color: $primary-dark-color;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transition: 0.25s linear;
}
.navBarTicket :hover:before,
.navBarTicket :active::before {
  visibility: visible;
  transform: scaleX(1);
}
@media only screen and (max-width: 768px) {
  .navBar {
    position: sticky;
    display: flex;
    background-color: $primary-dark-color;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
  .navBarMenuContainer {
    background-color: $primary-dark-color;
    height: auto;
  }
  .navBarItem {
    padding: 15px 0 15px 0;
  }
  .navBarItem ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 7px;
    left: 0;
    background-color: $accent-color;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  .navBarItem :hover:before,
  .navBarItem :active::before {
    visibility: visible;
    transform: scaleX(1);
  }
  .navBarTicket ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: calc(100% / 4);
    background-color: $primary-dark-color;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  .navBarTicket :hover:before,
  .navBarTicket :active::before {
    visibility: visible;
    transform: scaleX(1);
  }
  label {
    display: block;
    cursor: pointer;
  }
  .navBarMenuContainer {
    text-align: center;
    width: 100%;
    display: none;
  }
  .navBarMenuContainer a {
    display: block;
    margin: 0;
  }
  #toggle:checked + .navBarMenuContainer {
    display: block;
  }
}
</style>
