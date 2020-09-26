<template>
  <div class="box-details">
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
    <TalkInfo v-for="(talk, index) in talks" :key="index" :talk="talk" />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import Speaker from '../data/Speaker.model';
import SocialLinks from '@/components/SocialLinks.vue';
import TalkInfo from '@/components/TalkInfo.vue';
import Talk from '@/data/Talk.model';
import { FirestoreService } from '@/service/FirestoreService';

@Component({
  components: { TalkInfo, SocialLinks }
})
export default class SpeakerDetails extends Vue {
  @Prop({ required: true }) private speaker!: Speaker;

  @Inject('talks')
  private service!: FirestoreService<Talk>;

  private talks: Talk[] = [];

  private get fullName(): string {
    return `${this.speaker.firstName} ${this.speaker.lastName}`;
  }

  created(): void {
    this.speaker.talks.forEach((talkRef: string) => {
      this.service.getFromPath(talkRef).then((talk: Talk | undefined) => {
        if (talk) {
          this.talks.push(talk);
        }
      });
    });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.box-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 0 auto;
  width: 70%;
  padding-top: 2rem;
  @include media-screen-max-width(1440px) {
    width: 90%;
  }
}
.card-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  @include media-screen-max-width(768px) {
    flex-direction: column;
    align-items: center;
  }
}

.container-img {
  position: relative;
  padding: {
    top: 1rem;
    right: 2rem;
  }
  @include media-screen-max-width(768px) {
    padding-right: 0;
  }

  .photo-speaker {
    clip-path: inset(0% 0% 11% 0%);
    width: 526px;
    height: 595px;
    filter: grayscale(0%);
    @include media-screen-max-width(1024px) {
      width: 300px;
      height: 331px;
    }
  }

  .company {
    color: $light-color;
    font-weight: bold;
    position: absolute;
    top: 90%;
    left: 45%;
  }
}

.container-info {
  .name {
    color: $primary-dark-color;
    font: {
      weight: bold;
      size: 55px;
    }
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
    margin-bottom: 49px;
  }
}
</style>
