<template>
  <div v-bind:class="['community-card-box', { reverse: isOdd }]">
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

  .community-card-image {
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
</style>
