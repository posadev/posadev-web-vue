<template>
  <div v-bind:class="['community-card-box', { reverse: alignLeft }]">
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
export default class CommunityCard extends Vue {
  @Prop() private readonly community!: Community;
  @Prop() private readonly alignLeft!: boolean;
}
</script>

<style lang="scss">
@mixin query-only-screen-max-width($value-max-width: 768px) {
  @media only screen and (max-width: $value-max-width) {
    @content;
  }
}

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
  @include query-only-screen-max-width {
    flex-direction: column;
    &.reverse {
      flex-direction: column;
    }
  }
}

.community-card-image {
  flex: 1;
  img {
    width: 420px;
    height: 400px;
  }
  @include query-only-screen-max-width {
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
