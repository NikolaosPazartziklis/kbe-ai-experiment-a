<script setup lang="ts">
import AppIcon from './AppIcon.vue'

defineProps<{ activeItem: string }>()
defineEmits<{ navigate: [item: string] }>()

const navigation = [
  { label: 'Übersicht', icon: 'grid' },
  { label: 'Mein Studium', icon: 'book' },
  { label: 'Termine', icon: 'calendar' },
  { label: 'Mein Profil', icon: 'user' },
]
</script>

<template>
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-mark">C</div>
      <span>Campus<span>Flow</span></span>
    </div>
    <div class="sidebar-label">MENÜ</div>
    <nav class="nav-list" aria-label="Hauptnavigation">
      <button
        v-for="item in navigation"
        :key="item.label"
        class="nav-item"
        :class="{ active: activeItem === item.label }"
        type="button"
        @click="$emit('navigate', item.label)"
      >
        <AppIcon :name="item.icon" :size="19" />
        <span>{{ item.label }}</span>
        <span v-if="item.label === 'Mein Profil'" class="active-dot" />
      </button>
    </nav>
    <div class="sidebar-bottom">
      <div class="help-card">
        <div class="help-icon">?</div>
        <div><strong>Brauchst du Hilfe?</strong><span>Zum Help Center</span></div>
        <AppIcon name="chevron" :size="16" />
      </div>
      <button class="nav-item logout" type="button"><AppIcon name="logout" :size="19" /><span>Abmelden</span></button>
    </div>
  </aside>
</template>
