<template>
  <div v-bind:class="{ reverse: isOdd }" class="community-card-box">
    <div class="community-card-image">
      <img :src="this.communityInfo.landing_image_url" />
    </div>
    <CommunityDetail
      class="community-card-detail"
      :communityInfo="this.communityInfo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Community from '@/data/Community.model';
import CommunityDetail from '@/components/CommunityDetail.vue';

@Component({
  components: {
    CommunityDetail
  }
})
export default class CommunityCard extends Vue {
  @Prop() private readonly communityInfo!: Community;
  @Prop() private readonly isOdd!: boolean;
}
</script>

<style lang="scss">
.community-card-box {
  display: flex;
  width: 100%;
  margin: {
    top: 40px;
  }
  flex-direction: row;
  &.reverse {
    flex-direction: row-reverse;
  }
}
.community-card-image {
  flex: 1;
  img {
    width: 420px;
    height: 400px;
  }
  padding: {
    left: 10px;
    right: 10px;
  }
}
.community-card-detail {
  flex: 3;
}

@media only screen and (max-width: 768px) {
  .community-card-box {
    flex-direction: column;
    &.reverse {
      flex-direction: column;
    }
  }
}
</style>
