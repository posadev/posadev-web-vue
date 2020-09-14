<template>
  <div>
    <SpeakerSingleCard
      class="column"
      v-for="speaker in speakers"
      v-bind:key="speaker.name"
      :speaker="speaker"
    />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import SpeakerSingleCard from '@/components/SpeakerSingleCard.vue';
import Speaker from '@/data/Speaker.model';
import { FirebaseCollectionService } from '@/service/FirebaseCollectionService';

@Component({
  components: { SpeakerSingleCard }
})
export default class SpeakerSingle extends Vue {
  @Inject('speakers')
  private service!: FirebaseCollectionService<Speaker>;

  private speakers: Speaker[] = [];

  private created() {
    this.service.find(1).then((response: Speaker[]) => {
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
