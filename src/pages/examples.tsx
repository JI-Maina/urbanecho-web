import { ButtonExamples } from "@/components/ui/button/examples";
import { useColor, useTheme } from "@/providers/theme-provider";
import styled from "styled-components";
import ThemeButton from "./landing/theme-button";
import FormUsageExample from "@/components/ui/form/form-usage-example";
const Container = styled.div<{ bgColor: string; textColor: string }>`
  min-height: 100vh;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  /* padding: 2rem; */
  transition: all 0.3s ease;
`;
const Header = styled.header<{ textColor: string; brandColor: string }>`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${(props) => props.brandColor};
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.textColor};
    opacity: 0.8;
  }
`;

const ColorShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ColorCard = styled.div<{
  bgColor: string;
  textColor: string;
  borderColor: string;
}>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.3rem;
  }

  p {
    margin: 0.5rem 0;
    opacity: 0.9;
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
`;

const ActionButton = styled.button<{
  bgColor: string;
  textColor: string;
  hoverColor: string;
}>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor};
    transform: translateY(-2px);
  }
`;
export default function Examples() {
     const { theme, toggleTheme } = useTheme();
      
      // Get various colors for demonstration
      const backgroundColor = useColor("background.background-primary");
      const textColor = useColor("content.content-primary");
      const brandColor = useColor("content.content-brand");
      const secondaryText = useColor("content.content-secondary");
      
      const cardBg = useColor("surface.surface-l1");
      const borderColor = useColor("border.border-subtle");
      
      const brandBg = useColor("background.background-brand");
      const brandText = useColor("content.content-primary-inverse");
      const brandHover = useColor("background.background-brand-hover");
      
      const positiveBg = useColor("background.background-positive");
      const positiveHover = useColor("background.background-positive");
      
      const noticeBg = useColor("background.background-notice");
      const negativeBg = useColor("background.background-negative");
      const negativeHover = useColor("background.background-negative-hover");
  return (
    <Container bgColor={backgroundColor} textColor={textColor}>
      {" "}
      <Header textColor={textColor} brandColor={brandColor}>
        <FormUsageExample />
        <ButtonExamples />
        <h1>Urban Echo</h1>
        <p>Experience seamless theme switching with type-safe colors</p>
      </Header>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <ThemeButton onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </ThemeButton>
      </div>
      <ColorShowcase>
        <ColorCard
          bgColor={cardBg}
          textColor={textColor}
          borderColor={borderColor}
        >
          <h3>Content Colors</h3>
          <p>
            <strong>Primary:</strong> {textColor}
          </p>
          <p>
            <strong>Secondary:</strong> {secondaryText}
          </p>
          <p>
            <strong>Brand:</strong> {brandColor}
          </p>
          <p>This card demonstrates content color variations across themes.</p>
        </ColorCard>

        <ColorCard
          bgColor={useColor("background.background-selected")}
          textColor={textColor}
          borderColor={useColor("border.border-brand")}
        >
          <h3>Interactive States</h3>
          <p>Selected background with brand border</p>
          <p>Hover over this card to see elevation effects</p>
          <p>Colors automatically adapt to your theme preference</p>
        </ColorCard>

        <ColorCard
          bgColor={useColor("background.background-info-subtle")}
          textColor={useColor("content.content-primary")}
          borderColor={useColor("border.border-info")}
        >
          <h3>Semantic Colors</h3>
          <p>Info background with matching border</p>
          <p>Perfect for notifications and alerts</p>
          <p>Maintains accessibility across themes</p>
        </ColorCard>
      </ColorShowcase>
      <ButtonGrid>
        <ActionButton
          bgColor={brandBg}
          textColor={brandText}
          hoverColor={brandHover}
        >
          Brand Action
        </ActionButton>

        <ActionButton
          bgColor={positiveBg}
          textColor={brandText}
          hoverColor={positiveHover}
        >
          Success Action
        </ActionButton>

        <ActionButton
          bgColor={noticeBg}
          textColor={brandText}
          hoverColor={noticeBg}
        >
          Warning Action
        </ActionButton>

        <ActionButton
          bgColor={negativeBg}
          textColor={brandText}
          hoverColor={negativeHover}
        >
          Danger Action
        </ActionButton>
      </ButtonGrid>
      <div style={{ textAlign: "center", color: secondaryText }}>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <p>All colors automatically adapt based on your theme preference</p>
        <p>Experience full type safety with autocomplete for color paths</p>
      </div>
      
    </Container>
  );
}
