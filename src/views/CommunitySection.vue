<template>
  <div class="community-section">
    <p class="title-section">{{ $t('community.titleSection') }}</p>
    <CommunityCard
      v-for="(community, index) in this.communities"
      v-bind:communityInfo="community"
      v-bind:key="community.name"
      :isOdd="index % 2 !== 0"
    />
  </div>
</template>

<script lang="ts">
import TitleTexts from '@/data/TitleTexts.model';
import { Component, Vue } from 'vue-property-decorator';
import Community from '@/data/Community.model';
import CommunityCard from '@/components/CommunityCard.vue';
import communities from '@/mocks/communities.mock';

@Component({
  components: {
    CommunityCard
  }
})
export default class CommunitySection extends Vue {
  private get organizersTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('community.title'),
      this.$t('community.subtitle')
    );
  }
  get communities(): Community[] {
    //FIXME: this is obtained from firebase
    return communities;
  }
  // @Inject('communities')
  // private service!: CommunityService;
  // private communities: Community[] = [];

  // created() {
  //   this.service.findAll().then((res: Community[]) => {
  //     this.communities.push(...res);
  //   });
  // }
}
</script>

<style lang="scss">
@import '../styles/variables';
.community-section {
  margin: {
    right: 45px;
    bottom: 60px;
    left: 45px;
  }
}

.title-section {
  font-size: 24px;
  text-align: center;
  color: $dark-color;
  display: block;
  padding: 45px;
}

@media only screen and (max-width: 400px) {
  .community-section {
    margin {
      top: 45px;
      bottom: 45px;
    }
  }

  .title-section {
    display: none;
  }
}
</style>
