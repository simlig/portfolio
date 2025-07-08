import { useEffect, useState, ReactNode } from 'react';

interface SlowListProps {
  contentArray: ReactNode[];
  interval?: number;
}

const SlowRevealList: React.FC<SlowListProps> = ({ contentArray, interval = 400 }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!contentArray || contentArray.length === 0) return;

    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= contentArray.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [contentArray, interval]);

  return (
    <>
      {contentArray.slice(0, visibleCount).map((contribution, index) => (
          <div key={index} className={"text-1xl font-bold text-center"}>
            {contribution}
          </div>
      ))}
    </>
  );
};

export default SlowRevealList;
