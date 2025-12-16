import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      screens: {
        'max-1300': { 'max': '1300px' },
      },
    },
  },
} satisfies Config

