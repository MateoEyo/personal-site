import { render } from '@testing-library/react';

import App from './app';

vitest.mock('../components/functions/screen-size.tsx', () => ({
  useIsMobile: () => false,
}));

window.IntersectionObserver = function () {
  return {
    observe: () => {
      // Do nothing
    },
    disconnect: () => {
      // Do nothing
    },
    unobserve: () => {
      // Do nothing
    },
  };
} as unknown as typeof IntersectionObserver;

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
