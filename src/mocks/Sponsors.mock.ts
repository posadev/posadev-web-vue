import Sponsor from '@/data/Sponsor.model';

const sponsors: Sponsor[] = [
  new Sponsor('Empresa', 'gold', 'SierCorp', new URL('https://www.sierisimo.com/sier.jpg'), new URL('https://www.sierisimo.com/'),
    {
      twitter: new URL('https://twitter.com/sierisimo')
    }),
  new Sponsor(
    'desc',
    '',
    'IBM',
    new URL('https://via.placeholder.com/196x84'),
    new URL('https://www.ibm.com'),
    {
      twitter: new URL('https://twitter.com')
    }
  )
];

export default sponsors;
