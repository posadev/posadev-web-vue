<template>
  <div>
    <ViewHeader :header-texts="organizersTexts" />
    <Communities />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import TitleTexts from '@/data/TitleTexts.model';
import CommunityContainer from '@/di/CommunityContainer';
import ViewHeader from '@/components/ViewHeader.vue';
import Communities from '@/components/Communities.vue';

@Component({
  components: { Communities, ViewHeader }
})
export default class CommunitiesView extends Mixins(CommunityContainer) {
  private get organizersTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('community.title'),
      this.$t('community.subtitle')
    );
  }
}
</script>

<style lang="scss"></style>
