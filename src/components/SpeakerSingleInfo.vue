<template>
  <div>
    <SpeakerSingleCard class="column" :speaker="speaker" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SpeakerSingleCard from '@/components/SpeakerSingleCard.vue';
import Speaker from '@/data/Speaker.model';

@Component({
  components: { SpeakerSingleCard }
})
export default class SpeakerSingleInfo extends Vue {
  @Prop({ required: true })
  private speaker!: Speaker;
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
