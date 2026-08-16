import DefaultTheme from "vitepress/theme";
import BotCard from "./components/BotCard.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("BotCard", BotCard);
  },
};
