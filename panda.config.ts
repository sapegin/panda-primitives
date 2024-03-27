import { defineConfig } from '@pandacss/dev';
import base from '@pandacss/preset-base';

export default defineConfig({
  // Opt out of all default
  eject: true,

  // Output directory
  outdir: 'styled-system',

  // Generate React components based on patterns
  jsxFramework: 'react',

  // Include CSS reset
  preflight: true,

  // Where to look for CSS declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Include utilities and conditions from the base preset
  utilities: base.utilities,
  conditions: base.conditions,

  // Patterns
  patterns: {
    box: {
      transform(props) {
        return props;
      }
    },
    flex: {
      transform(props) {
        return {
          display: 'flex',
          ...props
        };
      }
    },
    stack: {
      properties: {
        direction: { type: 'property', value: 'flexDirection' }
      },
      defaultValues: {
        direction: 'column'
      },
      transform(props) {
        const { direction, ...rest } = props;
        return {
          display: 'flex',
          flexDirection: direction,
          ...rest
        };
      }
    },
    visuallyHidden: {
      transform(props) {
        return {
          srOnly: true,
          ...props
        };
      }
    }
  },

  // Project theme
  theme: {
    tokens: {
      colors: {
        text: { value: '#333' },
        background: { value: '#fff' },
        primary: { value: '#783396' },
        secondary: { value: '#767676' },
        accent: { value: '#d396c3' },
        muted: { value: '#efefef' },
        error: { value: '#d0453e' }
      },
      spacing: {
        // 0: "0",
        xxs: { value: '0.125rem' }, // 2px
        xs: { value: '0.25rem' }, // 4px
        s: { value: '0.5rem' }, // 8px
        m: { value: '1rem' }, // 16px
        l: { value: '2rem' }, // 32px
        xl: { value: '4rem' }, // 64px
        xxl: { value: '8rem' }, // 128px
        xxxl: { value: '16rem' } // 256px
      },
      fonts: {
        body: {
          value: 'Helvetica Neue, Helvetica, Arial, sans-serif'
        },
        heading: {
          value: 'Helvetica Neue, Helvetica, Arial, sans-serif'
        }
      },
      fontSizes: {
        xl: { value: '3rem' },
        l: { value: '2rem' },
        m: { value: '1rem' },
        s: { value: '0.9rem' },
        xs: { value: '0.75rem' }
      },
      fontWeights: {
        light: { value: 200 },
        normal: { value: 400 },
        bold: { value: 700 }
      },
      lineHeights: {
        body: { value: 1.5 },
        heading: { value: 1.1 }
      },
      borders: {
        none: { value: 'none' },
        thin: { value: '1px solid' },
        focus: { value: '3px solid {colors.accent}' }
      },
      radii: {
        none: { value: '0' },
        base: { value: '0.25em' },
        round: { value: '99999em' }
      }
    }
  }
});
