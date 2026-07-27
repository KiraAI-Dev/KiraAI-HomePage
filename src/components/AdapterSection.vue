<script setup>
const adapters = [
  { name: 'QQ', desc: '国内最活跃的社交平台', color: '#12b7f5' },
  { name: 'Telegram', desc: '全球即时通讯', color: '#2aabee' },
  { name: 'WeChat', desc: '微信生态接入', color: '#2dc100' },
  { name: 'Discord', desc: '社区与游戏语音', color: '#5865f2' },
  { name: 'Bilibili', desc: '直播与弹幕互动', color: '#fb7299' },
  { name: 'More…', desc: '更多适配器持续开发中', color: '#a78bfa', soon: true },
]

const abilities = ['LLM 对话', 'TTS 语音合成', 'STT 语音识别', '图像生成', '视频生成', '角色扮演']
</script>

<template>
  <section id="adapters" class="section alt">
    <div class="container">
      <div class="reveal">
        <span class="section-tag">Adapters</span>
        <h2 class="section-title">一个数字生命，活跃在所有平台</h2>
        <p class="section-desc">
          适配器（Adapter）将数字生命中心与各大聊天平台连接起来。挂载多个适配器，
          你的 AI 伙伴便可以同时出现在不同平台，与不同的人对话。
        </p>
      </div>

      <div class="adapter-grid">
        <article
          v-for="(a, i) in adapters"
          :key="a.name"
          class="card adapter reveal"
          :style="{ transitionDelay: (i % 3) * 0.08 + 's' }"
        >
          <span class="adapter-dot" :style="{ background: a.color, boxShadow: `0 0 14px ${a.color}88` }"></span>
          <div>
            <h3>{{ a.name }} <em v-if="a.soon">Coming</em></h3>
            <p>{{ a.desc }}</p>
          </div>
        </article>
      </div>

      <div class="abilities reveal">
        <span class="abilities-label">AI 能力</span>
        <ul>
          <li v-for="ab in abilities" :key="ab">{{ ab }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.alt {
  background: linear-gradient(180deg, transparent, rgba(129, 140, 248, 0.05) 30%, transparent);
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
  color: var(--violet);
  border: 1px solid rgba(167, 139, 250, 0.4);
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
