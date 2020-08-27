<template>
  <div>
    <div >
      <Banner />
    </div>
    <div class="home">
      <img
        id="commingSoonImage"
        alt="coming soon"
        src="../assets/proximamente.png"
      />
      <div class="external-buttons">
        <AccentActionButton
          id="btn-cfs"
          :info="sponsorInfo"
          v-on:button-action="onSponsorClick"
        />
        <AccentActionButton
          id="btn-cfp"
          :info="speakerInfo"
          v-on:button-action="onSpeakerClick"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ButtonInfo from '@/data/ButtonInfo.model';
import ActionButton from '@/components/ActionButton.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import Banner from '@/components/Banner.vue';

@Component({
  components: { AccentActionButton, ActionButton, Banner }
})
export default class Home extends Vue {
  private sponsorInfo = new ButtonInfo('Patrocina este evento');

  private speakerInfo = new ButtonInfo('Participa como speaker aquí');

  private onSponsorClick() {
    window.open(
      'https://docs.google.com/document/d/1zWYvQ3RUKzu1ohTfcbYYdzQZd-0_YhgStFIWUEGFrRY/edit?usp=sharing'
    );
  }

  private onSpeakerClick() {
    window.open('https://convoca.dev/jconf-mexico-2020/cfp');
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

.home {
  > img {
    width: 50%;
  }
}

.external-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
