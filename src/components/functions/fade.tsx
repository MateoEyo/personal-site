import React from 'react';

export function FadeInSection(props: { children?: React.ReactNode }) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const domEl = domRef.current;
    if (!domEl) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });

    observer.observe(domEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {props.children}
    </div>
  );
}
