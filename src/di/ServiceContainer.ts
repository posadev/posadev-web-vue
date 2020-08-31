import { Component, Provide, Vue } from 'vue-property-decorator';
import SpeakersService from '@/services/SpeakersService';

@Component
export default class ServiceContainer extends Vue {
  @Provide('speakers')
  speakersService = new SpeakersService();
}
