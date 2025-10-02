import SecoComponent from "@/components/partners/seco-component";
import {
  CompanyLogosContent,
  MainCompanyLogosContainer,
} from "./company-logos-section.styled";
import { useColor } from "@/providers/theme-provider";
import EthZurichComponent from "@/components/partners/eth-zurich-component";
import { motion } from "framer-motion";

const LogoList = () => {
  const logos = [
    SecoComponent,
    EthZurichComponent,
    SecoComponent,
    EthZurichComponent,
  ];

  // Duplicate the logos array to create seamless infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="carousel-container">
      <motion.div
        className="logos-container"
        animate={{
          x: [ "0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((Logo, index) => (
          <div key={index} className="logo-item">
            <Logo />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function CompanyLogosSection({showTitle = true}: {showTitle?: boolean}) {
  return (
    <MainCompanyLogosContainer
      bgColor={useColor("surface.surface-l0")}
    >
      <CompanyLogosContent headerColor={useColor("content.content-primary")}>
        {showTitle && <h2>Our Partners</h2>}
        <LogoList />
      </CompanyLogosContent>
    </MainCompanyLogosContainer>
  );
}
