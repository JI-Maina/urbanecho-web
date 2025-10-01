import { useColor } from "@/providers/theme-provider";
import {
  MapCtaContentWrapper,
  MapCtaMainContainer,
  MapCtaWrapper,
  MapCtaHeading,
  MapCtaButton,
} from "./map-cta.styled";

export default function MapCta() {
  const background = useColor("background.background-brand-surface");
  return (
    <MapCtaMainContainer bg={background}>
      <MapCtaContentWrapper  imgPath="/images/world map.png" >
        <MapCtaWrapper>
          <MapCtaHeading color={useColor("content.content-primary-inverse")}>
            Your City Evolves, Your Insights Should Too
          </MapCtaHeading>
          <MapCtaButton
            ctaBg={useColor("surface.surface-l0")}
            textColor={useColor("content.content-brand")}
            hoverBg={useColor("content.content-brand-hover")}
          >
            Book a Demo
          </MapCtaButton>
        </MapCtaWrapper>
      </MapCtaContentWrapper>
    </MapCtaMainContainer>
  );
}
