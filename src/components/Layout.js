import tw from 'twin.macro';
import React from 'react';
import { Sidebar } from '../components';

import { ReactComponent as CircledChevronIcon } from '../assets/circled-chevron.svg';
import { ReactComponent as NairaBadgeDark } from '../assets/naira-badge-dark.svg';
import walletPattern from '../assets/wallet-pattern.svg';

const LayeredCard = ({ children, adStyle }) => (
  // wheew, one of those moments where using tailwind is actually stressful

  // the adStyle prop here represents additional styling for the main layer that holds content

  <div tw="rounded-3xl pb-4 relative">
    <div
      tw="z-10 lg:rounded-3xl rounded-2xl  bottom-0 left-6 right-6 absolute top-0"
      css={`
        background-color: #e5e9f2;
      `}
    ></div>
    <div tw="z-20 lg:rounded-3xl rounded-2xl bottom-2 left-2 right-2 absolute top-0 bg-gray-light"></div>
    <div tw="z-30 relative h-full lg:rounded-3xl rounded-2xl" css={adStyle}>
      {children}
    </div>
  </div>
);

const Layout = ({ children }) => (
  <div
    tw="lg:flex max-w-8xl mx-auto"
    // gotta cater for the monstrous screens
    css={`
      @media (min-width: 1440px) {
        border-left: 1px solid #eff2f7;
        border-right: 1px solid #eff2f7;
      }
    `}
  >
    <Sidebar />
    <div tw="block lg:flex flex-grow px-4">
      {/* I use id's here to indicate sections because I don't have time to make components out of these. */}
      <div id="wallet" tw="pt-4 lg:pt-10">
        <div id="wallet-head">
          {/* I'm not sure why the medium font size isn't working, tried to fix it to no avail.  */}
          <h2 tw="text-gray-darker font-medium text-2xl lg:text-3xl">Wallet</h2>
          <div id="wallet-current" tw="flex mt-3 lg:mt-4">
            <NairaBadgeDark tw="mr-4" />
            <div>
              <h3 tw="flex items-center font-medium text-xl text-gray-darker leading-6 cursor-pointer">
                Naira Wallet <CircledChevronIcon tw="ml-2" />
              </h3>
              <p
                tw="font-bold text-gray-medium"
                css={`
                  font-size: 14px;
                `}
              >
                Lorem Ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
        <div id="wallet-metric" tw="mt-5 lg:mt-6">
          <LayeredCard adStyle={[`background: #006156; display: flex;`]}>
            <div
              id="wallet-figures"
              tw="py-4 lg:py-6 pl-10"
              css={`
                background-image: url(${walletPattern});
                background-repeat: no-repeat;
                border-right: 1px solid #388379;
              `}
            >
              <p>Total Balance</p>
              <p>₦89,153,001.73</p>
              <p>Book Balance: ₦450,000.093</p>
            </div>
          </LayeredCard>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
