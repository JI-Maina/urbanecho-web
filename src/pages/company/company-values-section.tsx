import {
  CompanyValuesContent,
  MainCompanyValuesContainer,
} from "./company-values-section.styled";
import { useColor } from "@/providers/theme-provider";
import {
  LightbulbFilamentIcon,
  HeartIcon,
  type Icon,
  ShieldCheckIcon,
  UsersThreeIcon,
  ArrowClockwiseIcon,
} from "@phosphor-icons/react";

type ValueCardProps = {
  title: string;
  description: string;
  Icon: Icon;
};

const values: Record<"top" | "bottom", ValueCardProps[]> = {
  top: [
    {
      title: "Innovationn",
      description:
        "We create solutions that continuously challenge the status quo and are always within the state-of-art. This innovation is within urban data space where we transform complex data into intuitive solutions.",
      Icon: LightbulbFilamentIcon,
    },
    {
      title: "Human-Centric",
      description:
        "People are at the core of our solutions: We prioritise human-centric, livable outcomes. We are aiding to transform cities into sustainable living spaces.",
      Icon: HeartIcon,
    },
  ],
  bottom: [
    {
      title: "Integrity",
      description:
        "Maintain reliability and transparency - It is important to work with urban data which drives policy making that affects many lives.",
      Icon: ShieldCheckIcon,
    },
    {
      title: "Inclusivity",
      description:
        "Our solutions are accessible and impactful for urban spaces worldwide.",
      Icon: UsersThreeIcon,
    },
    {
      title: "Adaptability",
      description:
        "We swiftly respond and evolve alongside rapidly changing urban environments.",
      Icon: ArrowClockwiseIcon,
    },
  ],
};
function ValueCard({ title, description, Icon }: ValueCardProps) {
  return (
    <div className="value-card">
      <Icon
        color={useColor("content.content-brand")}
        className="value-icon"
      />
      <div className="value-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CompanyValuesSection() {
  return (
    <MainCompanyValuesContainer
      bgColor={useColor("background.background-brand-subtle")}
    >
      <CompanyValuesContent
        headerColor={useColor("content.content-primary")}
        paragraphColor={useColor("content.content-tertiary")}
        cardBgColor={useColor("surface.surface-l0")}
        cardBorderColor={useColor("border.border-tertiary")}
        iconColor={'red'}
      >
        <h2>Values for Building Smarter, More Human Cities</h2>
        <div className="values-cards-section">
          <div className="top-cards">
            {values.top.map(({ title, description, Icon }) => (
              <ValueCard
                key={title}
                title={title}
                description={description}
                Icon={Icon}
              />
            ))}
          </div>
          <div className="bottom-cards">
            {values.bottom.map(({ title, description, Icon }) => (
              <ValueCard
                key={title}
                title={title}
                description={description}
                Icon={Icon}
              />
            ))}
          </div>
        </div>
      </CompanyValuesContent>
    </MainCompanyValuesContainer>
  );
}
