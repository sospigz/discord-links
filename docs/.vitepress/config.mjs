import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discord Links",
  description: "Documentación y guías para desarrollo en Discord",
  lang: "es",
  base: "/discord-links/",
  head: [["link", { rel: "icon", href: "/discord-links/logo.png" }]],
  titleTemplate: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Guías de bots", link: "/bots" },
      { text: "Páginas útiles", link: "/pages" },
      { text: "Utilidades", link: "/utilities" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/sospigz/discord-links" },
    ],

    search: {
      provider: "local",
    },
    
    sidebar: {
      // "/bots": [
      //   {
      //     text: "Guías de bots",
      //     items: [
      //       { text: "Introducción", link: "/bots" },
      //       { text: "YAGPDB", link: "/bots/yagpdb" },
      //       { text: "Nekotina", link: "/bots/nekotina" },
      //     ],
      //   },
      // ],
      // "/pages": [
      //   {
      //     text: "Páginas útiles",
      //     items: [
      //       { text: "Introducción", link: "/pages" },
      //       { text: "Discord", link: "/pages/discord" },
      //       { text: "GitHub", link: "/pages/github" },
      //       { text: "VitePress", link: "/pages/vitepress" },
      //     ],
      //   },
      // ],
    }
  },
  cleanUrls: true,
  gradedContainers: false,
});
