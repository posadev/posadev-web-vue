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
import { Component, Inject, Vue } from 'vue-property-decorator';
import SpeakerCard from '@/components/SpeakerCard.vue';
import Speaker from '@/data/Speaker.model';
import { FirebaseCollectionService } from '@/services/FirebaseCollectionService';

@Component({
  components: { SpeakerCard }
})
export default class Speakers extends Vue {
  @Inject('speakers')
  private service!: FirebaseCollectionService<Speaker>;

  private speakers: Speaker[] = [];

  private created() {
    this.service.findAll().then((response: Speaker[]) => {
      this.speakers.push(...response);
    });
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
