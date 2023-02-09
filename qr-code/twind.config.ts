import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        "light-gray": "#d6e2f0",
        "grayish-blue": "#7b879d",
        "dark-blue": "#1f3251",
      },
    },
    fontFamily: {
      "sans": ["Outfit"],
    },
    screens: {
        'desktop': '375px'
    }
  },
} as Options;
