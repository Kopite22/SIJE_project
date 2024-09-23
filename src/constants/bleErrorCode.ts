export type TBleError = {
  [key: number]: {
    title: string;
    content: string;
  };
};

export const bleError: TBleError = {
  101: {
    title: '블루투스 권한 에러',
    content: '앱의 블루투스 허용 권한을 확인해주세요.',
  },
  102: {
    title: '블루투스 연결 에러',
    content: '블루투스 전원이 켜져있는지 확인해주세요.',
  },
};
