import { HomePartnersLogoMainContainer } from "./home-partners-logo.styled";
import SecoComponent from "@/components/partners/seco-component";
import EthZurichComponent from "@/components/partners/eth-zurich-component";

export default function HomePartnersLogo() {
  const components = [SecoComponent, EthZurichComponent];
  return (
    <HomePartnersLogoMainContainer >
      {Array.from([...components, ...components]).map((Component, index) => (
        <Component key={index} />
      ))}
    </HomePartnersLogoMainContainer>
  );
}
