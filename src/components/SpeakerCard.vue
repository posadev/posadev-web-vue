<template>
  <div class="speaker-container" @click="goToDetail">
    <div class="containerImg">
      <img
        class="photo-speaker img-fit-cover"
        :src="this.speaker.photoURL"
        :alt="this.speaker.company"
      />
      <p class="company">{{ this.speaker.company }}</p>
    </div>
    <div class="texts">
      <p class="name">{{ this.fullName }}</p>
      <p class="role">{{ this.speaker.role }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Speaker from '../data/Speaker.model';

@Component
export default class SpeakerCard extends Vue {
  @Prop({ required: true })
  private speaker!: Speaker;

  private get fullName(): string {
    return `${this.speaker.firstName} ${this.speaker.lastName}`;
  }

  private goToDetail() {
    this.$router.push({
      name: 'speakers/detail',
      params: {
        fullName: `${this.speaker.firstName}+${this.speaker.lastName}`,
        bio: this.speaker.bio,
        company: this.speaker.company,
        firstName: this.speaker.firstName,
        lastName: this.speaker.lastName,
        role: this.speaker.role,
        photoURL: this.speaker.photoURL.toString(),
        socialMedia: JSON.stringify(this.speaker.socialMedia),
        talks: JSON.stringify(this.speaker.talks)
      }
    });
  }
}
</script>
<style lang="scss">
@import '../styles/variables';

.speaker-container {
  cursor: pointer;
}

.containerImg {
  position: relative;
  height: 235px;
  padding-top: 1rem;

  .photo-speaker {
    width: 306px;
    height: 236px;
    filter: grayscale(100%);

    &:hover {
      transition: all 0.7s ease;
      filter: none;
    }
  }

  .company {
    color: $light-color;
    font-weight: bold;
    line-height: 75px;
    position: absolute;
    top: 92%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.texts {
  background-color: $light-color;
  height: 80px;
  width: 306px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .name {
    color: $primary-dark-color;
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 0;
  }

  .role {
    line-height: 36px;
    color: $dark-color;
    padding-bottom: 5px;
  }
}
</style>
