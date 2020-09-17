<template>
  <nav class="navBar">
    <NavigationBarItem
      :path="'/'"
      v-on:scroll-to="scrollTo"
      v-on:go-to="openSection"
    >
      <img class="navBarLogo" src="../assets/logoTransparente.png" alt="logo" />
    </NavigationBarItem>
    <label for="toggle">&#9776;</label>
    <input type="checkbox" id="toggle" />
    <div class="navBarMenuContainer">
      <NavigationBarItem
        v-for="barItem in items"
        class="navBarItem"
        v-bind:key="barItem.path"
        :path="barItem.path"
        v-on:scroll-to="scrollTo"
        v-on:go-to="openSection"
        >{{ $t(barItem.textRef) }}
      </NavigationBarItem>
      <NavigationBarItem
        class="navBarItem navBarTicket"
        :path="'#tickets'"
        v-on:scroll-to="scrollTo"
        >{{ $t('header.tickets') }}
      </NavigationBarItem>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationBarItem from './NavigationBarItem.vue';
import { BarItem, navigationItems } from '@/data/BarItem.type';

@Component({
  components: { NavigationBarItem }
})
export default class NavigationBar extends Vue {
  private items: BarItem[] = navigationItems;

  private scrollTo(id: string): void {
    const section = document.getElementById(id);
    if (section !== null) {
      section?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } else {
      this.openSection(`/#${id}`);
    }
  }

  private openSection(section: string): void {
    this.$router.push(section).catch(() => {
      //
    });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

@mixin visible-scaleX($scale-value: 1) {
  visibility: visible;
  transform: scaleX($scale-value);
}

@mixin query-only-screen-max-width($value-max-width: 900px) {
  @media only screen and (max-width: $value-max-width) {
    @content;
  }
}

%visible-scale1-media {
  @include visible-scaleX(1);

  @media only screen and (max-width: 900px) {
    @include visible-scaleX(1);
  }
}

.navBar {
  display: flex;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: $primary-dark-color;
  box-shadow: 0 0.5em 0.5em -0.4em #091c2796;
  flex: {
    direction: row;
    wrap: wrap;
  }
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  @include query-only-screen-max-width {
    position: static;
    display: flex;
    background-color: $primary-dark-color;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
}

.navBarLogo {
  max-height: 70px;
  padding: 0 0 0 24px;
  cursor: pointer;
}

.navBarMenuContainer {
  width: 60%;
  height: 100%;
  display: flex;
  flex: {
    direction: row;
    wrap: wrap;
  }
  align-items: center;
  justify-content: space-around;
}

label {
  display: none;
  width: 26px;
  float: right;
  margin: 0 40px 0 0;
  font-size: 26px;
  line-height: 70px;
  color: $light-color;

  @include query-only-screen-max-width {
    display: block;
    cursor: pointer;
  }
}

#toggle {
  display: none;

  &:checked {
    + .navBarMenuContainer {
      @include query-only-screen-max-width {
        display: block;
      }
    }
  }
}

.navBarItem {
  position: relative;
  color: #ffffff;
  cursor: pointer;
  font: {
    family: $project-font;
    size: 1rem;
  }
  clear: right;

  %nav-item-hide {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: $accent-color;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
    left: 0;
  }

  ::before {
    @extend %nav-item-hide;
    bottom: -3px;
    border-radius: 5px;

    @include query-only-screen-max-width {
      @extend %nav-item-hide;
      bottom: 7px;
    }
  }

  :hover:before {
    @extend %visible-scale1-media;
  }

  :active::before {
    @extend %visible-scale1-media;
  }

  @include query-only-screen-max-width {
    padding: 15px 0 15px 0;
  }
}

.navBarTicket {
  background-color: $accent-color;
  padding: 0 calc((119px - 53.9px) / 2) 0 calc((119px - 53.9px) / 2);
  height: 100%;
  display: flex;
  align-items: center;
  color: $primary-dark-color;
  cursor: pointer;
  font: {
    family: $project-font;
    size: 1rem;
    weight: 800;
  }

  @include query-only-screen-max-width {
    display: block;
    padding: calc((100px - 19.2px) / 2) 0 calc((100px - 19.2px) / 2) 0;
  }

  %nav-ticket-hide {
    content: '';
    position: absolute;
    height: 3px;
    bottom: calc(100% / 4);
    visibility: hidden;
    background-color: $primary-dark-color;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }

  ::before {
    @extend %nav-ticket-hide;
    width: 55px;
    left: auto;
    right: auto;

    @include query-only-screen-max-width {
      @extend %nav-ticket-hide;
      width: 100%;
    }
  }

  :hover:before {
    @extend %visible-scale1-media;
  }

  :active::before {
    @extend %visible-scale1-media;
  }
}

.navBarMenuContainer {
  @include query-only-screen-max-width {
    display: none;
    height: auto;
    width: 100%;
    background-color: $primary-dark-color;
    text-align: center;
  }

  a {
    @include query-only-screen-max-width {
      display: block;
      margin: 0;
    }
  }
}
</style>
