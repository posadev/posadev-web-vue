<template>
  <div @click="goToSocialLink" class="social-link">
    <button :class="socialLink.social"></button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { SocialLink } from '@/data/SocialMedia.type';

@Component
export default class SocialButton extends Vue {
  @Prop({ required: true })
  private socialLink!: SocialLink;

  private goToSocialLink(): void {
    window.open(this.socialLink.url.toString());
  }
}
</script>

<style lang="scss">
%social-style {
  margin: {
    left: 8px;
    right: 8px;
  }
  width: 32px;
  height: 32px;
  border: none;
  background: {
    repeat: no-repeat;
    color: transparent;
  }
  cursor: pointer;
}

.twitter {
  background-image: url('../assets/twitter.png');
  @extend %social-style;
}

.facebook {
  background-image: url('../assets/facebook.png');
  @extend %social-style;
}

.github {
  background-image: url('../assets/github.png');
  @extend %social-style;
}

.linkedin {
  background-image: url('../assets/linkedin.png');
  @extend %social-style;
}

.instagram {
  background-image: url('../assets/instagram.png');
  @extend %social-style;
}
</style>
