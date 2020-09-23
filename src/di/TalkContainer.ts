import { Component, Provide, Vue } from 'vue-property-decorator';
import TalkService from '@/service/TalkService';

@Component
export default class TalkContainer extends Vue {
  @Provide('talks')
  talkService = new TalkService();
}
