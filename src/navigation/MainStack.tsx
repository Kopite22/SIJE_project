import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {stackMenu} from '~/constants/navigatorMenu';

// import Screen
import FindBLE from '@screens/FindBLE';
import BLEDetail from '~/screens/BLEDetail';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="findBle">
      <Stack.Screen
        name={stackMenu.findBle.name}
        component={FindBLE}
        options={{headerTitle: stackMenu.findBle.headerTitle}}
      />
      <Stack.Screen
        name={stackMenu.bleDetail.name}
        component={BLEDetail}
        options={{
          headerTitle: stackMenu.bleDetail.headerTitle,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
