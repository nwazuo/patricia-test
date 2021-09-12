import 'twin.macro';
import React from 'react';

import { ReactComponent as ThreeDots } from '../assets/3-dots.svg';
import avatar from '../assets/avatar.png';

// notification icon here includes the unread indicator. In a real-world app, it would conditionally be rendered in.
import { ReactComponent as Notification } from '../assets/notification.svg';

// import { css } from 'styled-components';

const Profile = () => (
  <div tw="px-4 py-2 pr-0 lg:pr-2 lg:bg-gray-light flex items-center w-min rounded-lg">
    <div tw="mr-2 bg-white rounded-lg p-2 w-8 h-8 cursor-pointer">
      <Notification />
    </div>
    <div
      tw="mr-2 bg-white rounded-lg w-8 h-8 cursor-pointer"
      css={{ padding: '3px' }}
    >
      <img src={avatar} tw="w-full" />
    </div>
    <div tw="cursor-pointer">
      <ThreeDots />
    </div>
  </div>
);

export default Profile;
