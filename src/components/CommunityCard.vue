<template>
  <div class="communityCard_box">
    <div class="communityCard_image">
      <img :src="this.communityInfo.landing_image_url" />
    </div>
    <CommnityDetail
      class="communityCard_info"
      :communityInfo="this.communityInfo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Community from './Community.model';
import CommnityDetail from '@/components/CommunityDetail.vue';

@Component({
  components: {
    CommnityDetail
  }
})
export default class CommunityCard extends Vue {
  @Prop() private readonly communityInfo!: Community;
}
</script>

<style lang="scss">
.communityCard_box {
  display: flex;
  width: 100%;
  &.reverse {
    flex-direction: row-reverse;
  }
}
.communityCard_image {
  width: 40%;
  img {
    margin: {
      top: 15px;
      bottom: 15px;
      left: 15px;
      right: 15px;
    }
    width: 100%;
    height: 100%;
  }
}
.communityCard_info {
  width: 60%;
}
</style>
