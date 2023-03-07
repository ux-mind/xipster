import React from 'react';
//import ReactDOM from 'react-dom';
import './helpers/events';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Home,
  Page
} from './pages';

const PAGES = {
  Home,
  Page,
};

const renderPageElement = (el) => {
  const Page = PAGES[el.id];

  if (!Page) {
    return;
  }

  const props = Object.assign({}, el.dataset);

  const App = () => (
    <ChakraProvider>
      <div className="app-wrapper">
        <Header />
        <Page {...props} />
        <Footer />
      </div>
    </ChakraProvider>
  );

  ReactDOM.render(<App {...props} />, el);
};

export default renderPageElement;
