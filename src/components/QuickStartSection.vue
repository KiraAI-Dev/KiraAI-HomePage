<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { LINKS } from '../links.js'

const { t } = useI18n()

const stepKeys = [
  { n: '01', key: 's1' },
  { n: '02', key: 's2' },
  { n: '03', key: 's3' },
]

const os = ref('windows')
const commands = computed(() => ({
  windows: [t('quickstart.commentExtract'), 'cd KiraAI', '', t('quickstart.commentRun'), '.\\scripts\\run.bat'],
  unix: [t('quickstart.commentExtract'), 'cd KiraAI', '', t('quickstart.commentRun'), 'chmod +x scripts/run.sh', './scripts/run.sh'],
}))

const copied = ref(false)
async function copy() {
  const text = commands.value[os.value].filter((l) => l && !l.startsWith('#')).join('\n')
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {}
}
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

        <a :href="LINKS.releases" target="_blank" rel="noopener" class="btn btn-primary">
          {{ t('quickstart.download') }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16">
            <path d="M12 4v12m0 0-5-5m5 5 5-5M4 20h16" />
          </svg>
        </a>
      </div>

      <div class="terminal card reveal">
        <div class="term-bar">
          <span class="term-dots"><i></i><i></i><i></i></span>
          <div class="term-tabs">
            <button :class="{ active: os === 'windows' }" @click="os = 'windows'">Windows</button>
            <button :class="{ active: os === 'unix' }" @click="os = 'unix'">Linux / macOS</button>
          </div>
          <button class="copy-btn" @click="copy">{{ copied ? t('quickstart.copied') : t('quickstart.copy') }}</button>
        </div>
        <pre class="term-body"><code><span v-for="(line, i) in commands[os]" :key="os + i" :class="{ comment: line.startsWith('#') }">{{ line || ' ' }}
</span></code></pre>
        <div class="term-hint">{{ t('quickstart.hint') }}</div>
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

/* ---------- terminal ---------- */
.terminal {
  overflow: hidden;
  background: #0b0b16;
}

.terminal:hover {
  transform: none;
}

.term-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}

.term-dots {
  display: flex;
  gap: 7px;
}

.term-dots i {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #3a3a4c;
}

.term-dots i:nth-child(1) {
  background: #ff5f57;
}

.term-dots i:nth-child(2) {
  background: #febc2e;
}

.term-dots i:nth-child(3) {
  background: #28c840;
}

.term-tabs {
  display: flex;
  gap: 6px;
  margin-inline: auto;
}

.term-tabs button {
  padding: 5px 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: none;
  color: var(--text-faint);
  font-size: 12.5px;
  font-weight: 600;
  font-family: var(--font);
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
}

.term-tabs button.active {
  background: var(--surface-hover);
  border-color: var(--border);
  color: var(--text);
}

.copy-btn {
  padding: 5px 13px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: none;
  color: var(--text-dim);
  font-size: 12.5px;
  font-family: var(--font);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.copy-btn:hover {
  color: var(--text);
  border-color: rgba(167, 139, 250, 0.5);
}

.term-body {
  padding: 22px 22px 12px;
  font-family: var(--mono);
  font-size: 13.5px;
  line-height: 1.9;
  color: #c9d1e3;
  overflow-x: auto;
}

.term-body .comment {
  color: var(--text-faint);
}

.term-hint {
  padding: 0 22px 20px;
  font-size: 12.5px;
  color: var(--text-faint);
  font-family: var(--mono);
}

@media (max-width: 960px) {
  .qs {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}
</style>
