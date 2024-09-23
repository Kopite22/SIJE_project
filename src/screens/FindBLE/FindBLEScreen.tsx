import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {ActivityIndicator, Alert, Platform} from 'react-native';
import {BleManager, Device} from 'react-native-ble-plx';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

// import local
import * as s from './findBleStyle';
import {bleError} from '~/constants/bleErrorCode';
import useGetNetInfo from './hooks/useGetNetInfo';

// import type
import {TBleItem, TDeviceInfo} from './findBleType';

// import component
import {Toast} from '@components/Toast/ToastComponent';

const manager = new BleManager();

const FindBLE = ({navigation}: {navigation: any}) => {
  const isFocused = useIsFocused();

  const [deviceList, setDeviceList] = useState<Device[]>([]);
  const [scanState, setScanState] = useState(true);

  const netInfo = useGetNetInfo();

  // wifi 정보 출력
  const onPressWriteBtn = async () => {
    const checkPermission = await check(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (checkPermission !== RESULTS.GRANTED) {
      Toast.show({
        content: '원할한 wifi 정보 확인을 위해 위치 권한을 확인해주세요.',
      });
      return;
    }

    if (netInfo?.type !== 'wifi') {
      Toast.show({content: 'Wifi 연결 후 다시 클릭해주세요.'});
    } else {
      Toast.show({
        content: `WIFI SSID: ${netInfo.details?.ssid || '정보 없음'}`,
      });
    }
  };

  const scanDevice = () => {
    const idList = new Set<string>();

    manager.startDeviceScan(
      null,
      {allowDuplicates: false},
      async (error, device) => {
        if (error) {
          Alert.alert(
            bleError[error.errorCode]?.title,
            bleError[error.errorCode]?.content,
          );
          return;
        }

        // 검색된 장치 이름 && 중복 여부 확인
        if (device?.name && !idList.has(device.id)) {
          idList.add(device.id);
          setDeviceList(prev => [...prev, device]);
        }
      },
    );
  };

  const goDetail = (state: TDeviceInfo) => {
    navigation.navigate('bleDetail', {state});
  };

  useEffect(() => {
    // 15초 후, 검색 중지
    const timer = setTimeout(() => {
      manager.stopDeviceScan();
      setScanState(false);
    }, 15000);

    if (isFocused) {
      setScanState(true);
      setDeviceList([]);
      scanDevice();
    } else {
      clearTimeout(timer);
      manager.stopDeviceScan();
    }
  }, [isFocused]);

  return (
    <s.Container>
      <s.TitleWrapper>
        <s.Text>검색된 기기</s.Text>
        <ActivityIndicator animating={scanState} />
      </s.TitleWrapper>
      <s.ItemWrapper
        contentContainerStyle={{rowGap: 10}}
        showsVerticalScrollIndicator={false}>
        {deviceList.map(v => (
          <BleItem key={Math.random()} {...v} onPress={goDetail} />
        ))}
      </s.ItemWrapper>
      <s.WriteButton onPress={onPressWriteBtn}>
        <s.ButtonText>WRITE</s.ButtonText>
      </s.WriteButton>
    </s.Container>
  );
};

// 검색된 기기 Item
const BleItem = (props: TBleItem) => {
  const {onPress} = props;
  const {id, name, rssi, isConnectable} = props;
  const {mtu, txPowerLevel, serviceUUIDs, localName} = props;

  return (
    <s.ItemBox
      onPress={() =>
        onPress({
          id,
          name,
          rssi,
          isConnectable,
          mtu,
          txPowerLevel,
          serviceUUIDs,
          localName,
        })
      }>
      <s.ItemText>기기 이름 : {name}</s.ItemText>
      <s.ItemText numberOfLines={1} ellipsizeMode="tail">
        기기 UUID : {id}
      </s.ItemText>
    </s.ItemBox>
  );
};

export default FindBLE;
