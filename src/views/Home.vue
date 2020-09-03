<template>
  <div>
    <Banner />
    <AboutEvent class="section-light section-home" />
    <img :src="imageDivider" alt="JConf 2020" />
    <SectionSpeakers class="section-home section-dark" />
    <SectionWorkshops class="section-home section-regular" />
    <SectionTickets class="section-home section-white" />
    <SectionContact class="section-home section-light" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SectionContact from '@/components/SectionContact.vue';
import SectionSpeakers from '@/components/SectionSpeakers.vue';
import SectionWorkshops from '@/components/SectionWorkshops.vue';
import SectionTickets from '@/components/SectionTickets.vue';
import Banner from '@/components/Banner.vue';
import AboutEvent from '@/components/AboutEvent.vue';
import { fetchImageURL } from '@/service/fetchImageURL';

@Component({
  components: {
    AboutEvent,
    Banner,
    SectionSpeakers,
    SectionWorkshops,
    SectionTickets,
    SectionContact
  }
})
export default class Home extends Vue {
  private imageDivider = '';

  private created() {
    fetchImageURL('Rectangle.png').then((dividerUrl: string) => {
      this.imageDivider = dividerUrl;
    });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

%section-title {
  margin: {
    top: 5%;
    bottom: 5%;
  }
}

.section-dark {
  @include section-color($primary-dark-color, $light-color);
}

.section-regular {
  @include section-color($primary-color, $light-color);
}

.section-light {
  @include section-color($light-color, $dark-color);
}

.section-white {
  @include section-color(white, $dark-color);
}

.section-home {
  .title {
    @extend %section-title;
  }

  .subtitle {
    @extend %section-title;
  }

  .hero-body {
    padding: {
      left: 10%;
      right: 10%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .section-button {
    margin: {
      top: 2%;
      bottom: 2%;
    }
  }
}
</style>
