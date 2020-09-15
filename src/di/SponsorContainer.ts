import { Component, Provide, Vue } from 'vue-property-decorator';
import SponsorService from '@/service/SponsorService';

@Component
export default class SponsorContainer extends Vue {
  @Provide('sponsors')
  service = new SponsorService();
}
