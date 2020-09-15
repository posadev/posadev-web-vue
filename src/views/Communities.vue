<template>
  <div>
    <ViewHeader :header-texts="organizersTexts" />
    <div class="community-section">
      <p class="title-section">{{ $t('community.titleSection') }}</p>
      <CommunityInfo
        v-for="(community, index) in this.communities"
        v-bind:community="community"
        v-bind:key="community.titleName"
        :alignLeft="index % 2 !== 0"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TitleTexts from '@/data/TitleTexts.model';
import { Component, Inject, Vue } from 'vue-property-decorator';
import Community from '@/data/Community.model';
import CommunityInfo from '@/components/CommunityInfo.vue';
import { FirestoreService } from '@/service/FirestoreService';
import ViewHeader from '@/components/ViewHeader.vue';

@Component({
  components: {
    ViewHeader,
    CommunityInfo
  }
})
export default class Communities extends Vue {
  private get organizersTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('community.title'),
      this.$t('community.subtitle')
    );
  }

  @Inject('communities')
  private service!: FirestoreService<Community>;
  private communities: Community[] = [];

  private created() {
    this.service.findAll().then((res: Community[]) => {
      this.communities.push(...res);
    });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.community-section {
  margin: {
    right: 45px;
    bottom: 60px;
    left: 45px;
  }
  @include media-screen-max-width(411px) {
    margin: {
      top: 45px;
      bottom: 45px;
      right: 0px;
      left: 0px;
    }
  }
}

.title-section {
  font-size: 24px;
  text-align: center;
  color: $dark-color;
  display: block;
  padding: 45px;
  @include media-screen-max-width(411px) {
    display: none;
  }
}
</style>
