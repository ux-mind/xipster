//import React from 'react';
const { createElement, render } = wp.element
import PageContent from '../components/PageContent'

export const Page = () => {
  return (
    <main className="page">
      <PageContent />
    </main>
  )
}
