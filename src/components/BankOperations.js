import tw from 'twin.macro';
import React from 'react';
import { Profile } from '../components';

const BankOperations = () => {
  return (
    <div
      tw="flex-grow px-4 pt-4 lg:pt-4 pb-4 lg:pb-6 "
      css={`
        @media (min-width: 1024px) {
          max-width: 684px;
        }
        @media (min-width: 1280px) {
          border-left: 1px solid #EFF2F7;
          margin-top: 24px;
          margin-bottom: 24px;
          padding-right: 32px;
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
    </div>
  );
};

export default BankOperations;
