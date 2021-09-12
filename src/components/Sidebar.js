import tw from 'twin.macro';
// import 'twin.macro';
import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import { ReactComponent as HelpCenterIcon } from '../assets/help-center.svg';
import { ReactComponent as DashboardIcon } from '../assets/dashboard.svg';
import { ReactComponent as DashboardIconHover } from '../assets/dashboard-hover.svg';
import { ReactComponent as ActivityIcon } from '../assets/activity.svg';
import { ReactComponent as ActivityIconHover } from '../assets/activity-hover.svg';
import { ReactComponent as WalletIcon } from '../assets/wallet.svg';
import { ReactComponent as WalletIconHover } from '../assets/wallet-hover.svg';
import { ReactComponent as ProductsIcon } from '../assets/products.svg';
import { ReactComponent as ProductsIconHover } from '../assets/products-hover.svg';
import { ReactComponent as ReferralsIcon } from '../assets/referrals.svg';
import { ReactComponent as ReferralsIconHover } from '../assets/referrals-hover.svg';

const SidebarItems = [
  {
    text: 'Dashboard',
    icon: (active) => (
      <DashboardIcon tw="group-hover:hidden" css={[active && tw`hidden`]} />
    ),
    hoverIcon: (active) => (
      <DashboardIconHover
        tw="group-hover:block"
        css={[active ? tw`block` : tw`hidden`]}
      />
    ),
    link: '/',
  },
  {
    text: 'Activity',
    icon: (active) => (
      <ActivityIcon tw="group-hover:hidden" css={[active && tw`hidden`]} />
    ),
    hoverIcon: (active) => (
      <ActivityIconHover
        tw="group-hover:block"
        css={[active ? tw`block` : tw`hidden`]}
      />
    ),
    link: '/',
  },
  {
    text: 'Wallet',
    icon: (active) => (
      <WalletIcon tw="group-hover:hidden" css={[active && tw`hidden`]} />
    ),
    hoverIcon: (active) => (
      <WalletIconHover
        tw="group-hover:block"
        css={[active ? tw`block` : tw`hidden`]}
      />
    ),
    link: '/',
    active: true, // this isn't how I'd do it in a production app though
  },
  {
    text: 'Products',
    icon: (active) => (
      <ProductsIcon tw="group-hover:hidden" css={[active && tw`hidden`]} />
    ),
    hoverIcon: (active) => (
      <ProductsIconHover
        tw="group-hover:block"
        css={[active ? tw`block` : tw`hidden`]}
      />
    ),
    link: '/',
  },
  {
    text: 'Referrals',
    icon: (active) => (
      <ReferralsIcon tw="group-hover:hidden" css={[active && tw`hidden`]} />
    ),
    hoverIcon: (active) => (
      <ReferralsIconHover
        tw="group-hover:block"
        css={[active ? tw`block` : tw`hidden`]}
      />
    ),
    link: '/',
  },
];

const MobileNavButton = ({ isOpen, setDrawer }) => (
  <button
    type="button"
    tw="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-green text-white block lg:hidden"
    onClick={setDrawer}
  >
    <span tw="sr-only">Open site navigation</span>
    <svg
      width="24"
      height="24"
      fill="none"
      tw="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform"
      css={[!isOpen && tw`opacity-100`, isOpen && tw`opacity-0`]}
    >
      <path
        d="M4 8h16M4 16h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
    <svg
      width="24"
      height="24"
      fill="none"
      tw="absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform scale-75"
      css={[isOpen && tw`opacity-100`, !isOpen && tw`opacity-0`]}
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  </button>
);

const Sidebar = () => {
  const [drawerisOpen, setDrawerIsOpen] = useState(false);
  return (
    <>
      <div
        id="sidebar"
        css={[
          tw`bg-black bg-opacity-25 w-full fixed z-40 inset-0 flex h-full  lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:w-56 lg:block`,
          !drawerisOpen && tw`hidden`,
        ]}
      >
        <div
          id="navWrapper"
          tw="w-48 lg:w-full h-full overflow-y-auto lg:block lg:sticky lg:bg-transparent overflow-hidden  bg-white lg:mr-0"
        >
          <nav
            id="nav"
            tw="flex flex-col overflow-y-auto h-screen border-r border-r-gray-lighter"
          >
            <div>
              <a href="/" tw="w-16 lg:w-28">
                <span tw="sr-only">Patricia Test</span>
                <img src={logo} alt="Patricia Logo" tw="mx-auto mt-6 " />
              </a>
            </div>

            {/* In a real world app the Link component would wrap the icons and link text to increase the clickable area */}
            <ul id="navLinks" tw="mt-24 text-left">
              {SidebarItems.map((item) => (
                <li
                  className="group"
                  tw="flex items-center justify-start pl-10 lg:pl-14 mr-6 mb-2 py-3 hover:bg-green-lighter hover:rounded-r-lg cursor-pointer"
                  css={[item.active && tw`bg-yellow-light rounded-r-lg`]}
                >
                  {/* One icon for the normal state and the other for the hover/active-page state */}
                  {item.icon(item.active)}
                  {item.hoverIcon(item.active)}
                  <a
                    tw="ml-5 text-gray-inactive leading-6 font-medium group-hover:text-green"
                    css={['font-size: 14px;', item.active && tw`text-green`]}
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="group"
              tw="flex pl-10 lg:pl-14 mt-auto mb-4 cursor-pointer"
              css={{ fontSize: '14px' }}
            >
              <HelpCenterIcon />
              <span tw="inline-block ml-4 text-gray-inactive group-hover:text-green">
                Help Center
              </span>
            </a>
          </nav>
        </div>
      </div>
      <MobileNavButton
        tw="lg:hidden"
        isOpen={drawerisOpen}
        setDrawer={() => setDrawerIsOpen(!drawerisOpen)}
      />
    </>
  );
};
export default Sidebar;
