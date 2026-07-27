<script setup>
import { useI18n } from 'vue-i18n'
import { LINKS } from '../links.js'

const { t } = useI18n()

const orbitNodes = [
  { label: 'QQ', angle: 0 },
  { label: 'Telegram', angle: 60 },
  { label: 'Discord', angle: 120 },
  { label: 'WeChat', angle: 180 },
  { label: 'Bilibili', angle: 240 },
  { label: 'Plugins', angle: 300 },
]
</script>

<template>
  <section class="hero">
    <div class="glow glow-a"></div>
    <div class="glow glow-b"></div>
    <div class="grid-bg"></div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <a :href="LINKS.github" target="_blank" rel="noopener" class="badge">
          <span class="dot"></span>
          {{ t('hero.badge') }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" width="13" height="13">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>

        <h1 class="title">
          {{ t('hero.title1') }}
          <span class="title-grad">{{ t('hero.title2') }}</span>
        </h1>

        <p class="subtitle">{{ t('hero.subtitle') }}</p>

        <div class="cta">
          <a href="#quickstart" class="btn btn-primary">
            {{ t('hero.ctaStart') }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" width="16" height="16">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a :href="t('docs_url')" target="_blank" rel="noopener" class="btn btn-ghost">{{ t('hero.ctaDocs') }}</a>
        </div>

        <div class="meta">
          <div class="meta-item"><strong>Python 3.10+</strong><span>{{ t('hero.metaBackend') }}</span></div>
          <div class="meta-sep"></div>
          <div class="meta-item"><strong>Vue 3 + Vite</strong><span>{{ t('hero.metaWebui') }}</span></div>
          <div class="meta-sep"></div>
          <div class="meta-item"><strong>{{ t('hero.metaOsValue') }}</strong><span>{{ t('hero.metaOs') }}</span></div>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="orbit-ring ring-outer"></div>
        <div class="orbit-ring ring-inner"></div>
        <div class="core">
          <img src="/favicon.svg" alt="" />
          <div class="core-pulse"></div>
        </div>
        <div class="orbit-rotor">
          <div
            v-for="node in orbitNodes"
            :key="node.label"
            class="orbit-node"
            :style="{ '--angle': node.angle + 'deg' }"
          >
            <span class="node-chip">{{ node.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: calc(var(--nav-h) + 88px) 0 110px;
  overflow: hidden;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  pointer-events: none;
}

.glow-a {
  width: 560px;
  height: 560px;
  top: -180px;
  left: -120px;
  background: rgba(129, 140, 248, 0.22);
}

.glow-b {
  width: 520px;
  height: 520px;
  bottom: -220px;
  right: -100px;
  background: rgba(56, 189, 248, 0.16);
}

.grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 35%, #000 20%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 35%, #000 20%, transparent 75%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 48px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 13px;
  color: var(--text-dim);
  transition: border-color 0.2s ease, color 0.2s ease;
}

.badge:hover {
  border-color: rgba(167, 139, 250, 0.45);
  color: var(--text);
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.8);
}

.title {
  margin-top: 26px;
  font-size: clamp(38px, 5.6vw, 62px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.14;
}

.title-grad {
  display: block;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  margin-top: 22px;
  max-width: 540px;
  font-size: 17.5px;
  color: var(--text-dim);
}

.cta {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.meta {
  margin-top: 52px;
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  flex-direction: column;
}

.meta-item strong {
  font-size: 15px;
  font-weight: 700;
}

.meta-item span {
  font-size: 12.5px;
  color: var(--text-faint);
}

.meta-sep {
  width: 1px;
  height: 34px;
  background: var(--border);
}

/* ---------- orbital visual ---------- */
.hero-visual {
  position: relative;
  aspect-ratio: 1;
  max-width: 460px;
  width: 100%;
  margin-inline: auto;
}

.orbit-ring {
  position: absolute;
  inset: 0;
  border: 1px dashed rgba(255, 255, 255, 0.14);
  border-radius: 50%;
}

.ring-inner {
  inset: 18%;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.07);
}

.core {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.core img {
  width: 96px;
  height: 96px;
  border-radius: 26px;
  box-shadow: 0 0 60px rgba(129, 140, 248, 0.55);
  position: relative;
  z-index: 2;
}

.core-pulse {
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 36px;
  border: 1px solid rgba(167, 139, 250, 0.5);
  animation: pulse 2.8s ease-out infinite;
}

@keyframes pulse {
  from {
    transform: scale(0.85);
    opacity: 0.9;
  }
  to {
    transform: scale(1.7);
    opacity: 0;
  }
}

.orbit-rotor {
  position: absolute;
  inset: 0;
  animation: spin 46s linear infinite;
}

.orbit-node {
  position: absolute;
  inset: 0;
  transform: rotate(var(--angle));
}

.node-chip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%) rotate(calc(-1 * var(--angle)));
  padding: 7px 15px;
  border-radius: 999px;
  background: rgba(13, 13, 24, 0.92);
  border: 1px solid var(--border);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dim);
  white-space: nowrap;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.4);
  animation: counterspin 46s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes counterspin {
  to {
    transform: translate(-50%, -50%) rotate(calc(-1 * var(--angle) - 360deg));
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit-rotor,
  .node-chip,
  .core-pulse {
    animation: none;
  }
}

@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    max-width: 360px;
    margin-top: 26px;
  }
}
</style>
