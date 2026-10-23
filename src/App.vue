<script setup lang="ts">
import { computed, ref } from 'vue'
import AppIcon from './components/AppIcon.vue'
import EditProfileForm from './components/EditProfileForm.vue'
import InfoCard from './components/InfoCard.vue'
import ProfileHeader from './components/ProfileHeader.vue'
import SidebarNav from './components/SidebarNav.vue'
import type { StudentProfile } from './types/profile'

const profile = ref<StudentProfile>({
  firstName: 'Sophie',
  lastName: 'Müller',
  email: 'sophie.mueller@campusflow.de',
  studentId: '2021847',
  course: 'Medieninformatik B.Sc.',
  semester: 4,
  status: 'Aktiv',
  phone: '+49 151 234 567 89',
  birthday: '14. März 2002',
  city: 'Berlin',
})

const isEditing = ref(false)
const showSaved = ref(false)
const activeItem = ref('Mein Profil')
let savedTimeout: ReturnType<typeof setTimeout> | undefined

const personalFields = computed(() => [
  { label: 'E-Mail-Adresse', value: profile.value.email, icon: 'mail' },
  { label: 'Matrikelnummer', value: profile.value.studentId, icon: 'user' },
  { label: 'Telefon', value: profile.value.phone, icon: 'phone' },
  { label: 'Geburtsdatum', value: profile.value.birthday, icon: 'calendar' },
])

const studyFields = computed(() => [
  { label: 'Studiengang', value: profile.value.course, icon: 'book' },
  { label: 'Fachsemester', value: `${profile.value.semester}. Semester`, icon: 'calendar' },
  { label: 'Studierendenstatus', value: profile.value.status, icon: 'check' },
  { label: 'Wohnort', value: profile.value.city, icon: 'map' },
])

function saveProfile(updatedProfile: StudentProfile) {
  profile.value = updatedProfile
  isEditing.value = false
  showSaved.value = true
  if (savedTimeout) clearTimeout(savedTimeout)
  savedTimeout = setTimeout(() => { showSaved.value = false }, 3500)
}
</script>

<template>
  <div class="app-shell">
    <SidebarNav :active-item="activeItem" @navigate="activeItem = $event" />
    <main class="main-content">
      <header class="topbar">
        <div class="breadcrumb"><span>CampusFlow</span><span class="crumb-slash">/</span><strong>Mein Profil</strong></div>
        <div class="topbar-actions">
          <button class="icon-button notification-button" type="button" aria-label="Benachrichtigungen"><AppIcon name="bell" :size="20" /><span /></button>
          <div class="topbar-user"><div class="mini-avatar">SM</div><span>Sophie Müller</span><AppIcon name="chevron" :size="15" /></div>
        </div>
      </header>
      <div class="page-content">
        <div class="page-intro"><div><div class="eyebrow">PERSÖNLICHER BEREICH</div><h2>Mein Profil</h2><p>Verwalte deine persönlichen Daten und Studieninformationen.</p></div><span class="last-updated">Zuletzt aktualisiert: Heute, 10:42 Uhr</span></div>
        <transition name="toast"><div v-if="showSaved" class="save-toast"><span class="toast-check"><AppIcon name="check" :size="15" /></span>Profil erfolgreich gespeichert</div></transition>
        <ProfileHeader :first-name="profile.firstName" :last-name="profile.lastName" :course="profile.course" :semester="profile.semester" :status="profile.status" @edit="isEditing = true" />
        <EditProfileForm v-if="isEditing" :profile="profile" @save="saveProfile" @cancel="isEditing = false" />
        <div v-else class="details-grid">
          <InfoCard title="Persönliche Angaben" subtitle="Deine hinterlegten Kontaktdaten" :fields="personalFields" />
          <InfoCard title="Studium & Status" subtitle="Informationen zu deinem Studium" :fields="studyFields" />
        </div>
        <footer class="page-footer"><span>© 2024 CampusFlow</span><span>Datenschutz</span><span>Hilfe & Kontakt</span></footer>
      </div>
    </main>
  </div>
</template>
