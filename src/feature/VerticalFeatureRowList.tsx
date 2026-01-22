import className from 'classnames';
import Image from 'next/image';

type DelimiterType = 'dot' | 'number' | 'dash' | 'none';

type IVerticalFeatureRowListProps = {
  title: string;
  descriptions: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  delimiter?: DelimiterType;
  className?: string;
};

const VerticalFeatureRowList = (props: IVerticalFeatureRowListProps) => {
  const {
    title,
    descriptions,
    image,
    imageAlt,
    reverse = false,
    delimiter = 'dot',
    className: customClassName,
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
    <div
      className={className('w-screen', customClassName)}
      style={{ marginLeft: '50%', transform: 'translateX(-50%)' }}
    >
      <div
        className={className(
          'mx-auto max-w-screen-lg px-3',
          verticalFeatureClass,
        )}
      >
        <div className="w-full sm:w-1/2 sm:px-6">
          <h3 className="pt-10 text-center text-3xl font-semibold text-gray-900">
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
          <Image
            src={image}
            alt={imageAlt}
            width={600}
            height={400}
            className="mx-auto max-w-xs rounded-2xl sm:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRowList };
