<template>
  <div>
    <div class="communityPage_header">
      <div class="communityPage_tittle">
        <p>{{ $t('communnity.title') }}</p>
      </div>
      <div class="communityPage_subtitle">
        <p>{{ $t('communnity.subtitle') }}</p>
      </div>
    </div>
    <div>
      <CommunityCard
        v-for="community in this.communities"
        v-bind:communityInfo="community"
        v-bind:key="community.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Community from '@/components/Community.model';
import CommunityCard from '@/components/CommunityCard.vue';
import CommunityService from '@/services/CommunityService';

@Component({
  components: {
    CommunityCard
  }
})
export default class CommunityDetail extends Vue {
  private communities: Community[] = [];

  mounted() {
    const communityService: CommunityService = new CommunityService();
    this.communities = communityService.findAll();
  }
}
</script>

<style lang="scss">
.communityPage_header {
  width: 100%;
  height: 274px;
  left: 0px;
  top: 139px;
  background: #1d3461;
}
.communityPage_tittle {
  left: 38.19%;
  right: 38.26%;
  top: 9.36%;
  bottom: 87.62%;
  font: {
    style: normal;
    weight: bold;
    size: 55px;
  }
  p {
    line-height: 30px;

    /* or 55% */
    display: flex;
    align-items: center;
    text-align: center;

    color: #e7ecef;
  }
}

.communityPage_subtitle {
  left: 12.22%;
  right: 12.22%;
  top: 13.88%;
  bottom: 83.39%;
  font: {
    style: normal;
    weight: normal;
    size: 24px;
  }
  p {
    line-height: 45px;

    /* or 187% */
    text-align: center;

    color: #e7ecef;
  }
}
</style>
