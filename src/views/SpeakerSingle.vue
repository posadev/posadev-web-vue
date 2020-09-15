<template>
  <div>
    <ViewHeader :header-texts="speakersTexts" />
    <SpeakerInfo :speaker="speaker" />
  </div>
</template>

<script lang="ts">
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';
import SpeakerInfo from '@/components/SpeakerInfo.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Speaker from '@/data/Speaker.model';

@Component({
  components: {
    ViewHeader,
    SpeakerInfo
  }
})
export default class SpeakerSingle extends Vue {
  @Prop()
  private speaker!: Speaker;

  private get speakersTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.speakers.title'),
      this.$t('home.speakers.subtitle')
    );
  }
}
</script>
