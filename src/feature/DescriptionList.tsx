import { useEffect, useState } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      // Check for touch capability
      const hasTouchScreen =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0;

      // Check user agent for mobile devices
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileUserAgent =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase(),
        );

      setIsMobile(hasTouchScreen && isMobileUserAgent);
    };

    checkDeviceType();
  }, []);

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
          {items.map((item, index) => {
            const trimmedItem = item.trim();
            const itemWithPeriod =
              trimmedItem.endsWith('.') ||
              trimmedItem.endsWith('!') ||
              trimmedItem.endsWith('?')
                ? trimmedItem
                : `${trimmedItem}.`;

            return (
              <p
                key={index}
                className={`mx-6 mb-6 rounded-lg px-10 py-2 text-left text-gray-800 ${
                  isMobile ? 'bg-gray-200' : 'bg-gray-400'
                } ${customClassName || ''}`}
              >
                {itemWithPeriod}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { DescriptionList };
