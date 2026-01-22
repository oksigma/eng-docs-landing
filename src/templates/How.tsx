import Image from 'next/image';

import { DescriptionList } from '../feature/DescriptionList';
import { Section } from '../layout/Section';

const How = () => (
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
    <div className="mt-20 justify-center">
      <h2 className="text- mb-10 text-2xl font-bold text-black">
        How it works
      </h2>
      <DescriptionList
        items={[
          "Engineering offices can have 100's of projects and 1000's of documents",
          'Often these documents can be very similar with only tweaks or simple differences between them',
          'However knowing which document is the correct one for a particular project can be difficult and time consuming',
          'Especially for new people',
          'Each employee ends up establishing their own document management system',
          'Engineering documents within an engineering project have a lot of inherit complexity',
          'For example: a project may consiten of 100 document',
          'These documents consist of drawings, specification, standards',
          'Each one of these documents has different versions',
          'The version history and interdepencies of these document are not always in sync',
          'This makes finding relevant specific information difficult and time consuming and error prone',
        ]}
      />
    </div>

    <h2 className="mb-10 mt-20 text-center text-2xl font-bold text-black">
      AI Powered
    </h2>
    <DescriptionList
      items={[
        'Eng Docs has its own AI engine that can help you find the relevant information quickly and easily',
        'Purpose built UI and UX with the engineer, site office or support team in mind',
      ]}
    />
  </Section>
);

export { How };
