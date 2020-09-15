import Sponsor from '@/data/Sponsor.model';

const sponsors: Sponsor[] = [
  new Sponsor('Soy Sier', 'gold', 'SierCorp', new URL('https://via.placeholder.com/196x84'), new URL('https://www.sierisimo.com/'),
    {
      twitter: new URL('https://twitter.com/sierisimo')
    }, new URL('https://lanotapositiva.com/wp-content/uploads/2020/07/personas.jpg')),
  new Sponsor(
    'Soy IBM',
    '',
    'IBM',
    new URL('https://via.placeholder.com/196x84'),
    new URL('https://www.ibm.com'),
    {
      twitter: new URL('https://twitter.com')
    }, 
    new URL('https://lanotapositiva.com/wp-content/uploads/2020/07/personas.jpg')
  )
];

export default sponsors;
