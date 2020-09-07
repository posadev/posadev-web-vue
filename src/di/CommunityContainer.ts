import { Component, Vue, Provide } from 'vue-property-decorator';
import CommunitiesService from '@/service/CommunitiesService';

@Component
export default class CommunityContainer extends Vue {
  @Provide('communities')
  service = new CommunitiesService();
}
