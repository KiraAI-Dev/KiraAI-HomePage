<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const adapters = [
  { key: 'qq', name: 'QQ', color: '#12b7f5' },
  { key: 'telegram', name: 'Telegram', color: '#2aabee' },
  { key: 'wechat', name: 'WeChat', color: '#2dc100' },
  { key: 'discord', name: 'Discord', color: '#5865f2' },
  { key: 'bilibili', name: 'Bilibili', color: '#fb7299' },
  { key: 'more', name: 'More…', color: '#60a5fa', soon: true },
]

const abilityKeys = ['llm', 'tts', 'stt', 'image', 'selfie']
</script>

<template>
  <section id="adapters" class="section alt">
    <div class="container">
      <div class="reveal">
        <span class="section-tag">Adapters</span>
        <h2 class="section-title">{{ t('adapters.title') }}</h2>
        <p class="section-desc">{{ t('adapters.desc') }}</p>
      </div>

      <div class="adapter-grid">
        <article
          v-for="(a, i) in adapters"
          :key="a.key"
          class="card adapter reveal"
          :style="{ transitionDelay: (i % 3) * 0.08 + 's' }"
        >
          <span class="adapter-dot" :style="{ background: a.color, boxShadow: `0 0 14px ${a.color}88` }"></span>
          <div>
            <h3>{{ a.name }} <em v-if="a.soon">{{ t('adapters.soon') }}</em></h3>
            <p>{{ t(`adapters.items.${a.key}`) }}</p>
          </div>
        </article>
      </div>

      <div class="abilities reveal">
        <span class="abilities-label">{{ t('adapters.abilitiesLabel') }}</span>
        <ul>
          <li v-for="k in abilityKeys" :key="k">{{ t(`adapters.abilities.${k}`) }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.alt {
  background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.05) 30%, transparent);
}

.adapter-grid {
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.adapter {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
}

.adapter-dot {
  flex: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 7px;
}

.adapter h3 {
  font-size: 16.5px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.adapter h3 em {
  font-style: normal;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 2px 9px;
  border-radius: 999px;
  color: var(--blue);
  border: 1px solid rgba(96, 165, 250, 0.4);
}

.adapter p {
  font-size: 13.5px;
  color: var(--text-dim);
  margin-top: 3px;
}

.abilities {
  margin-top: 44px;
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  padding: 20px 26px;
  border-radius: var(--radius);
  border: 1px dashed rgba(255, 255, 255, 0.14);
}

.abilities-label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-faint);
}

.abilities ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
}

.abilities li {
  padding: 6px 15px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  font-size: 13.5px;
  color: var(--text-dim);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.abilities li:hover {
  color: var(--text);
  border-color: rgba(56, 189, 248, 0.45);
}

@media (max-width: 960px) {
  .adapter-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .adapter-grid {
    grid-template-columns: 1fr;
  }
}
</style>
