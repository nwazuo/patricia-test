import React from 'react';
import tw from 'twin.macro';
import { Header, Layout } from './components';

/* Keeping this snippet cos I'll need something like this */

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-green to-yellow-light`,
  ],
};

const App = () => (
  <>
    <Header />
    <Layout />
  </>
);

export default App;
