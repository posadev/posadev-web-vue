import { Component, Provide, Vue } from 'vue-property-decorator';
import BannerLogoService from '@/service/BannerLogoService';

@Component
export default class BannerLogoContainer extends Vue {
  @Provide('sponsor_banner')
  service = new BannerLogoService();
}
