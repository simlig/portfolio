import { useEffect, useState, ReactNode } from "react";

interface SlowListProps {
  contentArray: ReactNode[];
  interval?: number;
}

const SlowRevealList: React.FC<SlowListProps> = ({ contentArray, interval = 400 }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [fadeInItems, setFadeInItems] = useState<boolean[]>([]);

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

  useEffect(() => {
    if (visibleCount > 0) {
      setTimeout(() => {
        setFadeInItems((prev) => {
          const next = [...prev];
          next[visibleCount - 1] = true;
          return next;
        });
      }, 10);
    }
  }, [visibleCount]);

  return (
    <>
      {contentArray.slice(0, visibleCount).map((contribution, index) => (
        <div
          key={index}
          className={`text-1xl font-bold text-center transition-opacity duration-700 ${
            fadeInItems[index] ? "opacity-100" : "opacity-0"
          }`}
        >
          {contribution}
        </div>
      ))}
    </>
  );
};

export default SlowRevealList;
