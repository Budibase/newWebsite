

// tailwind.config.mjs
export default {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
  
        white: 'var(--bb-white)',
        black: 'var(--bb-black)',
  
        grey: {
          50: 'var(--bb-background-base)',
          100: 'var(--bb-gray-75)',
          200: 'var(--bb-gray-100)',
          300: 'var(--bb-border-bold)',
          400: 'var(--bb-gray-500)',
          500: 'var(--bb-text-subtle)',
          600: 'var(--bb-gray-700)',
          700: 'var(--bb-gray-800)',
          800: 'var(--bb-gray-800)',
          900: 'var(--bb-text-base)',
          950: 'var(--bb-black)',
        },
  
        stone: {
          50: 'var(--bb-background-base)',
          100: 'var(--bb-gray-75)',
          200: 'var(--bb-gray-100)',
          300: 'var(--bb-border-bold)',
          400: 'var(--bb-gray-500)',
          500: 'var(--bb-text-subtle)',
          600: 'var(--bb-gray-700)',
          700: 'var(--bb-gray-800)',
          800: 'var(--bb-gray-800)',
          900: 'var(--bb-text-base)',
          950: 'var(--bb-black)',
        },
  
        blue: {
          100: 'var(--bb-blue-100)',
          200: 'var(--bb-blue-300)',
          300: 'var(--bb-blue-500)',
          400: 'var(--bb-blue-700)',
          500: 'var(--bb-brand)',
          600: 'var(--bb-blue-1000)',
          700: 'var(--bb-blue-1100)',
          800: 'var(--bb-blue-1300)',
          900: 'var(--bb-blue-1500)',
        },
  
        sky: {
          100: 'var(--bb-blue-100)',
          200: 'var(--bb-blue-300)',
          300: 'var(--bb-blue-500)',
          400: 'var(--bb-blue-700)',
          500: 'var(--bb-brand)',
          600: 'var(--bb-blue-1000)',
          700: 'var(--bb-blue-1100)',
          800: 'var(--bb-blue-1300)',
          900: 'var(--bb-blue-1500)',
        },
  
        orange: {
          100: 'var(--bb-orange-100)',
          200: 'var(--bb-orange-300)',
          300: 'var(--bb-orange-400)',
          400: 'var(--bb-orange-500)',
          500: 'var(--bb-orange-700)',
          600: 'var(--bb-orange-800)',
          700: 'var(--bb-orange-1000)',
          800: 'var(--bb-orange-1200)',
          900: 'var(--bb-orange-1500)',
        },
  
        green: {
          100: 'var(--bb-green-100)',
          200: 'var(--bb-green-200)',
          300: 'var(--bb-green-300)',
          400: 'var(--bb-green-400)',
          500: 'var(--bb-green-700)',
          600: 'var(--bb-green-900)',
          700: 'var(--bb-green-1100)',
          800: 'var(--bb-green-1300)',
          900: 'var(--bb-green-1500)',
        },
  
        purple: {
          100: 'var(--bb-purple-100)',
          200: 'var(--bb-purple-300)',
          300: 'var(--bb-purple-500)',
          400: 'var(--bb-purple-700)',
          500: 'var(--bb-purple-800)',
          600: 'var(--bb-purple-1100)',
          700: 'var(--bb-purple-1300)',
          800: 'var(--bb-purple-1400)',
          900: 'var(--bb-purple-1500)',
        },
        red: {
            100: 'var(--bb-red-100)',
            200: 'var(--bb-red-200)',
            300: 'var(--bb-red-300)',
            400: 'var(--bb-red-500)',
            500: 'var(--bb-red-700)',
            600: 'var(--bb-red-900)',
            700: 'var(--bb-red-1100)',
            800: 'var(--bb-red-1300)',
            900: 'var(--bb-red-1500)',
          },
      },
  
      extend: {
        colors: {
          bg: 'rgb(var(--bg) / <alpha-value>)',
          surface: 'rgb(var(--surface) / <alpha-value>)',
          'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
  
          border: 'rgb(var(--border) / <alpha-value>)',
          'border-strong': 'rgb(var(--border-strong) / <alpha-value>)',
  
          text: 'rgb(var(--text) / <alpha-value>)',
          'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
          'text-subtle': 'rgb(var(--text-subtle) / <alpha-value>)',
  
          primary: 'rgb(var(--primary) / <alpha-value>)',
          'primary-hover': 'rgb(var(--primary-hover) / <alpha-value>)',
          'primary-active': 'rgb(var(--primary-active) / <alpha-value>)',
          'on-primary': 'rgb(var(--on-primary) / <alpha-value>)',

          brand: 'rgb(var(--brand) / <alpha-value>)',
          'brand-hover': 'rgb(var(--brand-hover) / <alpha-value>)',
          'on-brand': 'rgb(var(--on-brand) / <alpha-value>)',

          accent: 'rgb(var(--accent) / <alpha-value>)',
          success: 'rgb(var(--success) / <alpha-value>)',
          warning: 'rgb(var(--warning) / <alpha-value>)',
          danger: 'rgb(var(--danger) / <alpha-value>)',
  
          ring: 'rgb(var(--ring) / <alpha-value>)',
        },
      },
    },
  }
