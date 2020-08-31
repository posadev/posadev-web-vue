<template>
  <div class="columns">
    <SpeakerCard
      class="column"
      v-for="speaker in speakers"
      v-bind:key="speaker.name"
      :speaker="speaker"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpeakerCard from '@/components/SpeakerCard.vue';
import SpeakersMock from '@/mocks/Speakers.mock';
import Speaker from '@/data/Speaker.model';

@Component({
  components: { SpeakerCard }
})
export default class Speakers extends Vue {
  private get speakers(): Speaker[] {
    return SpeakersMock;
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';
.columns {
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
}
</style>
