import React from 'react';
import Head from '../components/Head';
import Body from '../components/Body';
import ButtonList from '../components/ButtonList';
import MainContainer from '../components/MainContainer';
import Sidebar from '../components/Sidebar';
import VideoContent from '../components/VideoContent';

function App() {
  return (
    <div>
     <Head/>
     <Body />
     <ButtonList/>
     <MainContainer/>
     <Sidebar/>
     <VideoContent/>

    </div>
  );
};

export default App;
