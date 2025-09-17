export const colors = {
  // DigiLocker-like palette
  background: '#FFFFFF',
  surface: '#FFFFFF',
  surfaceMuted: '#F8FAFC', // subtle gray background blocks
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  border: '#E2E8F0',
  primary: '#5145CD', // indigo-ish primary like DigiLocker
  primaryDark: '#4338CA',
  warning: '#B45309',
  danger: '#B91C1C',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const typography = {
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500' as const,
  },
  label: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600' as const,
    textTransform: 'uppercase' as const,
  },
};


