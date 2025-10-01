import { LinkButton } from "@/components/ui/button";
import {
  ProductProductSectionContainer,
  ProductProductSectionMainContainer,
} from "./product-product-section.styled";
import { useColor } from "@/providers/theme-provider";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function ProductProductSection() {
  return (
    <ProductProductSectionMainContainer
      backgroundColor={useColor("surface.surface-l0")}
    >
      <ProductProductSectionContainer>
        <h2>A living digital twin, delivered as a service</h2>
        <div className="product-cta-container">
          <LinkButton to="" variant="primary" size="large">
            Access Platform
          </LinkButton>
          <LinkButton to="/schedule-demo" variant="secondary" size="large">
            Schedule a Demo <ArrowRightIcon weight="bold" />
          </LinkButton>
        </div>
        <img src="/images/productpage_img.png" alt="" />
      </ProductProductSectionContainer>
    </ProductProductSectionMainContainer>
  );
}
