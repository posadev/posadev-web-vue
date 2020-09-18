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
        <div class="social-speaker">
          <SocialLinks
            :info="$t('social.textInfo')"
            :socialMedia="this.speaker.socialMedia"
          />
        </div>
      </div>
    </div>
    <SpeakerSingleTalk v-for="talk in speaker.talks" :key="talk" :talk="talk" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Speaker from '../data/Speaker.model';
import SocialLinks from '@/components/SocialLinks.vue';
import SpeakerSingleTalk from '@/components/SpeakerSingleTalk.vue';

@Component({
  components: { SpeakerSingleTalk, SocialLinks }
})
export default class SpeakerDetails extends Vue {
  @Prop({ required: true }) private speaker!: Speaker;

  private get fullName(): string {
    return `${this.speaker.firstName} ${this.speaker.lastName}`;
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
    margin-bottom: 49px;
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

.social-speaker {
  padding-bottom: 11%;
}
</style>
