import Community from "@/data/Community.model";

const photoUrl = new URL('https://via.placeholder.com/306x236');
const communities = [
  new Community('title1', 'subtitle', 'contact', photoUrl, photoUrl, photoUrl, 'description', {}),
  new Community('title2', 'subtitle', 'contact', photoUrl, photoUrl, photoUrl, 'description', {}),
  new Community('title3', 'subtitle', 'contact', photoUrl, photoUrl, photoUrl, 'description', {}),
  new Community('title4', 'subtitle', 'contact', photoUrl, photoUrl, photoUrl, 'description', {}),
  new Community('title5', 'subtitle', 'contact', photoUrl, photoUrl, photoUrl, 'description', {}),
  new Community('title6', 'subtitle', 'contact', photoUrl, photoUrl, photoUrl, 'description', {})
];

export default communities;
