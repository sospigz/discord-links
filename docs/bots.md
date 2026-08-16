# Bots de Discord

En esta sección podrás observar a todos los bots esenciales para tu servidor de Discord.

<script setup>
import bots from '.vitepress/theme/data/bots.js'
</script>

<div class="bot-cards">
  <BotCard
    v-for="bot in bots"
    :key="bot.name"
    v-bind="bot"
  />
</div>