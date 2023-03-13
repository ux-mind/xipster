import React from 'react';
const { createElement, render } = wp.element;
import { Text, Button } from '@chakra-ui/core';

import { Page } from '../../components';
import {
  Intro,
  Products,
  Features,
  Optimize,
  MoreReasons,
  CustomersFeedback,
  ReadyToGrow
} from './components';

const Homepage = () => (
  <Page
    align='center'
    justify='center'
  >
    <Intro />
    <Products />
    <Features />
    <Optimize />
    <MoreReasons />
    <CustomersFeedback />
    <ReadyToGrow />
    
  </Page>
);

export default Homepage;
