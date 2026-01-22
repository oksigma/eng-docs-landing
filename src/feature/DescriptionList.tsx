import { useState } from 'react';

type IDescriptionListProps = {
  items: string[];
  className?: string;
  buttonText?: string;
  defaultOpen?: boolean;
};

const DescriptionList = (props: IDescriptionListProps) => {
  const {
    items,
    className: customClassName,
    buttonText = 'Show details',
    defaultOpen = false,
  } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 px-8 text-left font-semibold text-gray-900 transition-colors hover:text-primary-500"
      >
        {isOpen ? '▼ ' : '▶ '}
        {buttonText}
      </button>
      {isOpen && (
        <div className="transition-all duration-300">
          {items.map((item, index) => (
            <p
              key={index}
              className={`mx-6 mb-6 rounded-lg bg-gray-200 px-10 py-2 text-left text-gray-800 ${customClassName || ''}`}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export { DescriptionList };
