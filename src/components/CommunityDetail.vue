<template>
  <div>
    <div>
      <div>
        <div class="community_logo">
          <img :src="this.communityInfo.logo_url" />
        </div>
        <div class="community_name">
          <p>{{ this.communityInfo.name }}</p>
        </div>
      </div>
    </div>
    <div class="community_description">
      <p>{{ this.communityInfo.description }}</p>
    </div>
    <div>
      <ActionButton :info="this.buttonInfo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Community from './Community.model';
import ButtonInfo from '@/data/ButtonInfo.model';
import ActionButton from '@/components/ActionButton.vue';

@Component({
  components: {
    ActionButton
  }
})
export default class CommunityDetail extends Vue {
  @Prop() private readonly communityInfo!: Community;

  private readonly buttonInfo = new ButtonInfo('Quiero saber mas');
}
</script>

<style lang="scss">
.community_logo {
  position: relative;
  left: calc(50% - 160px / 2);
  top: calc(50% - 160px / 2 - 491.5px);
  img {
    width: 160px;
    height: 160px;
  }
}

.community_name {
  position: relative;
  left: 58.47%;
  right: 5%;
  top: 23.58%;
  bottom: 74.54%;
  font: {
    style: normal;
    weight: bold;
    size: 55px;
  }
  p {
    line-height: 30px;

    display: flex;
    align-items: center;

    color: #333333;
  }
}

.community_description {
  position: relative;
  left: 43.19%;
  right: 5.07%;
  top: 32.89%;
  bottom: 58.16%;
  font: {
    style: normal;
    weight: normal;
    size: 16px;
  }
  p {
    line-height: 36px;

    color: #333333;
  }
}
</style>
