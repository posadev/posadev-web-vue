<template>
  <div class="home">
    <img
      id="commingSoonImage"
      alt="coming soon"
      src="../assets/proximamente.png"
    />
    <div class="external-buttons">
      <ActionButton
        id="btn-cfs"
        :info="sponsorInfo"
        v-on:button-action="onSponsorClick"
      />
      <ActionButton
        id="btn-cfp"
        :info="speakerInfo"
        v-on:button-action="onSpeakerClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ButtonInfo from '@/data/ButtonInfo.model';
import ActionButton from '@/components/ActionButton.vue';

@Component({
  components: { ActionButton }
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
