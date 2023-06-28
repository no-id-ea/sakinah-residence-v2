/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ['var(--font-general)'],
        montserrat: ['var(--font-montserrat)'],
        lato: ['var(--font-lato)'],
      },
      backgroundImage: {
        'banner-hero': 'url("/banner1.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'snow': '#FCFCFC',
        'orange': '#F38D39'
      },
      textStyles: {
        'heading-1': 'font-general font-semibold text-[64px]',
        'heading-2': 'font-lato font-bold text-[48px]',
        'heading-3': 'font-lato font-medium text-[28px]',
        'body-1': 'font-lato font-medium text-[24px]',
        'body-2': 'font-lato font-normal text-[20px]',
        'body-3': 'font-montserrat font-semibold text-[18px]',
      }
    },
  },
  plugins: [],
}
