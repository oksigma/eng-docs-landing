import Image from 'next/image';

import { VerticalFeatureRowList } from '../feature/VerticalFeatureRowList';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    <h2
      className="framer-text framer-styles-preset-1nqpcik mb-10 text-center text-2xl font-bold text-black sm:text-4xl"
      data-styles-preset="vlUd825be"
      style={{
        color: 'rgb(9, 9, 11)',
      }}
    >
      Manage all your documents in one place.
    </h2>
    <div className="flex justify-center">
      <Image
        src="/assets/images/DocumentCube.png"
        alt="Hero"
        width={400}
        height={400}
        className="size-48 rounded-2xl sm:size-56 md:size-72 lg:size-96"
        style={{
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #e0e0e0',
        }}
      />
    </div>
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
