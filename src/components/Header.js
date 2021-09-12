import 'twin.macro';
import React from 'react';

import { Profile } from '../components';
import logo from '../assets/logo.svg';

const Header = () => (
  <div tw="lg:hidden flex justify-between items-center h-12 px-4 py-3 sm:px-6 border-b border-gray-lighter">
    <a href="/" tw="w-24">
      <span tw="sr-only">Patricia Test</span>
      <img src={logo} alt="Patricia Logo" />
    </a>
    <Profile />
  </div>
);

export default Header;
