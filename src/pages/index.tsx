import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import Translate, { translate } from '@docusaurus/Translate'; 
import styles from './index.module.css';
import HomepageProducts from '@site/src/components/HomepageProducts';

const LeftTop = [
  'img/app-vbdlis-web.svg',
  'img/app-map-builder.svg',
  'img/app-dashboard.svg',
  'img/app-vbdlis.svg',
  'img/app-vbdlis-web.svg',
  'img/app-map-builder.svg',
  'img/app-dashboard.svg',
  'img/app-vbdlis.svg'
]
const LeftMiddle = [
  'img/app-vbd-web.svg',
  'img/app-routing.svg',
  'img/app-marker.svg',
  'img/app-map-api.svg',
  'img/app-vbd-web.svg',
  'img/app-routing.svg',
  'img/app-marker.svg',
  'img/app-map-api.svg'
]
const LeftBottom = [
  'img/app-indoor-navigation.svg',
  'img/app-guidelines.svg',
  'img/app-vbd-miss.svg',
  'img/app-layer.svg',
  'img/app-indoor-navigation.svg',
  'img/app-guidelines.svg',
  'img/app-vbd-miss.svg',
  'img/app-layer.svg'
]
const RightTop = [
  'img/app-vbd-desktop.svg',
  'img/app-code.svg',
  'img/app-setting.svg',
  'img/app-marker.svg',
  'img/app-vbd-desktop.svg',
  'img/app-code.svg',
  'img/app-setting.svg',
  'img/app-marker.svg'
]
const RightMiddle = [
  'img/app-vbd-web.svg',
  'img/app-layer.svg',
  'img/app_turn-by-turn.svg',
  'img/app-search.svg',
  'img/app-vbd-web.svg',
  'img/app-layer.svg',
  'img/app_turn-by-turn.svg',
  'img/app-search.svg'
]
const RightBottom = [
'img/app-hgis.svg',
'img/app-video-file.svg',
'img/app-cloud.svg',
'img/app-blockchain.svg',
'img/app-hgis.svg',
'img/app-video-file.svg',
'img/app-cloud.svg',
'img/app-blockchain.svg'
]

type CardLogoProps = {
  src: string;
}
const CardLogo = ({ src }: CardLogoProps) => {
  return(
    <div className='hero-logo'>
      <img className='svg' src={src}></img>
    </div>
  )
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary heroBanner_src-pages-index-module', styles.heroBanner)}>
        <div className="container">
          <div className='hero-card'>
            <div className='hero-wrap'>

              <div className='hero-marquee-left'> 
                <div className='logos-fader'></div>
                <div className='hero-marquee-line top'>
                  {LeftTop?.length > 0 && LeftTop.map((itemSrc, idx) => <CardLogo key={idx} src={itemSrc} />)}
                </div>
                <div className='hero-marquee-line'>
                  {LeftMiddle?.length > 0 && LeftMiddle.map((itemSrc, idx) => <CardLogo key={idx} src={itemSrc} />)}
                </div>
                <div className='hero-marquee-line bottom'>
                  {LeftBottom?.length > 0 && LeftBottom.map((itemSrc, idx) => <CardLogo key={idx} src={itemSrc} />)}
                </div>
              </div>

              <div className='hero-center'>
                <Heading
                    as="h1"
                    className="hero__title"
                >
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">
                    {/* {siteConfig.tagline} */}
                <Translate id="homepage.tagline">
                    Discover our innovative mapping and navigation solutions.
                </Translate>
                    </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/Introduce"
                    >
                    Xem toàn bộ tài liệu
                    </Link>
                </div>
              </div>
              <div className='hero-marquee-right'>
                <div className='logos-fader'></div>
                <div className='hero-marquee-line top'>
                  {RightTop?.length > 0 && RightTop.map((itemSrc, idx) => <CardLogo key={idx} src={itemSrc} />)}
                </div>
                <div className='hero-marquee-line'>
                  {RightMiddle?.length > 0 && RightMiddle.map((itemSrc, idx) => <CardLogo key={idx} src={itemSrc} />)}
                </div>
                <div className='hero-marquee-line bottom'>
                  {RightBottom?.length > 0 && RightBottom.map((itemSrc, idx) => <CardLogo key={idx} src={itemSrc} />)} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageProducts />
            </main>
        </Layout>
    );
}