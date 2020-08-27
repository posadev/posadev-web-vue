<template>
  <div>
    <div>
      <img :src="this.speaker.photoURL" :alt="this.speaker.company" />
      <p>{{ this.speaker.company }}</p>
    </div>
    <div>
      <p>{{ this.speaker.speakerName }}</p>
      <p>{{ this.speaker.bio }}</p>
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
