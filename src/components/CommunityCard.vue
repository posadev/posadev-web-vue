<template>
  <div v-bind:class="{ reverse: isOdd }" class="communityCard_box">
    <div class="communityCard_image">
      <img :src="this.communityInfo.landing_image_url" />
    </div>
    <CommnityDetail
      class="communityCard_detail"
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
  @Prop() private readonly isOdd!: boolean;
}
</script>

<style lang="scss">
.communityCard_box {
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
.communityCard_image {
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
.communityCard_detail {
  flex: 3;
}

@media only screen and (max-width: 768px) {
  .communityCard_box {
    flex-direction: column;
    &.reverse {
      flex-direction: column;
    }
  }
}
</style>
