<script setup>
import { ref } from 'vue'
import { LINKS } from '../links.js'

const steps = [
  {
    n: '01',
    title: '下载源码',
    desc: '前往 GitHub Releases 页面，下载最新版本的源代码并解压。',
  },
  {
    n: '02',
    title: '一键启动',
    desc: 'Windows 运行 scripts/run.bat，Linux / macOS 运行 scripts/run.sh，脚本会自动完成环境准备。',
  },
  {
    n: '03',
    title: 'Web 界面配置',
    desc: '打开 Web 管理界面，配置模型提供商、平台适配器与角色设定，你的数字生命即刻上线。',
  },
]

const os = ref('windows')
const commands = {
  windows: ['# 解压源码后，进入项目目录', 'cd KiraAI', '', '# 一键启动', '.\\scripts\\run.bat'],
  unix: ['# 解压源码后，进入项目目录', 'cd KiraAI', '', '# 一键启动', 'chmod +x scripts/run.sh', './scripts/run.sh'],
}

const copied = ref(false)
async function copy() {
  const text = commands[os.value].filter((l) => l && !l.startsWith('#')).join('\n')
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
        <h2 class="section-title">三步，唤醒你的数字生命</h2>
        <p class="section-desc">
          无需复杂部署，环境要求仅为 Python 3.10+ 与 Node.js 18+。
        </p>

        <ol class="steps">
          <li v-for="s in steps" :key="s.n" class="step">
            <span class="step-n">{{ s.n }}</span>
            <div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.desc }}</p>
            </div>
          </li>
        </ol>

        <a :href="LINKS.releases" target="_blank" rel="noopener" class="btn btn-primary">
          获取最新版本
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
          <button class="copy-btn" @click="copy">{{ copied ? '已复制 ✓' : '复制' }}</button>
        </div>
        <pre class="term-body"><code><span v-for="(line, i) in commands[os]" :key="os + i" :class="{ comment: line.startsWith('#') }">{{ line || ' ' }}
</span></code></pre>
        <div class="term-hint">启动后访问 Web 界面完成配置 →</div>
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
