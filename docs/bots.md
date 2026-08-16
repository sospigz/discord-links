<div class="bot-cards">

  <!-- YAGPDB.xyz -->

  <div class="bot-card">
    <div class="bot-card-header">
      <img src="/bots/yagpdb.png" alt="YAGPDB.xyz" class="bot-icon" />
      <h3>YAGPDB.xyz</h3>
    </div>
    <p class="bot-desc">YAGPDB (Yet Another General Purpose Discord Bot) es un robot de discordia configurable avanzado que proporciona una gran cantidad de funciones útiles para ayudar con la administración de un servidor.</p>
    <div class="bot-links">
      <a href="https://discord.com/oauth2/authorize?client_id=XXXX" target="_blank" class="bot-btn bot-btn-brand">Invitar</a>
      <a href="/guides/configurar-yagpdb" class="bot-btn bot-btn-alt">Configuración</a>
    </div>
  </div>

  <!-- Nekotina -->

  <div class="bot-card">
    <div class="bot-card-header">
      <img src="/bots/nekotina.png" alt="Nekotina" class="bot-icon" />
      <h3>Nekotina</h3>
    </div>
    <p class="bot-desc">Conoce a Nekotina, tu adorable y alegre compañera felina de Discord. Esta peculiar chica gato le da vida a tu servidor con una encantadora combinación de juegos, roles interactivos y comandos centrados en el entretenimiento.</p>
    <div class="bot-links">
      <a href="https://discord.com/oauth2/authorize?client_id=YYYY" target="_blank" class="bot-btn bot-btn-brand">Invitar</a>
      <a href="/guides/configurar-nekotina" class="bot-btn bot-btn-alt">Configuración</a>
    </div>
  </div>

</div>

<style scoped>
.bot-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.bot-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s;
}

.bot-card:hover {
  border-color: var(--vp-c-brand-1);
}

.bot-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.bot-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
}

.bot-card-header h3 {
  margin: 0;
  font-size: 16px;
}

.bot-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 16px;
  line-height: 1.5;
}

.bot-links {
  display: flex;
  gap: 8px;
}

.bot-btn {
  flex: 1;
  text-align: center;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.bot-btn-brand {
  background-color: var(--vp-c-brand-1);
  color: #fff;
}

.bot-btn-brand:hover {
  background-color: var(--vp-c-brand-2);
}

.bot-btn-alt {
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.bot-btn-alt:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
