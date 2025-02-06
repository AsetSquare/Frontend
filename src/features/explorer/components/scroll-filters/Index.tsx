import { useEffect, useRef, useState } from "react";

interface CollectionFilter {
  label: string;
  value: {
    _id: string;
    name: string;
    collectionAddress: string;
    imageUrl: string;
    description: string;
    creatorId: string;
  };
}

interface ScrollingCarouselFiltersProps {
  collectionFilters?: CollectionFilter[];
  handleCollection: (value: {
    _id: string;
    name: string;
    collectionAddress: string;
    imageUrl: string;
    description: string;
    creatorId: string;
  }) => void;
}

const ScrollingCarouselFilters: React.FC<ScrollingCarouselFiltersProps> = ({
  collectionFilters = [],
  handleCollection,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.offsetWidth;

      if (scrollWidth > containerWidth) {
        container.style.setProperty("--scroll-width", `${scrollWidth / 2}px`);
        container.style.setProperty(
          "--animation-duration",
          `${scrollWidth / 95}s`
        );
      } else {
        container.style.setProperty("--scroll-width", "0px");
      }
    }
  }, [collectionFilters]);

  if (collectionFilters.length === 0) {
    return null;
  }

  const duplicatedFilters = [
    ...collectionFilters,
    ...collectionFilters,
    ...collectionFilters,
    ...collectionFilters,
  ];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      <div
        className={`inline-flex whitespace-nowrap ${isHovered ? "paused" : ""}`}
        style={{
          animation: "scroll var(--animation-duration) linear infinite",
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {duplicatedFilters.map((cur, index) => (
          <button
            key={`${cur.value}-${index}`}
            className="flex gap-1 py-2.5 md:py-4 uppercase px-4 md:px-5 text-body-5 !font-medium md:text-sub-6 flex-shrink-0"
            onClick={() => handleCollection(cur.value)}
          >
            <span className="text-green-dark-9">
              #{(index % collectionFilters.length) + 1}
            </span>
            <span className="text-[16px] md:text-[18px] text-green-dark-6">
              🔥
            </span>
            <span className="text-white-1">{cur.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCarouselFilters;
