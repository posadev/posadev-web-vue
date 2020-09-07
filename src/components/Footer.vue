<template>
  <footer class="footer-container">
    <div class="footer-up">
      <div class="newsletter">
        <p class="news">{{ $t('footer-text.title') }}</p>
        <p class="spam">
          {{ $t('footer-text.subtitle') }}
        </p>
      </div>
      <SocialLinks
        class="social"
        :info="$t('footer-text.social')"
        :socialMedia="social"
      />
    </div>
    <hr class="line" />
    <div class="footer-down">
      <div class="menu-footer">
        <NavigationBarItem :path="'/'">
          <img
            class="menu-logo"
            src="../assets/logoTransparente.png"
            alt="logo"
          />
        </NavigationBarItem>
        <NavigationBarItem
          v-for="footerItem in items"
          class="footer-item"
          v-bind:key="footerItem.path"
          :path="footerItem.path"
        >
          {{ $t(footerItem.textRef) }}
        </NavigationBarItem>
      </div>
      <div class="designed">
        <p>{{ $t('footer-text.designed') }}</p>
        <p>{{ $t('footer-text.developed') }}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SocialLinks from '@/components/SocialLinks.vue';
import { SocialMedia } from '@/data/SocialMedia.type';
import NavigationBarItem from './NavigationBarItem.vue';
import { FooterItem, navigationItems } from '@/data/FooterItem.type';

@Component({
  components: { SocialLinks, NavigationBarItem }
})
export default class Footer extends Vue {
  private items: FooterItem[] = navigationItems;

  private social: SocialMedia = {
    twitter: new URL('https://twitter.com'),
    instagram: new URL('https://instagram.com'),
    facebook: new URL('https://facebook.com')
  };
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '~spectre.css/src/_layout';

@mixin display {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 305px;
  background-color: $dark-color;
  color: white;

  .footer-up {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 3.5rem;

    .newsletter {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .news {
        font-size: 24px;

        @include media-screen-max-width(768px) {
          padding-bottom: 20px;
        }
      }

      .spam {
        font: {
          weight: bold;
          size: 16px;
        }

        @include media-screen-max-width(768px) {
          width: 40%;
          text-align: start;
        }
      }

      @include media-screen-max-width(768px) {
        line-height: 20px;
        padding-bottom: 40px;
      }
    }

    .social {
      @include media-screen-max-width(768px) {
        transform: translateY(261px);
        padding-left: 0;
      }
    }

    @include media-screen-max-width(768px) {
      margin: 0;
      height: 314px;
      flex-direction: column;
      justify-content: start;
      padding: {
        top: 43px;
        left: 32px;
        bottom: 0;
      }
    }
  }

  .footer-down {
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 3rem;

    .menu-footer {
      display: flex;
      justify-content: space-between;
      width: 600px;
      align-items: center;

      .menu-logo {
        width: 95px;
        height: 55px;
        cursor: pointer;

        @include media-screen-max-width(768px) {
          padding: {
            bottom: 30px;
            left: 0;
          }
          width: 150px;
          height: 78px;
          transform: translateY(-120px);
        }
      }

      @include media-screen-max-width(768px) {
        margin: 0;
        width: 96%;
        padding: {
          left: 0;
          top: 10px;
        }
        line-height: 70px;

        @include display;
      }

      @include media-screen-max-width(1024px) {
        padding-bottom: 20px;
      }
    }

    .designed {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 29%;

      @include media-screen-max-width(768px) {
        display: none;
      }
    }

    @include media-screen-max-width(768px) {
      margin: 0;
      padding: {
        left: 20px;
        top: 0;
      }

      @include display;
    }

    @include media-screen-max-width(1024px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .line {
    width: 90%;
    margin: 0 auto;
    color: $inactive-text;

    @include media-screen-max-width(768px) {
      display: none;
    }
  }
}

.footer-item {
  cursor: pointer;
}
</style>
