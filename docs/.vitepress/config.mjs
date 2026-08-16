import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discord Links",
  description: "Documentación y guías para desarrollo en Discord",
  lang: "es",
  base: "/discord-links/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Guías de bots", link: "/bots" },
      { text: "Páginas útiles", link: "/pages" },
      { text: "Utilidades", link: "/utilities" },
    ],
    sidebar: {
      "/notas": [
        {
          text: "Mis notas",
          items: [{ text: "Sección uno", link: "/notas#seccion-uno" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/sospigz/discord-links" },
    ],

    search: {
      provider: "local",
    },
  },
  cleanUrls: true,
});
