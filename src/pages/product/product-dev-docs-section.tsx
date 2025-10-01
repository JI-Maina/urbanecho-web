import { useColor } from "@/providers/theme-provider";
import {
  BaseDocsContainer,
  ProductDevDocsSectionContainer,
} from "./product-dev-docs-section.styled";
import { BroadcastIcon } from "@phosphor-icons/react";
import { LinkButton } from "@/components/ui/button";

export default function ProductDevDocsSection() {
  const brandCardColor = useColor("content.content-brand");
  const headerCardColor = useColor("content.content-primary");
  const textCardColor = useColor("content.content-tertiary");
  return (
    <BaseDocsContainer backgroundColor={useColor("surface.surface-l0")}>
      <ProductDevDocsSectionContainer
        borderColor={useColor("surface.surface-l0")}
        brandColor={brandCardColor}
        headerColor={headerCardColor}
        textColor={textCardColor}
      >
        <div className="left-section-container">
          <h2>Developer Documentation and Resources</h2>
        </div>
        <div className="right-section-container">
          <div className="docs-card">
            <BroadcastIcon className="docs-card-icon" />
            <div className="docs-card-text-section">
              <h2>Publish & Share Models</h2>
              <p>
                Become a publisher. Access guidelines and APIs to create,
                validate, and share reusable scenario models on our
                collaborative platform.
              </p>
            </div>
            <LinkButton to="" size="medium" variant="secondary">
              Start building
            </LinkButton>
          </div>
          <div className="docs-card">
            <BroadcastIcon className="docs-card-icon" />
            <div className="docs-card-text-section">
              <h2>API Reference</h2>
              <p>
                Explore our full RESTful API documentation with detailed
                endpoints, authentication methods, and interactive examples to
                build powerful integrations.
              </p>
            </div>
            <LinkButton to="" size="medium" variant="secondary">
              Start building
            </LinkButton>
          </div>
          <div className="docs-card">
            <BroadcastIcon className="docs-card-icon" />
            <div className="docs-card-text-section">
              <h2>Publish & Share Models</h2>
              <p>
                Become a publisher. Access guidelines and APIs to create,
                validate, and share reusable scenario models on our
                collaborative platform.
              </p>
            </div>
            <LinkButton to="" size="medium" variant="secondary">
              Start building
            </LinkButton>
          </div>
          <div className="docs-card">
            <BroadcastIcon className="docs-card-icon" />
            <div className="docs-card-text-section">
              <h2>API Reference</h2>
              <p>
                Explore our full RESTful API documentation with detailed
                endpoints, authentication methods, and interactive examples to
                build powerful integrations.
              </p>
            </div>
            <LinkButton to="" size="medium" variant="secondary">
              Start building
            </LinkButton>
          </div>
        </div>
      </ProductDevDocsSectionContainer>
    </BaseDocsContainer>
  );
}
