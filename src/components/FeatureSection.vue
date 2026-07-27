<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  {
    key: 'webui',
    icon: 'M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm4 14h8m-4-2v2M7 7h4',
  },
  {
    key: 'llm',
    icon: 'M12 3v3m0 12v3M3 12h3m12 0h3M6.3 6.3l2.1 2.1m7.2 7.2 2.1 2.1m0-11.4-2.1 2.1M8.4 15.6l-2.1 2.1',
  },
  {
    key: 'message',
    icon: 'M4 6h16M4 12h10m-10 6h16m-5-9 3 3-3 3',
  },
  {
    key: 'plugin',
    icon: 'M14 7h6m-3-3v6M4 8a4 4 0 0 1 4-4h1v5H4V8zm0 5h5v7H8a4 4 0 0 1-4-4v-3zm9 2h7v1a4 4 0 0 1-4 4h-3v-5z',
  },
  {
    key: 'adapter',
    icon: 'M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm-5 0h2m14 0h2M12 3v2m0 14v2',
  },
  {
    key: 'multimodal',
    icon: 'M9 18V6l10-2v12M9 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm10-2a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z',
  },
]
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <div class="reveal">
        <span class="section-tag">Features</span>
        <h2 class="section-title">{{ t('features.title') }}</h2>
        <p class="section-desc">{{ t('features.desc') }}</p>
      </div>

      <div class="grid">
        <article v-for="(f, i) in features" :key="f.key" class="card feature reveal" :style="{ transitionDelay: (i % 3) * 0.08 + 's' }">
          <div class="icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path :d="f.icon" />
            </svg>
          </div>
          <h3>{{ t(`features.items.${f.key}.title`) }}</h3>
          <p>{{ t(`features.items.${f.key}.desc`) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature {
  padding: 30px 28px;
}

.icon-wrap {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.16), rgba(56, 189, 248, 0.14));
  border: 1px solid rgba(167, 139, 250, 0.28);
  color: var(--violet);
  margin-bottom: 20px;
}

.icon-wrap svg {
  width: 23px;
  height: 23px;
}

.feature h3 {
  font-size: 17.5px;
  font-weight: 700;
  margin-bottom: 8px;
}

.feature p {
  font-size: 14.5px;
  color: var(--text-dim);
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
