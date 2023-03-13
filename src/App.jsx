import React from 'react';
const { createElement, render } = wp.element;
import './helpers/events';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import {
  Homepage,
  TestPage
} from './pages';

const PAGES = {
  Homepage,
  TestPage,
};

const renderPageElement = (el) => {
  const Page = PAGES[el.id];

  if (!Page) {
    console.log('page not found');
    console.log(el.id);
    console.log(PAGES);
    return;
  }

  const props = Object.assign({}, el.dataset);

  const App = () => (
    <ThemeProvider>
        <CSSReset />
        <Page {...props} />
    </ThemeProvider>
  );

  ReactDOM.render(<App {...props} />, el);
};

export default renderPageElement;
