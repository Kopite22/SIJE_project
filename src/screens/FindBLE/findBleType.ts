import {Device} from 'react-native-ble-plx';

export type TDeviceInfo = Pick<
  Device,
  | 'name'
  | 'rssi'
  | 'id'
  | 'isConnectable'
  | 'mtu'
  | 'txPowerLevel'
  | 'serviceUUIDs'
  | 'localName'
>;
export interface TBleItem extends TDeviceInfo {
  onPress: (state: TDeviceInfo) => void;
}
