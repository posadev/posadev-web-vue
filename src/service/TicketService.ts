import {
  DocumentMapper,
  FirebaseCollectionService
} from '@/service/FirebaseCollectionService';
import Ticket from '@/data/Ticket.model';
import firebase from 'firebase';
import DocumentData = firebase.firestore.DocumentData;

export default class TicketService extends FirebaseCollectionService<Ticket> {
  collectionName = 'tickets';

  mapper: DocumentMapper<Ticket> = (data: DocumentData) => {
    return new Ticket(
      data['name'],
      data['price'],
      data['start'].toDate(),
      data['end'].toDate(),
      new URL(data['url'])
    );
  };
}
