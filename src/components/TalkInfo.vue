<template>
  <div class="container-talk">
    <p class="conference">{{ $t('speaker.conference') }}</p>
    <p class="talk-name">{{ this.talk.name }}</p>
    <p class="talk-date">{{ this.talk.schedule }}</p>
    <p class="talk-description">{{ this.talk.description }}</p>
    <AccentActionButton id="btn-community" :info="buttonInfo" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AccentActionButton from '@/components/AccentActionButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';
import Talk from '@/data/Talk.model';

@Component({
  components: { AccentActionButton }
})
export default class TalkInfo extends Vue {
  @Prop({ required: true })
  private talk!: Talk;

  private get buttonInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('speaker.addCalendar'), true);
  }
}
</script>

<style lang="scss">
.container-talk {
  display: block;
}
</style>
