import {
  CompanyOurStoryContent,
  CompanyOurStoryCopy,
  CompanyOurStorySectionWrapper,
} from "./company-our-story-section.styled";

export default function CompanyOurStorySection() {
  return (
    <CompanyOurStorySectionWrapper>
      <CompanyOurStoryContent bgImg="/images/josip-ivankovic-yZW-3LPsss8-unsplash.jpg">
        <CompanyOurStoryCopy
         
        >
          <h2>Our Story</h2>
          <p>
            UrbanEcho is a spin-off from ETH Zurich, one of the world's leading universities for
            technology and engineering. Our multidisciplinary team of computational scientists,
            urban planners, and software engineers is supported by strategic advisors from ETH
            Zurich, MIT, and Google. Our vision is to provide planners everywhere with the tools to
            build cities that are more resilient, inclusive, and intentionally designed for the
            people who live in them.
          </p>
        </CompanyOurStoryCopy>
      </CompanyOurStoryContent>
    </CompanyOurStorySectionWrapper>
  );
}
