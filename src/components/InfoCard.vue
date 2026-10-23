<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import type { ProfileField } from '../types/profile'

defineProps<{
  title: string
  subtitle: string
  fields: ProfileField[]
}>()
</script>

<template>
  <section class="card info-card">
    <div class="section-heading">
      <div><h2>{{ title }}</h2><p>{{ subtitle }}</p></div>
    </div>
    <div class="field-grid">
      <div v-for="field in fields" :key="field.label" class="display-field">
        <div class="field-icon"><AppIcon :name="field.icon" :size="18" /></div>
        <div><span>{{ field.label }}</span><strong>{{ field.value }}</strong></div>
      </div>
    </div>
  </section>
</template>
