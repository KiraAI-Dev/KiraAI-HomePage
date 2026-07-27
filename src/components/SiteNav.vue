<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { LINKS } from '../links.js'

const scrolled = ref(false)
const menuOpen = ref(false)

const navItems = [
  { label: '特性', href: '#features' },
  { label: '平台适配', href: '#adapters' },
  { label: '快速开始', href: '#quickstart' },
  { label: '社区', href: '#community' },
  { label: '文档', href: LINKS.docs, external: true },
]

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#" class="brand" aria-label="KiraAI 首页">
        <img src="/favicon.svg" alt="" class="brand-logo" />
        <span class="brand-name">Kira<span class="brand-accent">AI</span></span>
      </a>

      <nav class="links" :class="{ open: menuOpen }">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          rel="noopener"
          class="link"
          @click="menuOpen = false"
        >
          {{ item.label }}
          <svg v-if="item.external" class="ext" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </a>
        <a :href="LINKS.github" target="_blank" rel="noopener" class="btn btn-ghost gh-btn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub
        </a>
      </nav>

      <button class="menu-btn" :aria-expanded="menuOpen" aria-label="打开菜单" @click="menuOpen = !menuOpen">
        <span :class="{ x1: menuOpen }"></span>
        <span :class="{ x2: menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  height: var(--nav-h);
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease,
    backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: rgba(8, 8, 15, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--border);
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-logo {
  width: 30px;
  height: 30px;
}

.brand-name {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.brand-accent {
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 14.5px;
  font-weight: 500;
  color: var(--text-dim);
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--text);
}

.ext {
  width: 13px;
  height: 13px;
  opacity: 0.6;
}

.gh-btn {
  padding: 8px 18px;
  font-size: 14px;
}

.menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-btn span {
  display: block;
  width: 22px;
  height: 2px;
  margin-inline: auto;
  border-radius: 2px;
  background: var(--text);
  transition: transform 0.25s ease;
}

.menu-btn .x1 {
  transform: translateY(4px) rotate(45deg);
}

.menu-btn .x2 {
  transform: translateY(-4px) rotate(-45deg);
}

@media (max-width: 820px) {
  .menu-btn {
    display: flex;
  }

  .links {
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px 24px 20px;
    background: rgba(8, 8, 15, 0.96);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    display: none;
  }

  .links.open {
    display: flex;
  }

  .link {
    padding: 10px 4px;
    font-size: 16px;
  }

  .gh-btn {
    margin-top: 10px;
    justify-content: center;
  }
}
</style>
