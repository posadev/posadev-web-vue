import { Component, Provide, Vue } from 'vue-property-decorator';
import SpeakersService from '@/service/SpeakersService';

@Component
export default class SpeakerContainer extends Vue {
  @Provide('speakers')
  speakersService = new SpeakersService();
}
