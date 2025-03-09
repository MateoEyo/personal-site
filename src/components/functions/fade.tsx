import React from 'react';

export function FadeInSection(props: { children?: React.ReactNode }) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const domEl = domRef.current;
    if (!domEl) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        setVisible(entry.isIntersecting);
        observer.disconnect();
      }
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
