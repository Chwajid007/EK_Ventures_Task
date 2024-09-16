import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import Main from './src/navigation/Main';

export default function App() {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  return <Main />;
}
