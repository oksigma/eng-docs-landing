import { VerticalFeatureRowList } from '../feature/VerticalFeatureRowList';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section yPadding="pt-2 pb-16">
    <VerticalFeatureRowList
      className="bg-gray-400 text-black"
      title="Document Relationships"
      descriptions={[
        'Determine the relationships between documents and drawings.',
        'Within a document or drawing, find the other documents that its related to or depends on.',
        'Do you need to find that similar drawings from a different project?  Eng Docs makes that easy.',
      ]}
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />

    <VerticalFeatureRowList
      className="text-black"
      title="Field Support"
      descriptions={[
        'Quickly and easily respond to field requests for information',
        'Give responses in real time',
        'No more waiting for a response from a document management system',
        'No more searching through multiple documents to find the information you need',
      ]}
      image="/assets/images/site.jpeg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRowList
      className="bg-gray-400 text-black"
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
      className="text-black"
      title="Search by Standard or Specification"
      descriptions={[
        'AS 4100 steel structures',
        'API 610 pumps.',
        'ASME B31.3 flange systemm',
        'ISO 14001 environmental management systems',
        'ISO 9001 quality management systems',
        'ISO 18001 occupational health and safety management systems',
      ]}
      image="/assets/images/pipework.jpg"
      imageAlt="Second feature alt text"
    />
    <VerticalFeatureRowList
      className="bg-gray-400 text-black"
      title="Track Distribution of Documents"
      descriptions={[
        'Keep of track of who has accessed each document',
        'Who has downloaded the document',
        'Control access of each document to specific users and groups',
        'Automate disctribtion of documents when they are updated or changed',
        'Give access to people outside your organisation, eg vendors, contractors, clients as others',
      ]}
      image="/assets/images/document-distribution.png"
      imageAlt="Second feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
