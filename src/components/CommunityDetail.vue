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
  @Prop({ required: true })
  private readonly community!: Community;

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
@import '../styles/mixins';
@import '~spectre.css/src/_layout';

.container {
  color: $dark-color;
}

.community-logo {
  flex: 1;
  margin: {
    right: 30px;
    left: 10px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @include media-screen-max-width(411px) {
    img {
      width: 67px;
      height: 67px;
    }
  }
}

.community-title {
  text-align: left;
  width: 50%;

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

  @include media-screen-max-width(730px) {
    h1 {
      font-size: 30px;
      margin: {
        top: 0;
      }
    }
    p {
      width: 200px;
      font-size: 22px;
      line-height: 35px;
      margin: {
        top: -20px;
      }
    }
  }

  @include media-screen-max-width(425px) {
    h1 {
      line-height: 35px;
    }
  }
}

.community-detail {
  p {
    text-align: left;
    width: 95%;
    margin: {
      top: 25px;
      bottom: 25px;
      left: 10px;
      right: 10px;
    }
  }

  @include media-screen-max-width(426px) {
    p {
      text-align: left;
      word-break: break-word;
    }
  }
}
</style>
