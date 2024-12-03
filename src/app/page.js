import HeroBanner from '../component/HeroBanner';
import AnalyticsSection from '../component/AnalyticsSection';
import ServiceSection from '../component/ServiceSection';
import Newsletter from '../component/Newsletter';
import ReviewSection from '@/component/ReviewSection';

export default function Home() {
  return (
    <>
        <HeroBanner />
        <AnalyticsSection />
        <ServiceSection />
        {/* <ReviewSection/> */}
        <Newsletter />
    </>
  );
}


export function generateMetadata() {
  return {
    title: "EAS Corporation – Intelligente Lösungen für Unternehmen und Industrien",
    description: "EAS Corporation bietet innovative Lösungen im Bereich Technologie und Industrie. Von Beratung bis zur Umsetzung – Ihr Partner für maßgeschneiderte, zukunftssichere Lösungen.",
    openGraph: {
      title: "EAS Corporation – Intelligente Lösungen für Unternehmen und Industrien",
      description: "EAS Corporation bietet innovative Lösungen im Bereich Technologie und Industrie. Von Beratung bis zur Umsetzung – Ihr Partner für maßgeschneiderte, zukunftssichere Lösungen.",
      images: [
        {
          url: "../public/img/logo.png", 
          alt: "EAS Corporation Logo",
          description: "Logo der EAS Corporation, einem führenden Anbieter von technologischen Lösungen für Unternehmen."
        }
      ],
    },
  };
}