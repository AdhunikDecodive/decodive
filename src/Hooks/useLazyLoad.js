import { useState, useEffect, useRef } from 'react';

const useLazyLoad = (src) => {
  const [source, setSource] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imgRef.current && IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setSource(src);
              if (observer && observer.unobserve) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(imgRef.current);
    }

    return () => {
      didCancel = true;
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, [src]);

  return [source, imgRef];
};

export default useLazyLoad;
