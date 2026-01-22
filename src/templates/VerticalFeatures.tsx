import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { VerticalFeatureRowList } from '../feature/VerticalFeatureRowList';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your title here"
    description="Engineering Docs enables you to run an Engineering Office with ease."
  >
    <VerticalFeatureRowList
      title="Find Documents"
      descriptions={[
        'Quickly and easily find the drawings that you need.',
        'Do you need to find that similar drawings from a different project?  Eng Docs makes that easy.',
      ]}
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />

    <VerticalFeatureRowList
      title="Drawings"
      descriptions={[
        'Quickly and easily find the drawings that you need.',
        'Do you need to find that similar drawings from a different project?  Eng Docs makes that easy.',
      ]}
      image="/assets/images/steel-structure.png"
      imageAlt="First feature alt text"
    />

    <VerticalFeatureRow
      title="Find Documents"
      description="Search by equipment type - API 610 pumps.ASME B31.3 flange systemm
"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
