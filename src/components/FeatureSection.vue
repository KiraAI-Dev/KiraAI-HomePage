<script setup>
import { useI18n } from 'vue-i18n'
import { BrainCircuit, MessagesSquare, Monitor, Plug, Puzzle, Speech } from '@lucide/vue'

const { t } = useI18n()

const features = [
  { key: 'webui', icon: Monitor },
  { key: 'llm', icon: BrainCircuit },
  { key: 'message', icon: MessagesSquare },
  { key: 'plugin', icon: Puzzle },
  { key: 'adapter', icon: Plug },
  { key: 'multimodal', icon: Speech },
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
            <component :is="f.icon" :size="23" :stroke-width="1.7" aria-hidden="true" />
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
