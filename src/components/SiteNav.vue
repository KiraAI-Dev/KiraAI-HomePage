<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { LINKS } from '../links.js'
import { SUPPORTED_LOCALES, setLocale } from '../i18n/index.js'

const { t, locale } = useI18n()

const scrolled = ref(false)
const menuOpen = ref(false)
const langOpen = ref(false)

const navItems = computed(() => [
  { label: t('nav.features'), href: '#features' },
  { label: t('nav.adapters'), href: '#adapters' },
  { label: t('nav.quickstart'), href: '#quickstart' },
  { label: t('nav.community'), href: '#community' },
  { label: t('nav.docs'), href: LINKS.docs, external: true },
])

const currentLocale = computed(
  () => SUPPORTED_LOCALES.find((l) => l.code === locale.value) ?? SUPPORTED_LOCALES[0]
)

function pickLocale(code) {
  setLocale(code)
  langOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function onDocClick(e) {
  if (!e.target.closest('.lang')) langOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onDocClick)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onDocClick)
})
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#" class="brand" aria-label="KiraAI">
        <img src="/favicon.svg" alt="" class="brand-logo" />
        <span class="brand-name">Kira<span class="brand-accent">AI</span></span>
      </a>

      <nav class="links" :class="{ open: menuOpen }">
        <a
          v-for="item in navItems"
          :key="item.href"
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

        <div class="lang">
          <button class="lang-btn" :aria-expanded="langOpen" aria-label="Language" @click="langOpen = !langOpen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
            </svg>
            {{ currentLocale.name }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="12" height="12" :style="{ transform: langOpen ? 'rotate(180deg)' : '' }">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <ul v-show="langOpen" class="lang-menu">
            <li v-for="l in SUPPORTED_LOCALES" :key="l.code">
              <button :class="{ active: l.code === locale }" @click="pickLocale(l.code)">
                {{ l.name }}
                <svg v-if="l.code === locale" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" width="13" height="13">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <a :href="LINKS.github" target="_blank" rel="noopener" class="btn btn-ghost gh-btn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub
        </a>
      </nav>

      <button class="menu-btn" :aria-expanded="menuOpen" aria-label="Menu" @click="menuOpen = !menuOpen">
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
  gap: 26px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 14.5px;
  font-weight: 500;
  color: var(--text-dim);
  transition: color 0.2s ease;
  white-space: nowrap;
}

.link:hover {
  color: var(--text);
}

.ext {
  width: 13px;
  height: 13px;
  opacity: 0.6;
}

/* ---------- language switcher ---------- */
.lang {
  position: relative;
}

.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-dim);
  font-size: 13.5px;
  font-weight: 600;
  font-family: var(--font);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;
}

.lang-btn:hover {
  color: var(--text);
  border-color: rgba(167, 139, 250, 0.45);
}

.lang-btn svg {
  transition: transform 0.2s ease;
}

.lang-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 150px;
  list-style: none;
  padding: 6px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(13, 13, 24, 0.97);
  backdrop-filter: blur(16px);
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.5);
}

.lang-menu button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 13px;
  border: none;
  border-radius: 9px;
  background: none;
  color: var(--text-dim);
  font-size: 14px;
  font-weight: 500;
  font-family: var(--font);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.lang-menu button:hover {
  background: var(--surface-hover);
  color: var(--text);
}

.lang-menu button.active {
  color: var(--violet);
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

@media (max-width: 960px) {
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

  .lang {
    margin-top: 8px;
  }

  .lang-menu {
    position: static;
    margin-top: 8px;
  }

  .gh-btn {
    margin-top: 10px;
    justify-content: center;
  }
}
</style>
