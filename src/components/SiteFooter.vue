<script setup>
import { LINKS } from '../links.js'

const year = new Date().getFullYear()

const groups = [
  {
    title: '产品',
    links: [
      { label: '特性', href: '#features' },
      { label: '平台适配', href: '#adapters' },
      { label: '快速开始', href: '#quickstart' },
    ],
  },
  {
    title: '资源',
    links: [
      { label: '官方文档', href: LINKS.docs, external: true },
      { label: 'Releases', href: LINKS.releases, external: true },
      { label: 'Issues', href: LINKS.issues, external: true },
    ],
  },
  {
    title: '开源',
    links: [
      { label: 'GitHub', href: LINKS.github, external: true },
      { label: 'AGPL-3.0 许可证', href: LINKS.license, external: true },
    ],
  },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a href="#" class="brand">
          <img src="/favicon.svg" alt="" />
          <span>Kira<em>AI</em></span>
        </a>
        <p>模块化、多平台的 AI 数字生命项目。</p>
      </div>

      <div class="footer-links">
        <div v-for="g in groups" :key="g.title" class="group">
          <h4>{{ g.title }}</h4>
          <a
            v-for="l in g.links"
            :key="l.label"
            :href="l.href"
            :target="l.external ? '_blank' : undefined"
            rel="noopener"
          >
            {{ l.label }}
          </a>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© {{ year }} KiraAI. 基于 AGPL-3.0 许可证开源。</span>
      <span class="made">Made with <i>♥</i> for digital life</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg-soft);
  padding: 60px 0 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
  padding-bottom: 48px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 19px;
  font-weight: 800;
}

.brand img {
  width: 28px;
  height: 28px;
}

.brand em {
  font-style: normal;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer-brand p {
  margin-top: 12px;
  font-size: 14px;
  color: var(--text-faint);
  max-width: 260px;
}

.footer-links {
  display: flex;
  gap: 72px;
  flex-wrap: wrap;
}

.group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.group h4 {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-faint);
  text-transform: uppercase;
  margin-bottom: 4px;
}

.group a {
  font-size: 14px;
  color: var(--text-dim);
  transition: color 0.2s ease;
}

.group a:hover {
  color: var(--text);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding-block: 22px;
  border-top: 1px solid var(--border);
  font-size: 13px;
  color: var(--text-faint);
}

.made i {
  font-style: normal;
  color: var(--pink);
}
</style>
