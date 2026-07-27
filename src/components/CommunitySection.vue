<script setup>
import { LINKS } from '../links.js'

const channels = [
  {
    title: 'GitHub',
    desc: '阅读源码、提交 Issue 与 PR，参与项目共建。欢迎 Star ⭐',
    href: LINKS.github,
    action: 'xxynet/KiraAI',
  },
  {
    title: '官方文档',
    desc: '完整的部署指南、配置说明与插件开发文档。',
    href: LINKS.docs,
    action: 'docs.kira-ai.top',
  },
  {
    title: 'QQ 群 & Discord',
    desc: '加入社区，与开发者和用户交流讨论、获取帮助。',
    href: LINKS.github + '#-community',
    action: '加入社区',
  },
]
</script>

<template>
  <section id="community" class="section">
    <div class="container">
      <div class="cta-panel reveal">
        <div class="panel-glow"></div>
        <h2 class="section-title">加入 KiraAI 社区</h2>
        <p class="section-desc center">
          KiraAI 正处于活跃开发中，功能快速迭代。无论你是使用者还是开发者，
          都欢迎加入我们，一起见证数字生命的成长。
        </p>

        <div class="channels">
          <a
            v-for="c in channels"
            :key="c.title"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="card channel"
          >
            <h3>{{ c.title }}</h3>
            <p>{{ c.desc }}</p>
            <span class="channel-action">
              {{ c.action }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="14" height="14">
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-panel {
  position: relative;
  text-align: center;
  padding: 72px 40px;
  border-radius: 28px;
  border: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(129, 140, 248, 0.09), rgba(13, 13, 24, 0.6));
  overflow: hidden;
}

.panel-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  top: -260px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: rgba(129, 140, 248, 0.28);
  filter: blur(100px);
  pointer-events: none;
}

.center {
  margin-inline: auto;
}

.channels {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  text-align: left;
}

.channel {
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  background: rgba(8, 8, 15, 0.55);
}

.channel h3 {
  font-size: 16.5px;
  font-weight: 700;
}

.channel p {
  margin-top: 7px;
  font-size: 13.5px;
  color: var(--text-dim);
  flex: 1;
}

.channel-action {
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--sky);
}

@media (max-width: 820px) {
  .channels {
    grid-template-columns: 1fr;
  }

  .cta-panel {
    padding: 56px 24px;
  }
}
</style>
