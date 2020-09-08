<template>
  <div>
    <ViewHeader :header-texts="speakersTexts" />
    <template>
      <Speakers />
    </template>
  </div>
</template>

<script lang="ts">
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';
import Speaker from '@/data/Speaker.model';
import Speakers from '@/components/Speakers.vue';
import { FirebaseCollectionService } from '@/service/FirebaseCollectionService';
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ViewHeader,
    Speakers
  }
})
export default class SpeakersAll extends Vue {
  private get speakersTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.speakers.title'),
      this.$t('home.speakers.subtitle')
    );
  }

  @Inject('speakers')
  private service!: FirebaseCollectionService<Speaker>;
  private speakers: Speaker[] = [];

  private created() {
    this.service.findAll().then((res: Speaker[]) => {
      this.speakers.push(...res);
    });
  }
}
</script>

<style lang="scss">
// Style
</style>
