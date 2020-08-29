<template>
  <div class="home">
    <!--    TODO: Banner component-->
    <!-- TODO: AboutEvent component -->
    <!--  TODO: Image Component  -->
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

@Component({
  components: {
    SectionSpeakers,
    SectionWorkshops,
    SectionTickets,
    SectionContact
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.home {
  > img {
    width: 50%;
  }
}

%section-title {
  margin: {
    top: 5%;
    bottom: 5%;
  }
}

.section-dark {
  @include section-color($primary-dark-color, $inactive-color);
}

.section-regular {
  @include section-color($primary-color, $inactive-color);
}

.section-light {
  @include section-color($inactive-color, $dark-color);
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
