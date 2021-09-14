import tw from 'twin.macro';
import React from 'react';

import { ReactComponent as CalendarIcon } from '../assets/calendar.svg';
import { ReactComponent as DownloadIcon } from '../assets/download.svg';
import { ReactComponent as NairaLightIcon } from '../assets/naira-light.svg';

import '../styles/recent-activity.css';

const recentActivityData = [
  {
    title: 'Self Withdrawal',
    amount: '0.003BTC',
    time: 'Just now',
    status: 'success',
    type: 'outflow', // inflows have darker text colors on the amount column thus this.
    key: 1, //I don't want react to scream at me, lol. But then, that's not the only reason keys are used for rendering list items. Keys are an important part of Reacts render optimizations.
  },
  {
    title: 'Deposit',
    amount: '0.003BTC',
    time: 'Today',
    status: 'failed',
    type: 'inflow',
    key: 2,
  },
  {
    title: 'Transfer',
    amount: '0.003BTC',
    time: '7:23AM',
    status: 'pending',
    type: 'outflow',
    key: 3,
  },
  {
    title: 'Deposit',
    amount: '0.003BTC',
    time: 'Yesterday',
    status: 'success',
    type: 'inflow',
    key: 4,
  },
];

const statusColorCodes = {
  success: '#44A798',
  pending: '#FFCE00',
  failed: '#CC4945',
};

const RecentActivity = () => (
  <div
    id="recent-activity"
    tw="border-gray-lighter border rounded-3xl pt-4 lg:pt-6 pb-0 px-2 mt-4"
  >
    <div tw="flex items-center sm:items-baseline">
      <h5
        tw="text-gray-medium pl-2 lg:pl-4"
        css={`
          font-size: 14px;
        `}
      >
        Recent Activity
      </h5>
      <div
        tw="ml-auto flex items-center rounded-lg bg-gray-light cursor-pointer"
        css={`
          padding: 3px 7px;
        `}
      >
        <CalendarIcon />
        <span tw="text-gray-medium text-xs font-bold ml-2">
          Start date: 01/02/21
        </span>
      </div>
      <span tw="ml-2 mr-4 cursor-pointer">
        <DownloadIcon />
      </span>
    </div>
    <div className="recent-activity-mobile" tw="hidden">
      {recentActivityData.map((activity) => (
        <div></div>
      ))}
    </div>

    <div
      tw="overflow-x-scroll"
      css={
        (`overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none;`,
        `&::-webkit-scrollbar {display: none};`)
      }
    >
      <table
        className="recent-activity"
        tw=" w-full mt-1 border-separate"
        css={`
          border-spacing: 0 16px;
          min-width: 600px;
        `}
      >
        <tbody
          tw="font-bold"
          css={`
            font-size: 14px;
          `}
        >
          {/* taking advantage of css inheritance to set text size for children */}
          {recentActivityData.map((activity) => (
            <tr
              tw="border-transparent cursor-pointer rounded-lg"
              css={`
                &:hover {
                  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.05);
                }
              `}
            >
              <td
                tw="pl-2 lg:pl-4 py-1 pr-5"
                css={`
                  width: 40px;
                `}
              >
                <div
                  css={`
                    width: 40px;
                  `}
                >
                  <NairaLightIcon />
                </div>
              </td>
              <td tw="text-gray-dark">
                <span>{activity.title}</span>
              </td>
              <td tw="text-gray-medium">
                <span css={[activity.type == 'inflow' && tw`text-gray-dark`]}>
                  {activity.amount}
                </span>
              </td>
              <td tw="text-gray-medium">
                <span>{activity.time}</span>
              </td>
              <td tw="text-right pr-4">
                <span
                  tw="capitalize"
                  css={`
                    color: ${statusColorCodes[activity.status]};
                  `}
                >
                  {activity.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentActivity;
