//import React from 'react';
const { createElement, render } = wp.element;
import { HomeMain } from '../components/HomeMain';

export const Home = () => {
  return (
    <main className="home">
      <HomeMain />
    </main>
  )
}
