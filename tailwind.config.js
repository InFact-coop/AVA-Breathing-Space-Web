const plugin = require('tailwindcss/plugin')

const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

module.exports = {
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
        0.125: '0.03125rem', // 0.5px
        0.5: '0.125rem', // 2px
        1.25: '0.3125rem', // 5px
        1.5: '0.375rem', // 6px
        1.75: '0.5rem', // 8px
        2.5: '0.625rem', // 10px
        3: '0.750rem', // 12px
        3.5: '0.875rem', // 14px
        3.75: '0.9375rem', // 15px
        4: '1rem', // 16px
        4.5: '1.125rem', // 18px
        5: '1.25rem', // 20px
        5.5: '1.375rem', // 22px
        6: '1.5rem', // 24px
        7.5: '1.875rem', // 30px
        9: '2.25rem', // 36px
        9.5: '2.375rem', // 38px
        10: '2.5rem', // 40px
        10.5: '2.625rem', // 42px
        11: '2.75rem', // 44px
        11.5: '2.875rem', // 46px
        12: '3rem', // 48px
        15: '3.75rem', // 60px
        17: '4.25rem', // 68px
        18: '4.5rem', // 72px
        20: '5rem', // 80px
        27: '6.75rem', // 108px
        30: '7.5rem', // 120px
        40: '10rem', // 160px
        43: '10.75rem', // 172px
        65: '16.25rem', // 260px
        75: '18.75rem', // 300px
      },
      inset: {
        '-1.25': '-0.3125rem', // -5px
        2.5: '0.625rem', // 10px
        4.5: '1.125rem', // 18px
        5: '1.25rem', // 20px
        10: '2.5rem', // 40px
      },
      width: {
        4.5: '1.125rem', // 18px
        6: '1.5rem', //24px
        7.5: '1.875rem', // 30px
        36: '9rem', // 144px
        half: '49%', // 50%
      },
      minWidth: {
        36: '9rem', // 144px
      },
      maxWidth: {
        16.25: '4.0625rem', // 65px
        22.5: '5.625rem', // 90px
        256: '64rem', //1024px
      },
      height: {
        4.5: '1.125rem', // 18px
        7.5: '1.875rem', // 30px
        8.75: '2.1875rem', // 35px
        13.5: '3.375rem', // 54px
        17.5: '4.875rem', //70px
        25: '6.25rem', // 100px
        45: '11.25rem', // 180px
        50: '12.5rem', // 200px
      },
      minHeight: {
        content: 'calc(100vh - 200px - 60px)', // screen minus footer minus nav
        2.5: '0.625rem', // 10px
      },
      maxHeight: {
        16.25: '4.0625rem', // 65px
      },
      borderRadius: {
        1.5: '0.375rem', // 6px
        2.5: '0.625rem', // 10px
        25: '6.25rem', // 100px
      },
      borderWidth: {
        0.5: '0.5px',
      },
      opacity: {
        95: '0.95',
      },
    },
    fontSize: {
      sm: '0.875rem', // 14px
      // base: '1rem', // 16px increased to 18px January 2021
      base: '1.125rem', // 18px
      med: '1.125rem', // 18px
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
      // teal: '#2B8393', removed Jan 2021 to meet accessibility guidelines
      teal: '#297F8E',
      softred: '#F57479',
      lightblue: '#CEDBFF',
      opaquelightblue: 'rgba(206, 219, 255, 0.3)',
      // pastel colours
      lightviolet: '#DAD1EE',
      lightteal: '#C7ECEF',
      coral: '#FCD6D7',
      // tones
      black: '#453E53',
      // gray: '#9A96AB', removed Jan 2021 to meet accessibility guidelines
      gray: '#706C7F',
      midgray: '#A8A8B7',
      lightgray: '#F2F2F7',
      lightestgray: '#FAFAFA',
      white: '#FFFFFF',
      whiteoverlay: 'rgba(251, 250, 255, 0.3)',
      blackoverlay: 'rgba(69, 62, 83, 0.8)',
      // gradients
      tealcoral:
        'radial-gradient(115.8% 115.5% at 120.99% -26.5%, rgba(79, 202, 209, 0.5) 0%, rgba(252, 214, 215, 0.5) 100%)',
      teallilac:
        'radial-gradient(145.19% 158% at 100% 100%, rgba(206, 219, 255, 0.5) 8.85%, rgba(225, 173, 255, 0.5) 100%)',
      graylilac:
        'radial-gradient(89.16% 86.13% at 75.86% 17.87%, rgba(235, 235, 235, 0.5) 0%, rgba(225, 173, 255, 0.5) 100%)',
      palebluecornflower:
        'radial-gradient(122.94% 120.33% at 80.37% 73.33%, rgba(252, 214, 215, 0.5) 0%, rgba(210, 133, 255, 0.5) 100%)',
      lighttealgrayviolet:
        'radial-gradient(144.42% 132.5% at -59.01% -59.5%, rgba(79, 202, 209, 0.75) 0%, rgba(218, 209, 238, 0.75) 100%)',
      cornflowergrayviolet:
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
      exit: '0px 0px 10px rgba(154, 150, 171, 0.5)',
      button: '0px 0px 6px #DAD1EE',
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const linearGradients = {
        '.bg-tealcoral': {
          background:
            'radial-gradient(115.8% 115.5% at 120.99% -26.5%, rgba(79, 202, 209, 0.5) 0%, rgba(252, 214, 215, 0.5) 100%)',
        },
        '.bg-teallilac': {
          background:
            'radial-gradient(145.19% 158% at 100% 100%, rgba(206, 219, 255, 0.5) 8.85%, rgba(225, 173, 255, 0.5) 100%)',
        },
        '.bg-graylilac': {
          background:
            'radial-gradient(89.16% 86.13% at 75.86% 17.87%, rgba(235, 235, 235, 0.5) 0%, rgba(225, 173, 255, 0.5) 100%)',
        },
        '.bg-palebluecornflower': {
          background:
            'radial-gradient(122.94% 120.33% at 80.37% 73.33%, rgba(252, 214, 215, 0.5) 0%, rgba(210, 133, 255, 0.5) 100%)',
        },
        '.bg-lighttealgrayviolet': {
          background:
            'radial-gradient(144.42% 132.5% at -59.01% -59.5%, rgba(79, 202, 209, 0.75) 0%, rgba(218, 209, 238, 0.75) 100%)',
        },
        '.bg-cornflowergrayviolet': {
          background:
            'radial-gradient(93.59% 91.2% at 93.59% 91.2%, rgba(127, 162, 255, 0.5) 1.64%, rgba(218, 209, 238, 0.5) 100%)',
        },
        '.bg-grayteal': {
          background:
            'radial-gradient(146.37% 136.96% at 90.47% 33.54%, rgba(224, 224, 235, 0.5) 0%, rgba(79, 202, 209, 0.5) 100%)',
        },
      }

      addUtilities(linearGradients, ['responsive', 'hover'])
    }),
  ],

  variants: {
    borderStyle: ['responsive', 'first', 'last'],
    borderWidth: ['responsive', 'first', 'last'],
  },
}
