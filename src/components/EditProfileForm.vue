<script setup lang="ts">
import { reactive } from 'vue'
import AppIcon from './AppIcon.vue'
import type { StudentProfile } from '../types/profile'

const props = defineProps<{ profile: StudentProfile }>()
const emit = defineEmits<{ save: [profile: StudentProfile]; cancel: [] }>()
const form = reactive<StudentProfile>({ ...props.profile })

function save() {
  emit('save', { ...form })
}
</script>

<template>
  <section class="card edit-card">
    <div class="section-heading">
      <div><h2>Profil bearbeiten</h2><p>Halte deine persönlichen Angaben aktuell.</p></div>
      <button class="close-button" type="button" aria-label="Bearbeitung schließen" @click="emit('cancel')">×</button>
    </div>
    <form @submit.prevent="save">
      <div class="form-grid">
        <label><span>Vorname</span><input v-model.trim="form.firstName" required /></label>
        <label><span>Nachname</span><input v-model.trim="form.lastName" required /></label>
        <label class="full"><span>E-Mail-Adresse</span><input v-model.trim="form.email" type="email" required /></label>
        <label><span>Telefon</span><input v-model.trim="form.phone" type="tel" /></label>
        <label><span>Wohnort</span><input v-model.trim="form.city" /></label>
      </div>
      <div class="form-actions">
        <button class="button button-secondary" type="button" @click="emit('cancel')">Abbrechen</button>
        <button class="button button-primary" type="submit"><AppIcon name="check" :size="17" /> Änderungen speichern</button>
      </div>
    </form>
  </section>
</template>
