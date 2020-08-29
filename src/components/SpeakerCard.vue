<template>
  <div>
    <div>
      <img
        class="photo-speaker"
        :src="this.speaker.photoURL"
        :alt="this.speaker.company"
      />
      <p class="company">{{ this.speaker.company }}</p>
    </div>
    <div>
      <p class="name">{{ this.speaker.speakerName }}</p>
      <p class="bio">{{ this.speaker.bio }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Speaker from '../data/Speaker.model';

@Component
export default class SpeakerCard extends Vue {
  @Prop({ required: true }) private speaker!: Speaker;
}
</script>
<style lang="scss"></style>
