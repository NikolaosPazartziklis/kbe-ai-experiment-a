<script setup lang="ts">
import AppIcon from './AppIcon.vue'

defineProps<{
  firstName: string
  lastName: string
  course: string
  semester: number
  status: string
}>()

defineEmits<{ edit: [] }>()
</script>

<template>
  <section class="profile-hero card">
    <div class="avatar-wrap">
      <div class="avatar">{{ firstName.charAt(0) }}{{ lastName.charAt(0) }}</div>
      <button class="avatar-edit" type="button" aria-label="Profilbild ändern"><AppIcon name="edit" :size="14" /></button>
    </div>
    <div class="hero-copy">
      <div class="eyebrow">STUDENTENPROFIL</div>
      <h1>{{ firstName }} {{ lastName }}</h1>
      <p>{{ course }} <span class="separator">·</span> {{ semester }}. Fachsemester</p>
      <span class="status-badge"><span class="status-dot" />{{ status }}</span>
    </div>
    <button class="button button-primary hero-edit" type="button" @click="$emit('edit')">
      <AppIcon name="edit" :size="17" /> Profil bearbeiten
    </button>
  </section>
</template>
