import tw from 'twin.macro';
import React, { useState } from 'react';
import { Profile } from '../components';

const BankOperations = () => {
  const [shown, setShown] = useState(0);

  const handleSwitch = (index) => {
    setShown(index);
  };
  return (
    <div
      tw="flex-grow px-4 lg:pt-4 pb-4 lg:pb-6 "
      css={`
        @media (min-width: 1024px) {
          max-width: 684px;
        }
        @media (min-width: 1280px) {
          border-left: 1px solid #EFF2F7;
          margin-top: 24px;
          margin-bottom: 24px;
          padding-left: 24px;
          padding-right: 24px;
          width: calc(428px + 48px);
          flex-grow: 0;
}
        }
      `}
    >
      <div
        tw="flex justify-end"
        css={`
          @media (max-width: 1280px) {
            display: none;
          }
        `}
      >
        <Profile />
      </div>
      <div
        id="bank-operations-card"
        tw="rounded-3xl border border-gray-lighter"
        css={`
          @media (min-width: 1280px) {
            margin-top: 62px;
          }
        `}
      >
        <div id="tabs" tw="flex">
          <TabSelect index={0} shown={shown} switchTab={handleSwitch}>
            Deposit
          </TabSelect>
          <TabSelect index={1} shown={shown} switchTab={handleSwitch}>
            Transfer
          </TabSelect>
        </div>
        <TabDisplay index={0} shown={shown}>
          <div
            tw="pt-6 lg:pt-9 mx-auto text-center font-bold text-gray-darker text-sm lg:text-lg"
            css={`
              max-width: 237px;
            `}
          >
            Select a method to Fund Naira wallet below
          </div>
        </TabDisplay>
      </div>
    </div>
  );
};

const TabDisplay = ({ index, shown, children, switchTab }) => {
  return <div css={[tw`hidden`, index === shown && tw`block`]}>{children}</div>;
};

const TabSelect = ({ index, shown, children, switchTab }) => {
  const inactive = tw`text-gray-medium bg-gray-lighter`;

  return (
    <span
      tw="py-5 text-green text-center flex-1 cursor-pointer"
      css={[
        index !== shown && inactive,
        `&:first-child {border-top-left-radius: 24px;} &:last-child {border-top-right-radius: 24px;}`,
      ]}
      onClick={() => switchTab(index)}
    >
      {children}
    </span>
  );
};

export default BankOperations;
