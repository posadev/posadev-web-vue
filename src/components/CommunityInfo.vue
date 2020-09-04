<template>
  <div
    v-bind:class="[
      'community-card-box',
      { 'left-aligned': alignLeft, 'right-aligned': !alignLeft }
    ]"
  >
    <div class="community-card-image">
      <img :src="this.community.landingImageUrl" />
    </div>
    <CommunityDetail
      class="community-card-detail"
      :community="this.community"
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
export default class CommunityInfo extends Vue {
  @Prop({ required: true })
  private community!: Community;

  @Prop()
  private alignLeft!: boolean;
}
</script>

<style lang="scss">
@import '../styles/mixins';

.community-card-box {
  display: flex;
  width: 100%;
  margin: {
    top: 40px;
  }

  @include media-screen-max-width {
    flex-direction: column;
  }
}

.right-aligned {
  flex-direction: row;
}

.left-aligned {
  flex-direction: row-reverse;
}

.community-card-image {
  flex: 1;

  img {
    width: 420px;
    height: 400px;
  }

  @include media-screen-max-width {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      margin: {
        bottom: 10px;
      }
    }
  }
}

.community-card-detail {
  flex: 3;
}
</style>
