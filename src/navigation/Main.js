import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomTab from './bottomTab';

const Main = () => {
  const navigationRef = React.createRef();
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <BottomTab />
      </NavigationContainer>
    </>
  );
};
export default Main;
