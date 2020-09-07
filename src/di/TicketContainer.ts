import { Component, Provide, Vue } from 'vue-property-decorator';
import TicketService from '@/service/TicketService';

@Component
export default class TicketContainer extends Vue {
  @Provide('tickets')
  service = new TicketService();
}
