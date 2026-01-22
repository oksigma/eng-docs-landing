import className from 'classnames';
import { useRouter } from 'next/router';

type DelimiterType = 'dot' | 'number' | 'dash' | 'none';

type IVerticalFeatureRowListProps = {
  title: string;
  descriptions: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  delimiter?: DelimiterType;
};

const VerticalFeatureRowList = (props: IVerticalFeatureRowListProps) => {
  const {
    title,
    descriptions,
    image,
    imageAlt,
    reverse = false,
    delimiter = 'dot',
  } = props;

  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': reverse,
    },
  );

  const router = useRouter();

  const renderDelimiter = (index: number) => {
    switch (delimiter) {
      case 'dot':
        return <span className="mr-3 text-primary-500">•</span>;
      case 'number':
        return (
          <span className="mr-3 font-semibold text-primary-500">
            {index + 1}.
          </span>
        );
      case 'dash':
        return <span className="mr-3 text-primary-500">—</span>;
      case 'none':
        return null;
      default:
        return <span className="mr-3 text-primary-500">•</span>;
    }
  };

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 sm:px-6">
        <h3 className="text-center text-3xl font-semibold text-gray-900">
          {title}
        </h3>
        <div className="mt-6 text-left text-xl leading-9">
          {descriptions.map((description, index) => (
            <div key={index} className="mb-4 flex items-start">
              {renderDelimiter(index)}
              <span className="flex-1">{description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        <img src={`${router.basePath}${image}`} alt={imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRowList };
