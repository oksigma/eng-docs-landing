import { VerticalFeatureRowList } from '../feature/VerticalFeatureRowList';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    <VerticalFeatureRowList
      className="bg-gray-400 text-black"
      title="Find Documents"
      descriptions={[
        'Quickly and easily find the drawings that you need.',
        'Do you need to find that similar drawings from a different project?  Eng Docs makes that easy.',
      ]}
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />

    <VerticalFeatureRowList
      className="text-black"
      title="Drawings"
      descriptions={[
        'Quickly and easily find the drawings that you need.',
        'Eng Docs helps you identify which projects have similar drawings',
        'Eng Docs knows specific data about each drawings, enabling you to link specfications and standards to a particular drawings.',
        'Eng Docs helps you link which specifications used a particular drawing and vice versa.',
      ]}
      image="/assets/images/steel-structure.png"
      imageAlt="First feature alt text"
    />

    <VerticalFeatureRowList
      className="bg-gray-400 text-black"
      title="Search by Standard or Specification"
      descriptions={[
        'Search by equipment type - API 610 pumps.',
        'ASME B31.3 flange systemm',
      ]}
      image="/assets/images/pipework.jpg"
      imageAlt="Second feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
