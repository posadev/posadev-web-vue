<template>
  <div class="container-talk">
    <p class="conference">{{ $t('speaker.conference') }}</p>
    <p class="talk-name">{{ this.talk.name }}</p>
    <p class="talk-date">{{ this.talk.schedule }}</p>
    <p class="talk-description"><span v-html="this.talk.description"></span></p>
<!--    <AccentActionButton id="btn-community" :info="buttonInfo" />-->
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
@import '../styles/variables';
@import '../styles/mixins';

.container-talk {
  display: block;
  margin-top: 25px;
  margin-bottom: 100px;
  text-align: left;
  width: 100%;
}

.conference {
  color: $dark-color;
  font-size: 24px;
}

.talk-name {
  color: $primary-dark-color;
  font-size: 24px;
  line-height: 45px;
}

.talk-date {
  color: $dark-color;
  line-height: 36px;
}

.talk-description {
  color: $dark-color;
  margin: {
    top: 24px;
    bottom: 5%;
  }
}

.social-speaker {
  padding-bottom: 11%;
}
</style>
