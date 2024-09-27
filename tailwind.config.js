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
      'theme-primary-100': '#a9cce3',
      'theme-primary-300': '#7fb3d5',
      'theme-primary-500': '#3498db',
      'theme-primary-700': '#2874a6',
      'theme-primary-900': '#1b4f72',
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