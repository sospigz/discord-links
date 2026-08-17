<script setup>
import { withBase } from "vitepress";

defineProps({
  name: { type: String, required: true },
  icon: { type: String, default: "" },
  desc: { type: String, default: "" },
  links: { type: Array, default: () => [] },
  // links: [{ text: "Ver bot", url: "/bots/yagpdb" }, { text: "Documentación", url: "/bots/yagpdb#configuracion", external: false }]
});
</script>

<template>
  <div class="bot-card">
    <div class="bot-card-header">
      <img v-if="icon" :src="withBase(icon)" :alt="name" class="bot-icon" />
      <h3>{{ name }}</h3>
    </div>
    <p v-if="desc" class="bot-desc">{{ desc }}</p>
    <div class="bot-links">
      <a
        v-for="(link, i) in links"
        :key="link.text"
        :href="link.external ? link.url : withBase(link.url)"
        :target="link.external ? '_blank' : undefined"
        :class="['bot-btn', i === 0 ? 'bot-btn-brand' : 'bot-btn-alt']"
      >{{ link.text }}</a>
    </div>
  </div>
</template>

<style scoped>
/* el resto del CSS queda exactamente igual, no lo repito */
.bot-card { border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 20px; background-color: var(--vp-c-bg-soft); transition: border-color 0.25s; }
.bot-card:hover { border-color: var(--vp-c-brand-1); }
.bot-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.bot-icon { width: 32px; height: 32px; border-radius: 8px; object-fit: cover; }
.bot-card-header h3 { margin: 0; font-size: 16px; }
.bot-desc { font-size: 14px; color: var(--vp-c-text-2); margin: 0 0 16px; line-height: 1.5; }
.bot-links { display: flex; gap: 8px; flex-wrap: wrap; }
.bot-btn { flex: 1; min-width: 90px; text-align: center; padding: 6px 10px; border-radius: 6px; font-size: 13px; font-weight: 600; text-decoration: none; }
.bot-btn-brand { background-color: var(--vp-c-brand-1); color: #fff; }
.bot-btn-brand:hover { background-color: var(--vp-c-brand-2); }
.bot-btn-alt { background-color: var(--vp-c-bg-alt); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); }
.bot-btn-alt:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
</style>