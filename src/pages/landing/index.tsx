import { useColor } from "@/providers/theme-provider";
import styled from "styled-components";
import { lazy, Suspense } from "react";
import Loading from "@/components/ui/loading";

// Lazy load landing page components
const HomeHeroSection = lazy(() => import("./components/home-hero-section"));
const HomePartnersLogo = lazy(() => import("./components/home-partners-logo"));
const HomeBenefitsSection = lazy(() => import("./components/home-benefits-section"));
const HomeHowWeWorkSection = lazy(() => import("./components/home-how-we-work-section"));
const MapCta = lazy(() => import("@/components/map-cta"));

const Container = styled.div<{ bgColor: string; textColor: string }>`
  min-height: 100vh;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  /* padding: 2rem; */
  /* transition: all 0.3s ease; */
`;

export default function LandingPage() {
  // Get various colors for demonstration
  const backgroundColor = useColor("background.background-primary");
  const textColor = useColor("content.content-primary");
  
  return (
    <Container bgColor={backgroundColor} textColor={textColor}>
      <Suspense fallback={<Loading message="Loading hero section..." size="medium" />}>
        <HomeHeroSection />
      </Suspense>
      <Suspense fallback={<Loading message="Loading partners..." size="small" />}>
        <HomePartnersLogo />
      </Suspense>
      <Suspense fallback={<Loading message="Loading benefits..." size="medium" />}>
        <HomeBenefitsSection />
      </Suspense>
      <Suspense fallback={<Loading message="Loading how we work..." size="medium" />}>
        <HomeHowWeWorkSection/>
      </Suspense>
      <Suspense fallback={<Loading message="Loading map..." size="small" />}>
        <MapCta/>
      </Suspense>
    </Container>
  );
}
