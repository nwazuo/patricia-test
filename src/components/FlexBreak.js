import tw, { styled } from 'twin.macro';
import React from 'react';

// small utility component to force flex items to break to a new row in a flex parent(tailored to this project)

const FlexBreak = styled.div(
  () => `
  flex-basis: 100%; height: 0;
  @media (min-width: 1280px) {
    display: none;
  }
`
);

export default FlexBreak;
