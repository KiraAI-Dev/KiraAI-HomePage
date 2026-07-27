<script setup>
import { onMounted, onUnmounted } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import AdapterSection from './components/AdapterSection.vue'
import QuickStartSection from './components/QuickStartSection.vue'
import CommunitySection from './components/CommunitySection.vue'
import SiteFooter from './components/SiteFooter.vue'

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <FeatureSection />
    <AdapterSection />
    <QuickStartSection />
    <CommunitySection />
  </main>
  <SiteFooter />
</template>
