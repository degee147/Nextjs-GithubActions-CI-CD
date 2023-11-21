import localFont from "next/font/local";

const caros = localFont({
  variable: "--font-caros",
  adjustFontFallback: "Arial",
  display: "swap",
  src: [
    {
      path: "./caros/Caros-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./caros/Caros-Thin-Italic.woff",
      weight: "100",
      style: "italic",
    },
    {
      path: "./caros/Caros-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./caros/Caros-ExtraLight-Italic.woff",
      weight: "200",
      style: "italic",
    },
    {
      path: "./caros/Caros-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./caros/Caros-Light-Italic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "./caros/Caros.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./caros/Caros-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./caros/Caros-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./caros/Caros-Medium-Italic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "./caros/Caros-Bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./caros/Caros-Bold-Italic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "./caros/Caros-ExtraBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./caros/Caros-ExtraBold-Italic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "./caros/Caros-Black.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./caros/Caros-Black-Italic.woff",
      weight: "800",
      style: "italic",
    },
    {
      path: "./caros/Caros-Heavy.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./caros/Caros-Heavy-Italic.woff",
      weight: "900",
      style: "italic",
    },
  ]
});

const grotesk = localFont({
  variable: "--font-tomato-grotesk",
  adjustFontFallback: "Arial",
  display: "swap",
  src: [
    {
      path: "./grotesk/TomatoGrotesk-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./grotesk/TomatoGrotesk-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./grotesk/TomatoGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./grotesk/TomatoGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./grotesk/TomatoGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./grotesk/TomatoGrotesk-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./grotesk/TomatoGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./grotesk/TomatoGrotesk-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./grotesk/TomatoGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
  ]
})

const fonts = {caros, grotesk};
export default fonts;
