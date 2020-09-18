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
import { Component, Vue, Inject, Prop } from 'vue-property-decorator';
import AccentActionButton from '@/components/AccentActionButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';
import Talk from '@/data/Talk.model';
import { FirestoreService } from '@/service/FirestoreService';

@Component({
  components: { AccentActionButton }
})
export default class SpeakerSingleTalk extends Vue {
  @Prop({ required: true })
  private talk!: Talk;

  private get buttonInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('speaker.addCalendar'), true);
  }

  @Inject('talks')
  private service!: FirestoreService<Talk>;

  private talks: Talk[] = [];

  private created(): void {
    this.service.findAll(['include', '==', true]).then((talks: Talk[]) => {
      alert(this.talk);
      this.talks.push(...talks);
    });
  }
}
</script>

<style lang="scss">
.container-talk {
  display: block;
}
</style>
