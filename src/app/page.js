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
