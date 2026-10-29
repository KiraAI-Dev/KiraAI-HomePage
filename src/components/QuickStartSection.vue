<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stepKeys = [
  { n: '01', key: 's1' },
  { n: '02', key: 's2' },
  { n: '03', key: 's3' },
]
</script>

<template>
  <section id="quickstart" class="section">
    <div class="container qs">
      <div class="qs-left reveal">
        <span class="section-tag">Quick Start</span>
        <h2 class="section-title">{{ t('quickstart.title') }}</h2>
        <p class="section-desc">{{ t('quickstart.desc') }}</p>

        <ol class="steps">
          <li v-for="s in stepKeys" :key="s.key" class="step">
            <span class="step-n">{{ s.n }}</span>
            <div>
              <h3>{{ t(`quickstart.steps.${s.key}.title`) }}</h3>
              <p>{{ t(`quickstart.steps.${s.key}.desc`) }}</p>
            </div>
          </li>
        </ol>

        <a :href="t('docs_url') + 'deployment/launcher.html'" target="_blank" rel="noopener" class="btn btn-primary">
          {{ t('quickstart.download') }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16">
            <path d="M12 4v12m0 0-5-5m5 5 5-5M4 20h16" />
          </svg>
        </a>
      </div>

      <div class="launcher card reveal">
        <div class="launcher-header">
          <img src="/favicon.svg" alt="" width="48" height="48" />
          <h3>KiraAI Launcher</h3>
        </div>
        <div class="launcher-option">
          <h4>{{ t('quickstart.installerTitle') }}</h4>
          <p>{{ t('quickstart.installerDesc') }}</p>
        </div>
        <div class="launcher-option">
          <h4>{{ t('quickstart.portableTitle') }}</h4>
          <p>{{ t('quickstart.portableDesc') }}</p>
        </div>
        <a :href="t('docs_url') + 'deployment/launcher.html'" target="_blank" rel="noopener" class="launcher-guide">
          {{ t('quickstart.guide') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.qs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.steps {
  list-style: none;
  margin: 40px 0 36px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.step {
  display: flex;
  gap: 18px;
}

.step-n {
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 800;
  background: var(--surface);
  border: 1px solid var(--border);
  background-image: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.step h3 {
  font-size: 16.5px;
  font-weight: 700;
}

.step p {
  margin-top: 4px;
  font-size: 14.5px;
  color: var(--text-dim);
}

.launcher {
  padding: 32px;
}

.launcher-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.launcher-header h3 {
  font-size: 22px;
  font-weight: 700;
}

.launcher-option {
  padding: 20px 0;
  border-top: 1px solid var(--border);
}

.launcher-option h4 {
  font-size: 16px;
  font-weight: 600;
}

.launcher-option p {
  margin-top: 6px;
  color: var(--text-dim);
  font-size: 14.5px;
}

.launcher-guide {
  display: inline-block;
  margin-top: 12px;
  color: var(--violet);
  font-size: 14px;
}

.launcher-guide:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .qs {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}
</style>
