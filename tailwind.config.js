export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js",
    "./error.vue",
  ],
  mode:'jit',
  theme: {
    colors: {
      'theme-primary-25': '#F5FBFF',
      'theme-primary-50': '#F0F9FF',
      'theme-primary-100': '#E0F2FE',
      'theme-primary-200': '#B9E6FE',
      'theme-primary-300': '#7CD4FD',
      'theme-primary-400': '#36BFFA',
      'theme-primary-500': '#0BA5EC',
      'theme-primary-600': '#0086C9',
      'theme-primary-700': '#026AA2',
      'theme-primary-800': '#065986',
      'theme-primary-900': '#0B4A6F',
      'theme-primary-950': '#062C41',
    },
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('flowbite/plugin')
  ],

}