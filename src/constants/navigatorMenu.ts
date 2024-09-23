interface INavigateMenu {
  [key: string]: {
    headerTitle: string;
    name: string;
  };
}

export const stackMenu: INavigateMenu = {
  findBle: {headerTitle: '블루투스 기기 검색', name: 'findBle'},
  bleDetail: {headerTitle: '기기 상세', name: 'bleDetail'},
};
