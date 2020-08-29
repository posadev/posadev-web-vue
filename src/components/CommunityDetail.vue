<template>
  <div class="container">
    <div class="columns">
      <div class="colum col-xl-3 col-xs-1 community-logo">
        <img :src="this.communityInfo.logo_url" />
      </div>
      <Title
        class="col-xl-9 col-xs-1 community-title"
        :texts="this.titleData"
      />
    </div>
    <div class="community-detail">
      <p>{{ this.communityInfo.description }}</p>
      <AccentActionButton
        id="btn-community"
        :info="buttonInfo"
        v-on:button-action="onCommunityClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Community from '@/data/Community.model';
import ButtonInfo from '@/data/ButtonInfo.model';
import AccentActionButton from '@/components/AccentActionButton.vue';
import Title from '@/components/Title.vue';
import TitleTexts from '@/data/TitleTexts.model';
@Component({
  components: {
    AccentActionButton,
    Title
  }
})
export default class CommunityDetail extends Vue {
  @Prop() private readonly communityInfo!: Community;

  get titleData(): TitleTexts {
    return new TitleTexts(
      this.communityInfo.titleName,
      this.communityInfo.subtitleName
    );
  }
  get buttonInfo(): ButtonInfo {
    return new ButtonInfo('Quiero saber mas');
  }
  private onCommunityClick() {
    window.open(this.communityInfo.social_page_url.toString());
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../../node_modules/spectre.css/src/_layout';

.community-logo {
  margin: {
    right: 10px;
    left: 10px;
  }
  img {
    width: 146px;
    height: 146px;
  }
}

.community-detail {
  margin: {
    left: 10px;
  }
  p {
    text-align: left;
    min-height: 75px;
    max-height: 200;
    margin: {
      top: 25px;
      bottom: 25px;
    }
  }
}

.community-title {
  margin: {
    left: 10px;
  }
  h1 {
    margin: {
      top: 25px;
      bottom: 15px;
    }
  }
}

@media only screen and (max-width: 767px) {
  .columns {
    flex-direction: column;
  }
}
</style>
