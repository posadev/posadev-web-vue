<template>
  <div>
    <div class="card-container">
      <div class="container-img">
        <img
          class="photo-speaker img-fit-cover"
          :src="this.speaker.photoURL"
          :alt="this.speaker.photoURL"
        />
        <p class="company">{{ this.speaker.company }}</p>
      </div>
      <div class="container-info">
        <p class="name">{{ this.fullName }}</p>
        <p class="role">{{ this.speaker.role }}</p>
        <p class="bio">{{ this.speaker.bio }}</p>
        <SocialLinks :info="$t('social.textInfo')" :socialMedia="social" />
      </div>
    </div>
    <div class="container-talk">
      <p class="conference">{{ $t('speaker.conference') }}</p>
      <p class="talk-name">How to take advantage</p>
      <p class="talk-date">28 de Septiembre, 19:00-20:00</p>
      <p class="talk-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <AccentActionButton
        id="btn-community"
        :info="buttonInfo"
        v-on:button-action="onCommunityClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Speaker from '../data/Speaker.model';
import SocialLinks from '@/components/SocialLinks.vue';
import { SocialMedia } from '@/data/SocialMedia.type';
import ButtonInfo from '@/data/ButtonInfo.model';
import AccentActionButton from '@/components/AccentActionButton.vue';

@Component({
  components: { SocialLinks, AccentActionButton }
})
export default class SpeakerSingleCard extends Vue {
  @Prop({ required: true }) private speaker!: Speaker;

  private get fullName(): string {
    return `${this.speaker.firstName} ${this.speaker.lastName}`;
  }

  private social: SocialMedia = {
    twitter: new URL('https://twitter.com'),
    instagram: new URL('https://instagram.com'),
    facebook: new URL('https://facebook.com')
  };

  get buttonInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('speaker.addCalendar'), true);
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.card-container {
  display: flex;
  flex-direction: row;
  @include media-screen-max-width(411px) {
    flex-direction: column;
  }
}

.container-img {
  position: relative;
  height: 100%;
  width: 50%;
  padding-top: 1rem;

  .photo-speaker {
    width: 526px;
    height: 526px;
    filter: grayscale(0%);
    @include media-screen-max-width(411px) {
      width: 300px;
      height: 300px;
    }
    @include media-screen-max-width(768px) {
      width: 300px;
      height: 300px;
    }
  }

  .company {
    color: $light-color;
    font-weight: bold;
    position: absolute;
    top: 90%;
    left: 45%;
    @include media-screen-max-width(411px) {
      left: 80%;
    }
  }
}

.container-info {
  width: 40%;
  @include media-screen-max-width(411px) {
    width: 100%;
  }

  .name {
    color: $primary-dark-color;
    font-weight: bold;
    font-size: 55px;
    padding-bottom: 0;
    @include media-screen-max-width(411px) {
      font-size: 24px;
    }
  }

  .role {
    font-size: 24px;
    line-height: 45px;
    color: $dark-color;
    padding-bottom: 25px;
    @include media-screen-max-width(411px) {
      font-size: 16px;
    }
  }

  .bio {
    color: $dark-color;
    text-align: justify;
    margin-bottom: 80px;
    line-height: 36px;
  }
}
.container-talk {
  margin-top: 180px;
  margin-left: 5%;
  margin-bottom: 100px;
  text-align: left;
}

.conference {
  color: $dark-color;
  font-size: 24px;
}

.talk-name {
  color: $primary-dark-color;
  font-size: 24px;
  line-height: 45px;
}

.talk-date {
  color: $dark-color;
  line-height: 36px;
}

.talk-description {
  color: $dark-color;
  line-height: 36px;
  margin-top: 24px;
  margin-bottom: 5%;
}
</style>
