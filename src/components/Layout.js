import tw from 'twin.macro';
import React from 'react';
import { Sidebar } from '../components';

import '../styles/layout.css';

import { ReactComponent as CircledChevronIcon } from '../assets/circled-chevron.svg';
import { ReactComponent as NairaBadgeDark } from '../assets/naira-badge-dark.svg';
import walletPattern from '../assets/wallet-pattern.svg';
import graph from '../assets/money-graph.svg';

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
    <div
      tw="block lg:flex flex-grow "
      css={`
        @media (min-width: 1024px) and (max-width: 1280px) {
          justify-content: center;
          flex-wrap: wrap;
        }
      `}
    >
      {/* I use id's here to indicate sections because I don't have time to make components out of these. */}
      <div
        id="wallet"
        tw="px-4 pt-4 lg:pt-10"
        css={`
          flex-grow: 1;

          @media (min-width: 1024px) {
            max-width: 684px;
          }
        `}
      >
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
        <div id="wallet-metric" tw="mt-5 lg:mt-6 mb-5 lg:mb-6">
          <LayeredCard
            adStyle={[
              `background: #006156; display: flex; position: relative; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none;`,
              `&::-webkit-scrollbar {display: none};`,
            ]}
          >
            <div
              id="wallet-figures-wrapper"
              css={`
                background-image: url(${walletPattern});
                background-repeat: no-repeat;
              `}
              tw="py-4 lg:py-6 pl-7 lg:pl-10"
            >
              <div
                id="wallet-figures"
                css={`
                  border-right: 1px solid #388379;
                `}
                tw="flex flex-col pr-5 lg:pr-8 h-full justify-center"
              >
                <p
                  tw="mb-3 lg:mb-4 font-semibold"
                  css={`
                    color: #63bdaf;
                    font-size: 14px;
                  `}
                >
                  Total Balance
                </p>
                <p tw="text-white text-3xl">₦89,153,001.73</p>
                <p
                  tw="font-semibold mt-1"
                  css={`
                    color: #c8e2de;
                    font-size: 14px;
                  `}
                >
                  Book Balance: ₦450,000.093
                </p>
              </div>
            </div>
            <div id="money-graph" tw="flex flex-col py-3 lg:py-4 ml-5 lg:ml-8">
              <div
                id="intervals"
                className="intervals"
                tw="flex justify-between items-center"
              >
                {/* Some of the styling here was moved to a stylesheet to avoid excess duplication */}
                <span>Today</span>
                <span>Week</span>
                <span>Month</span>
                <span className="selected">Year</span>
              </div>
              <div id="graph" tw="my-3 lg:my-5">
                {/* TODO: replace this with actual graph implementation */}
                <img src={graph} alt="money graph" />
              </div>
              <div
                id="sub-intervals"
                className="intervals"
                tw="flex justify-between"
              >
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
              </div>
            </div>
            <div
              id="inflow-outflow"
              tw="flex flex-col justify-center ml-3 lg:ml-5 mr-5 lg:mr-8"
            >
              <p tw="text-xs text-green-light font-medium">Outflow</p>
              <p tw="text-xs text-green-faint font-bold">₦20,000</p>
              <p tw="text-xs text-green-light font-medium mt-3 lg:mt-4">
                Inflow
              </p>
              <p tw="text-xs text-green-faint font-bold">₦20,000</p>
            </div>
          </LayeredCard>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
