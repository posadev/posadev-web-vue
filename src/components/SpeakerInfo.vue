<template>
  <SpeakerDetails class="column" :speaker="speaker" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SpeakerDetails from '@/components/SpeakerDetails.vue';
import Speaker from '@/data/Speaker.model';

@Component({
  components: { SpeakerDetails }
})
export default class SpeakerInfo extends Vue {
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
