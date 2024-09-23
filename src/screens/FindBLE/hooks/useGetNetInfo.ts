import {useEffect, useState} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

const useGetNetInfo = () => {
  const [netInfo, setNetInfo] = useState<NetInfoState | null>(null);

  // 현재 네트워크 정보 확인
  const fetchNetInfo = async () => {
    const currentNetInfo = await NetInfo.fetch();
    setNetInfo(currentNetInfo);
  };

  useEffect(() => {
    NetInfo.configure({shouldFetchWiFiSSID: true});

    fetchNetInfo();

    // 네트워크 상태 구독
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return netInfo;
};

export default useGetNetInfo;
