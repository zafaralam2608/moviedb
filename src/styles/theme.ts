import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface TypeBackground {
    hero?: string
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    overlay: true
  }
}

const primary = { main: '#f5c518', contrastText: '#000' }

// color at percent opacity
const translucent = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${String(percent)}%, transparent)`

export const theme = createTheme({
  cssVariables: { colorSchemeSelector: '[data-mui-color-scheme="%s"]' },
  breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1400 } },
  colorSchemes: {
    light: {
      palette: {
        primary,
        text: { primary: '#000' },
        background: { hero: 'none' },
      },
    },
    dark: {
      palette: {
        primary,
        text: { primary: '#fff', secondary: '#fff' },
        background: {
          default: '#1c1c1c',
          paper: '#1c1c1c',
          hero: 'radial-gradient(ellipse 80% 120% 45% 0%, #5b4b4b 0%, #2f2929 55%, #212121 100%)',
        },
      },
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    h5: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiAppBar: {
      defaultProps: { color: 'inherit', elevation: 0 },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.common.black,
          color: theme.vars.palette.text.primary,
        }),
      },
    },
    MuiCard: {
      defaultProps: { elevation: 2 },
    },
    MuiChip: {
      defaultProps: { variant: 'outlined' },
    },
    MuiIconButton: {
      variants: [
        {
          props: { color: 'overlay' },
          style: ({ theme }) => ({
            backgroundColor: translucent(theme.vars.palette.common.black, 60),
            color: theme.vars.palette.common.white,
            '&:hover': {
              backgroundColor: translucent(theme.vars.palette.common.black, 80),
            },
          }),
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        color: 'info.main',
        underline: 'hover',
      },
    },
    MuiStack: {
      defaultProps: { useFlexGap: true },
    },
  },
})
