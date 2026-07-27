/**
 * CUE Design System — Design Tokens (typed)
 * Extracted from Figma (file: CUE-design).
 * Mirrors tokens.css so you can reference tokens in JS/TS as well as CSS.
 */

export const palette = {
  grey: {
    300: '#d1ccc4',
    500: '#757069',
    600: '#55514c',
    800: '#272522',
    900: '#1a1816',
  },
  primary: {
    100: '#e5dcd6',
    200: '#e2d4c9',
    500: '#caa07e',
    700: '#98755a',
    900: '#4b321e',
  },
  green: {
    50: '#edf8f5',
    100: '#d9f2ec',
    500: '#38f5c9',
    700: '#248f76',
    800: '#1d6353',
    900: '#143d34',
  },
  blue: {
    50: '#e6f4ff',
    400: '#33aaff',
    500: '#0095ff',
    800: '#00528c',
    900: '#003f6b',
  },
  yellow: {
    50: '#fceed7',
    400: '#e6b377',
    500: '#dda25d',
    800: '#9b6e28',
    900: '#7f5710',
  },
  red: {
    50: '#f4e4e6',
    100: '#f3e3e6',
    400: '#cf6e83',
    500: '#b84259',
    600: '#843343',
    800: '#452329',
    900: '#331a1e',
  },
  accent: {
    purple: '#8a38f5',
    mint: '#38f5c9',
  },
  white: '#ffffff',
  white70: '#ffffffb2',
  white20: '#ffffff33',
  white5: '#ffffff0d',
  black: '#000000',
  black40: '#00000066',
} as const;

export const textColor = {
  primary: '#f2efea',
  secondary: '#a39d95',
  grey: '#757069',
  disabled: '#757069',
  accent: '#f9f7f3',
  primaryContrast: '#1a1816',
  secondaryContrast: '#00000099',
  success: '#5ee8c8',
  info: '#54b8ff',
  warning: '#e6b377',
  error: '#dc999f',
} as const;

export const iconColor = {
  primary: '#f9f7f3',
  accent: '#d3ac8d',
  grey: '#a39d95',
  lightGrey: '#757069',
  black: '#1a1816',
  dark: '#272522',
  white: '#f9f7f3',
  success: '#5ee8c8',
  info: '#33aaff',
  warning: '#e6b377',
  error: '#cf6e83',
} as const;

export const surface = {
  primary: '#1a1816',
  accent: '#4b321e',
  overlay: '#1f1d1be5',
  overlay2: '#413e3a',
  bottomSheets: '#1a1816',
  raisedSoft: '#ffffff05',
  raisedStrong: '#ffffff0d',
} as const;

export const border = {
  default: '#ffffff05',
  card: '#ffffff05',
  strong: '#ffffff0d',
  accent: '#caa07e',
} as const;

export const button = {
  primaryBg: '#f2efea',
  primaryText: '#1a1816',
  secondaryBg: '#ffffff0d',
  secondaryText: '#f2efea',
  secondaryBorder: '#ffffff0d',
  destructiveBg: '#452329',
  destructiveText: '#dc999f',
  tertiaryText: '#e4e0d9',
} as const;

export const typography = {
  fontFamily: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif",
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
  },
  // size / lineHeight / letterSpacing, extracted from Figma text styles
  scale: {
    h1: { size: 28, lineHeight: 1.2, letterSpacing: 0, weight: 600 },
    h2: { size: 20, lineHeight: 1.2, letterSpacing: 0, weight: 600 },
    h5: { size: 24, lineHeight: '28px', letterSpacing: 0, weight: 600 },
    s2: { size: 16, lineHeight: '24px', letterSpacing: 12, weight: 600 }, // Subtitle
    b1: { size: 18, lineHeight: 1.4, letterSpacing: 0, weight: 400 },
    b2: { size: 16, lineHeight: 1.4, letterSpacing: 0, weight: 400 },
    b3: { size: 14, lineHeight: 1.4, letterSpacing: 0, weight: 400 },
    b4: { size: 13, lineHeight: 1.4, letterSpacing: 0, weight: 400 },
    c1: { size: 12, lineHeight: 1.2, letterSpacing: 0, weight: 400 }, // Caption
    c3: { size: 10, lineHeight: 1.2, letterSpacing: 0, weight: 400 }, // Caption
    // Button label styles (all SemiBold, letterSpacing 3)
    buttonGiant: { size: 18, lineHeight: 1.2, letterSpacing: 3, weight: 600 },
    buttonLarge: { size: 16, lineHeight: 1.2, letterSpacing: 3, weight: 600 },
    buttonMedium: { size: 14, lineHeight: 1.2, letterSpacing: 3, weight: 600 },
    buttonSmall: { size: 12, lineHeight: 1.2, letterSpacing: 3, weight: 600 },
    buttonTiny: { size: 10, lineHeight: 1.2, letterSpacing: 3, weight: 600 },
  },
} as const;

export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  badge: 8,
  card: 12,
  input: 12,
  buttonTiny: 6,
  button: 999, // pill
  avatar: 999,
  full: 999,
} as const;

// NOTE: only space-1 (4) and space-3 (12) were confirmed in Figma;
// the rest follow the same 4px step. Adjust if your Figma spacing scale differs.
export const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
} as const;

export const shadow = {
  500: '0 10px 32px -4px rgba(19, 25, 39, 0.10), 0 6px 14px -6px rgba(19, 25, 39, 0.12)',
} as const;

export const tokens = {
  palette,
  textColor,
  iconColor,
  surface,
  border,
  button,
  typography,
  radius,
  spacing,
  shadow,
} as const;

export default tokens;
