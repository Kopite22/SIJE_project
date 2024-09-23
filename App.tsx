import {ThemeProvider} from '@emotion/react';
import React, {useEffect} from 'react';

// import local
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import Toast from './src/components/Toast';
import Navigation from './src/navigation';
import theme from './src/theme/theme';
import {Platform} from 'react-native';

function App(): React.JSX.Element {
  const androidPermission = [
    PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ];
  const iosPermission = [
    PERMISSIONS.IOS.BLUETOOTH,
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  ];

  useEffect(() => {
    requestMultiple(
      Platform.OS === 'ios' ? iosPermission : androidPermission,
    ).then(status => {
      console.log(status);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Toast />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
