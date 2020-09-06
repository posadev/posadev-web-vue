<template>
  <div class="footer-container">
    <div class="footer-subcontainer">
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
    </div>
  </div>
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
@import '~spectre.css/src/_layout';
//0-768
@mixin query-only-screen-max-width($value-max-width: 768px) {
  @media only screen and (max-width: $value-max-width) {
    @content;
  }
}
//0-1024
@mixin only-screen-max-width($value-max-width: 1024px) {
  @media only screen and (max-width: $value-max-width) {
    @content;
  }
}
@mixin display {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}
.footer-container {
  background-color: $dark-color;
  width: 100%;
  min-height: 305px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  .footer-subcontainer {
    width: 90%;
    margin: 0 auto;
  }
  .footer-up {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3.5rem;
    margin: 0 auto;
    width: 90%;
    .newsletter {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .news {
        font-size: 24px;
        @include query-only-screen-max-width {
          padding-bottom: 20px;
        }
      }
      .spam {
        font: {
          weight: bold;
          size: 16px;
        }
        @include query-only-screen-max-width {
          width: 40%;
          text-align: start;
        }
      }
      @include query-only-screen-max-width {
        line-height: 20px;
        padding-bottom: 40px;
      }
    }
    .social {
      @include query-only-screen-max-width {
        transform: translateY(261px);
        padding-left: 0;
      }
    }
    @include query-only-screen-max-width {
      margin: 0;
      height: 314px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: {
        top: 43px;
        left: 32px;
        bottom: 0px;
      }
    }
  }
  .footer-down {
    display: flex;
    width: 90%;
    justify-content: space-between;
    padding-top: 3rem;
    margin: 0 auto;
    .menu-footer {
      width: 600px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menu-logo {
        width: 95px;
        height: 55px;
        cursor: pointer;
        @include query-only-screen-max-width {
          padding: {
            bottom: 30px;
            left: 0px;
          }
          width: 150px;
          height: 78px;
          transform: translateY(-120px);
        }
      }
      @include query-only-screen-max-width {
        margin: 0;
        width: 96%;
        padding: {
          left: 0px;
          top: 10px;
        }
        line-height: 70px;
        @include display;
      }
      @include only-screen-max-width {
        padding-bottom: 20px;
      }
    }
    .designed {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 29%;
      @include query-only-screen-max-width {
        display: none;
      }
    }
    @include query-only-screen-max-width {
      margin: 0;
      padding: {
        left: 20px;
        top: 0px;
      }
      @include display;
    }
    @include only-screen-max-width {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .line {
    width: 90%;
    height: 0px;
    margin: 0 auto;
    color: #c2bebe93;
    @include query-only-screen-max-width {
      display: none;
    }
  }
  .footer-item {
    cursor: pointer;
  }
}
</style>
