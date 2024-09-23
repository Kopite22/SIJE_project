type TColor = 'black' | 'white' | 'neutral100';

export interface iTheme {
  color: {
    [key in TColor]: string;
  };
}

const theme: iTheme = {
  color: {
    black: '#000000',
    white: '#ffffff',
    neutral100: '#e4e7ec',
  },
};

export default theme;
