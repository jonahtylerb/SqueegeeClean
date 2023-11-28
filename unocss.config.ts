import {
  defineConfig,
  presetTagify,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTagify(),
    presetDaisy({
      themes: [
        {
          theme: {
            primary: "#14445c",
            secondary: "#ffde59",
            accent: "#9bd0e3",
            neutral: "#e4e4e7",
            "base-100": "#fff",

            "--rounded-box": "0.5rem",
            "--rounded-btn": "0.25rem",
            "--rounded-badge": "1rem",
            "--animation-btn": "0.2s",
            "--animation-input": "0.2s",
            "--btn-focus-scale": "0.98",
            "--border-btn": "2px",
            "--tab-border": "2px",
            "--tab-radius": "0.25rem",
          },
        },
      ],
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  rules: [
    [
      /^family-([a-zA-Z]*)$/,
      ([, c]) => {
        return {
          "font-family": `${c}, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        };
      },
    ],
  ],
  shortcuts: [
    {
      "flex-center": "items-center justify-center",
    },
    {
      "absolute-center": "-translate-1/2 left-1/2 top-1/2",
    },
    [/^size-(.*)$/, ([, s]) => `h-${s} w-${s}`],
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
});
