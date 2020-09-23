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
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import SpeakerCard from '@/components/SpeakerCard.vue';
import Speaker from '@/data/Speaker.model';
import { FirestoreService } from '@/service/FirestoreService';

@Component({
  components: { SpeakerCard }
})
export default class Speakers extends Vue {
  @Inject('speakers')
  private service!: FirestoreService<Speaker>;

  @Prop()
  private amount!: number;

  private speakers: Speaker[] = [];

  private created() {
    const callback = (response: Speaker[]) => {
      this.speakers.push(...response);
    };

    let promise: Promise<Speaker[]>;

    if (this.amount > 0) {
      promise = this.service.find(this.amount);
    } else {
      promise = this.service.findAll();
    }

    promise.then(callback).catch((err: string) => {
      err;
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
  max-width: 1590px;
}
</style>
