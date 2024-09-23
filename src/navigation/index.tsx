import React from 'react';
import styled from '@emotion/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import navigator
import MainStack from './MainStack';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <BasicLayout>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="mainStack"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="mainStack" component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </BasicLayout>
  );
};

const BasicLayout = styled.SafeAreaView`
  flex: 1;
`;

export default Navigation;
