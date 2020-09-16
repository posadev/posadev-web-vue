<template>
  <div class="container-talk">
    <p class="conference">{{ $t('speaker.conference') }}</p>
    <p class="talk-name">How to take advantage</p>
    <p class="talk-date">28 de Septiembre, 19:00-20:00</p>
    <p class="talk-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <AccentActionButton id="btn-community" :info="buttonInfo" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AccentActionButton from '@/components/AccentActionButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';

@Component({
  components: { AccentActionButton }
})
export default class SpeakerSingleTalk extends Vue {
  @Prop({ required: true })
  private talk!: string;

  private get buttonInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('speaker.addCalendar'), true);
  }
}
</script>

<style lang="scss">
.container-talk {
  display: none;
}
</style>
