/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('renders the app', () => {
  // mocks the scrollTo API used when navigating to a new page.
  window.scrollTo = jest.fn();

  let container;
  let root;

  beforeEach(async () => {
    window.history.replaceState({}, '', '/');
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      root = ReactDOM.createRoot(container);
      root.render(<App />);
    });
  });

  afterEach(() => {
    act(() => root.unmount());
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Zihan Lin');
  });

  it('can navigate to /about', async () => {
    expect.assertions(5);
    const aboutLink = document.querySelector('#header > nav > ul > li:nth-child(1) > a');
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      await aboutLink.click();
    });
    expect(document.title).toContain('About |');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenNthCalledWith(1, 0, 0);
    expect(document.getElementById('about')).toHaveTextContent('University College London');
  });

  it('can navigate to /resume', async () => {
    expect.assertions(3);
    const contactLink = document.querySelector('#header > nav > ul > li:nth-child(2) > a');
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      await contactLink.click();
    });
    expect(document.title).toContain('Resume |');
    expect(window.location.pathname).toBe('/resume');
  });

  it('can navigate to /projects', async () => {
    expect.assertions(4);
    const contactLink = document.querySelector('#header > nav > ul > li:nth-child(3) > a');
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      await contactLink.click();
    });
    expect(document.title).toContain('Projects |');
    expect(window.location.pathname).toBe('/projects');
    expect(document.getElementById('qq-agent')).toHaveTextContent('BM25');
  });
});
