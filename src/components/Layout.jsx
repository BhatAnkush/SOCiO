import React from 'react';
import Navber from './Navber';

export default function Layout({ children }) {
  return (
    <>
      <Navber />
      {children}
    </>
  );
}
