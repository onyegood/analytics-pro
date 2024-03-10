/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            white: '#ffffff',
            black: '#0d0d0d',
            orange: '#fe4a23',
            yellow: '#ffd027',
            'gray-dark': '#252525',
            'gray-dark2': '#dddfe2',
            gray: '#8492a6',
            'gray-light': '#cccccc',
            'gray-lighter': '#f9f9f9',
            green: '#4ac884',
            'black-light': '#131111',
            gray2: '#515151',
            'gray-light2': '#f2f2f2',
        },
        fontFamily: {
            sans: ['Urbanist', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            fontSize: {
                c8xl: ['5.1rem', '6rem'],
                xxl: ['19rem', '6rem'],
            },
            height: {
                17: '4.5rem',
                22: '5.5rem',
                146: '38rem',
            },
            width: {
                17: '4.5rem',
                '68%': '68.333333%',
                22: '5.5rem',
            },
            margin: {
                17: '4.5rem',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};