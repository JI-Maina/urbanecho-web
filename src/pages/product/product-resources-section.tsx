import {
  ProductResourcesSectionMainContainer,
  ResourcesContainer,
} from "./product-resources-section.styled";
import { useColor } from "@/providers/theme-provider";
import Button, { LinkButton } from "@/components/ui/button";

export default function ProductResourcesSection() {
  return (
    <ProductResourcesSectionMainContainer
      backgroundColor={useColor("background.background-brand-subtle")}
    >
      <ResourcesContainer
        cardBorderColor={useColor("border.border-tertiary")}
        cardContentBg={useColor("surface.surface-l0")}
        badgeBg={useColor('background.background-selected')}
        badgeColor={useColor('content.content-brand')}
      >
        <h2>Explore Our Latest Research and Insights</h2>
        <div className="resources-content-wrapper">
          <div className="cards-container">
            {/* Card 1 */}
            <div className="resource-card">
              <img
                src="/images/opeyemi-adisa-cFT_Xq4XyA0-unsplash.jpg"
                alt=""
              />
              <div className="resource-resource-card-content">
                <div className="badge">White paper</div>
                <h3>
                  How Lagos Simulated a New BRT Line Before Breaking Ground
                </h3>
                <p>August 30, 2025</p>
                <LinkButton to="" variant="secondary">
                  Read The Case Study
                </LinkButton>
              </div>
            </div>
            {/* Card 2 */}
            <div className="resource-card">
              <img
                src="/images/conny-schneider-s8JOKMUiyo4-unsplash.jpg"
                alt=""
              />
              <div className="resource-resource-card-content">
                <div className="badge">White paper</div>
                <h3>
                  How Lagos Simulated a New BRT Line Before Breaking Ground
                </h3>
                <p>August 30, 2025</p>
                <LinkButton to="" variant="secondary">
                  Download The White Paper
                </LinkButton>
              </div>
            </div>
            {/* Card 3 */}
            <div className="resource-card">
              <img
                src="/images/patrick-tomasso-nApljhT9kfM-unsplash.jpg"
                alt=""
              />
              <div className="resource-resource-card-content">
                <div className="badge">White paper</div>
                <h3>
                  How Lagos Simulated a New BRT Line Before Breaking Ground
                </h3>
                <p>August 30, 2025</p>
                <LinkButton to="" variant="secondary">
                  Visit Our Wiki
                </LinkButton>
              </div>
            </div>
          </div>
          <div className="resources-cta-container">
            <div className="content-wrapper">
              <h2>
                Continue your journey into foresightful urban planning with our
                articles
              </h2>
              <Button variant="primary">View more articles</Button>
            </div>
          </div>
        </div>
      </ResourcesContainer>
    </ProductResourcesSectionMainContainer>
  );
}
