import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';

// import local
import * as s from './bleDetailStyle';
import {bleDetailList} from '~/constants/bleDetailList';

// import type
import {TDeviceInfo} from '../FindBLE/findBleType';
import {RootStackParamList} from '~/navigation/types';

const BLEDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'BLEDetail'>>();
  const state = route.params.state as TDeviceInfo;

  return (
    <s.Container>
      <s.InfoWrapper>
        {Object.keys(state).map(key => (
          <s.TextWrapper key={key}>
            <s.Title>{bleDetailList[key]}</s.Title>
            <s.Content>
              {state[key as keyof TDeviceInfo] === null
                ? '정보 없음'
                : JSON.stringify(state[key as keyof TDeviceInfo])}
            </s.Content>
          </s.TextWrapper>
        ))}
      </s.InfoWrapper>
    </s.Container>
  );
};

export default BLEDetailScreen;
