import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
        darkMode: 'class',
        content: ['./src/**/*.{html,js,svelte,ts}'],
        theme: {
                extend: {
                        colors: {
                                gray: {
                                        50: 'var(--color-gray-50, #F5F5F5)',
                                        100: 'var(--color-gray-100, #EFF6FF)',
                                        200: 'var(--color-gray-200, #e3e3e3)',
                                        300: 'var(--color-gray-300, #cdcdcd)',
                                        400: 'var(--color-gray-400, #9DA6AF)',
                                        500: 'var(--color-gray-500, #9DA6AF)',
                                        600: 'var(--color-gray-600, #676767)',
                                        700: 'var(--color-gray-700, #344256)',
                                        800: 'var(--color-gray-800, #14223D)',
                                        850: 'var(--color-gray-850, #0C1831)',
                                        900: 'var(--color-gray-900, #0C1831)',
                                        950: 'var(--color-gray-950, #0C1831)'
                                },
                                primary: {
                                        DEFAULT: '#66B3FF',
                                        50: '#EFF6FF',
                                        100: '#EFF6FF',
                                        200: '#66B3FF',
                                        300: '#66B3FF',
                                        400: '#66B3FF',
                                        500: '#66B3FF',
                                        600: '#3B82F6',
                                        700: '#2563EB',
                                        800: '#2563EB',
                                        900: '#2563EB'
                                },
                                accent: {
                                        DEFAULT: '#66B3FF',
                                        light: '#EFF6FF',
                                        dark: '#2563EB'
                                }
                        },
                        typography: {
                                DEFAULT: {
                                        css: {
                                                pre: false,
                                                code: false,
                                                'pre code': false,
                                                'code::before': false,
                                                'code::after': false
                                        }
                                }
                        },
                        padding: {
                                'safe-bottom': 'env(safe-area-inset-bottom)'
                        },
                        transitionProperty: {
                                width: 'width'
                        }
                }
        },
        plugins: [typography, containerQueries]
};
