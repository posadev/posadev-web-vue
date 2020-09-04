<template>
  <div class="container">
    <div class="columns">
      <div class="column col-2 community-logo">
        <img :src="this.community.logoUrl" />
      </div>
      <Title
        class="column col-4 col-mr-auto community-title"
        :texts="this.titleData"
      />
    </div>
    <div class="community-detail">
      <p>{{ this.community.description }}</p>
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
  @Prop() private readonly community!: Community;

  get titleData(): TitleTexts {
    return new TitleTexts(
      this.community.titleName,
      this.community.subtitleName
    );
  }
  get buttonInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('community.buttonText'), true);
  }
  private onCommunityClick() {
    window.open(this.community.socialPageUrl.toString());
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';

@mixin query-only-screen-max-width($value-max-width: 411px) {
  @media only screen and (max-width: $value-max-width) {
    @content;
  }
}

.container {
  color: $dark-color;
  @include query-only-screen-max-width {
    margin: {
      left: -15px;
    }
  }
}

.community-logo {
  flex: 1;
  margin: {
    right: 30px;
    left: 10px;
  }
  img {
    width: 160px;
    height: 160px;
  }
  @include query-only-screen-max-width {
    img {
      width: 67px;
      height: 67px;
    }
    margin: {
      top: 25px;
    }
  }
}

.community-title {
  text-align: left;
  h1 {
    margin: {
      top: 25px;
      bottom: 15px;
    }
  }
  p {
    line-height: 45px;
    width: 500px;
  }
  @include query-only-screen-max-width {
    text-align: left;
    h1 {
      font-size: 30px;
      margin: {
        top: 0px;
      }
    }
    p {
      width: 200px;
      font-size: 22px;
      line-height: 30px;
      margin: {
        top: -20px;
      }
    }
  }
}

.community-detail {
  margin: {
    top: -100px;
    left: 10px;
  }
  p {
    text-align: left;
    min-height: 75px;
    max-height: 200px;
    margin: {
      top: 25px;
      bottom: 25px;
    }
  }
  @include query-only-screen-max-width {
    margin: {
      top: -200px;
    }
    p {
      text-align: left;
    }
  }
}
</style>
