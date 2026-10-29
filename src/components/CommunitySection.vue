<script setup>
import { computed } from 'vue'
import { I18nT, useI18n } from 'vue-i18n'
import { ArrowUpRight, Star } from '@lucide/vue'
import { LINKS } from '../links.js'

const { t } = useI18n()

const channels = computed(() => [
  { key: 'github', href: LINKS.github },
  { key: 'docs', href: t('docs_url') },
  { key: 'chat', href: LINKS.github + '#-community' },
])
</script>

<template>
  <section id="community" class="section">
    <div class="container">
      <div class="cta-panel reveal">
        <div class="panel-glow"></div>
        <h2 class="section-title">{{ t('community.title') }}</h2>
        <p class="section-desc center">{{ t('community.desc') }}</p>

        <div class="channels">
          <a
            v-for="c in channels"
            :key="c.key"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="card channel"
          >
            <h3>{{ t(`community.channels.${c.key}.title`) }}</h3>
            <I18nT :keypath="`community.channels.${c.key}.desc`" tag="p" scope="global">
              <template #star><Star class="star" :size="14" aria-hidden="true" /></template>
            </I18nT>
            <span class="channel-action">
              {{ t(`community.channels.${c.key}.action`) }}
              <ArrowUpRight :size="14" :stroke-width="2.2" aria-hidden="true" />
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

.star {
  vertical-align: -0.15em;
  color: var(--violet);
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
