const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    screens,
    media: {
      sm: `(min-width: ${screens.sm})`,
      md: `(min-width: ${screens.md})`,
      lg: `(min-width: ${screens.lg})`,
      xl: `(min-width: ${screens.xl})`,
    },
    extend: {
      spacing: {
        '0.5': '0.125rem', // 2px
        '1.5': '0.375rem', // 6px
        '2.5': '0.625rem', // 10px
        '3.5': '0.875rem', // 14px
        '4': '1rem', // 16px
        '4.5': '1.125rem', // 18px
        '5': '1.25rem', // 20px
        '5.5': '1.375rem', // 22px
        '6': '1.5rem', // 24px
        '9': '2.25rem', // 36px
        '9.5': '2.375rem', // 38px
        '10': '2.5rem', // 40px
        '10.5': '2.625rem', // 42px
        '11': '2.75rem', // 44px
        '11.5': '2.875rem', // 46px
        '12': '3rem', // 48px
        '15': '3.75rem', // 60px
        '17': '4.25rem', // 68px
        '18': '4.5rem', // 72px
        '20': '5rem', // 80px
        '27': '6.75rem', // 108px
        '30': '7.5rem', // 120px
        '40': '10rem', // 160px
        '43': '10.75rem', // 172px
        '65': '16.25rem', // 260px
      },
      inset: {
        '2.5': '0.625rem', // 10px
      },
      width: {
        '49/100': '49%',
        '7.5': '1.875rem', // 30px
      },
      height: {
        '7.5': '1.875rem', // 30px
        '25': '6.25rem', // 100px
      },
      borderRadius: {
        '2.5': '0.625rem', // 10px
        '25': '6.25rem', // 100px
      },
    },
    fontSize: {
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      xxl: '1.875rem', // 30px
      header: '2.75rem', // 44px
    },
    lineHeight: {
      xs: '90%',
      sm: '94%',
      base: '110%',
      lg: '120%',
    },
    colors: {
      // full tint colours
      darkpurple: '#7C64B2',
      teal: '#2B8393',
      softred: '#F57479',
      // pastel colours
      lightviolet: '#DAD1EE',
      lightteal: '#C7ECEF',
      coral: '#FCD6D7',
      // tones
      black: '#453E53',
      gray: '#9A96AB',
      lightgray: '#E0E0EB',
      lightestgray: '#FAFAFA',
      white: '#FFFFFF',
      whiteoverlay: 'rgba(251, 250, 255, 0.3)',
      // gradients
      tealcoral:
        'radial-gradient(115.8% 115.5% at 120.99% -26.5%, rgba(79, 202, 209, 0.5) 0%, rgba(252, 214, 215, 0.5) 100%)',
      teallilac:
        'radial-gradient(145.19% 158% at 100% 100%, rgba(206, 219, 255, 0.5) 8.85%, rgba(225, 173, 255, 0.5) 100%)',
      graylilac:
        'radial-gradient(89.16% 86.13% at 75.86% 17.87%, rgba(235, 235, 235, 0.5) 0%, rgba(225, 173, 255, 0.5) 100%)',
      palebluecornflower:
        'radial-gradient(122.94% 120.33% at 80.37% 73.33%, rgba(252, 214, 215, 0.5) 0%, rgba(210, 133, 255, 0.5) 100%)',
      lightteallightviolet:
        'radial-gradient(144.42% 132.5% at -59.01% -59.5%, rgba(79, 202, 209, 0.75) 0%, rgba(218, 209, 238, 0.75) 100%)',
      cornflowerlightviolet:
        'radial-gradient(93.59% 91.2% at 93.59% 91.2%, rgba(127, 162, 255, 0.5) 1.64%, rgba(218, 209, 238, 0.5) 100%)',
      grayteal:
        'radial-gradient(146.37% 136.96% at 90.47% 33.54%, rgba(224, 224, 235, 0.5) 0%, rgba(79, 202, 209, 0.5) 100%)',
    },
    fontFamily: {
      serif: ['Caladea', 'Georgia', 'Cambria', 'Times New Roman', 'Times'],
      sans: [
        'Karla',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      title: [
        'Porpara',
        'Karla',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    boxShadow: {
      default: '0px 0px 4px rgba(154, 150, 171, 0.2)',
    },
  },
}
