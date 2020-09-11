import BannerLogo from '@/data/BannerLogo.model';

const url = new URL('https://asasdjas.com')
const banners = [
  new BannerLogo('google', url, '/foo/manchu'),
  new BannerLogo('google2', url, '/foo/manchu'),
  new BannerLogo('google3', url, '/foo/manchu'),
  new BannerLogo('google4', url, '/foo/manchu'),
  new BannerLogo('google5', url, '/foo/manchu'),
  new BannerLogo('google6', url, '/foo/manchu'),
  new BannerLogo('google7', url, '/foo/manchu')
]

export default banners;
