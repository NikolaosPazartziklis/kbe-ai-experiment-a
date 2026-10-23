import { computed, ref } from 'vue';
import AppIcon from './components/AppIcon.vue';
import EditProfileForm from './components/EditProfileForm.vue';
import InfoCard from './components/InfoCard.vue';
import ProfileHeader from './components/ProfileHeader.vue';
import SidebarNav from './components/SidebarNav.vue';
const profile = ref({
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
});
const isEditing = ref(false);
const showSaved = ref(false);
const activeItem = ref('Mein Profil');
let savedTimeout;
const personalFields = computed(() => [
    { label: 'E-Mail-Adresse', value: profile.value.email, icon: 'mail' },
    { label: 'Matrikelnummer', value: profile.value.studentId, icon: 'user' },
    { label: 'Telefon', value: profile.value.phone, icon: 'phone' },
    { label: 'Geburtsdatum', value: profile.value.birthday, icon: 'calendar' },
]);
const studyFields = computed(() => [
    { label: 'Studiengang', value: profile.value.course, icon: 'book' },
    { label: 'Fachsemester', value: `${profile.value.semester}. Semester`, icon: 'calendar' },
    { label: 'Studierendenstatus', value: profile.value.status, icon: 'check' },
    { label: 'Wohnort', value: profile.value.city, icon: 'map' },
]);
function saveProfile(updatedProfile) {
    profile.value = updatedProfile;
    isEditing.value = false;
    showSaved.value = true;
    if (savedTimeout)
        clearTimeout(savedTimeout);
    savedTimeout = setTimeout(() => { showSaved.value = false; }, 3500);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "app-shell" },
});
/** @type {[typeof SidebarNav, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SidebarNav, new SidebarNav({
    ...{ 'onNavigate': {} },
    activeItem: (__VLS_ctx.activeItem),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onNavigate': {} },
    activeItem: (__VLS_ctx.activeItem),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onNavigate: (...[$event]) => {
        __VLS_ctx.activeItem = $event;
    }
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "main-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "topbar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "breadcrumb" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "crumb-slash" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "topbar-actions" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "icon-button notification-button" },
    type: "button",
    'aria-label': "Benachrichtigungen",
});
/** @type {[typeof AppIcon, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(AppIcon, new AppIcon({
    name: "bell",
    size: (20),
}));
const __VLS_8 = __VLS_7({
    name: "bell",
    size: (20),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "topbar-user" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mini-avatar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
/** @type {[typeof AppIcon, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(AppIcon, new AppIcon({
    name: "chevron",
    size: (15),
}));
const __VLS_11 = __VLS_10({
    name: "chevron",
    size: (15),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "page-content" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "page-intro" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "eyebrow" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "last-updated" },
});
const __VLS_13 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    name: "toast",
}));
const __VLS_15 = __VLS_14({
    name: "toast",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
if (__VLS_ctx.showSaved) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "save-toast" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "toast-check" },
    });
    /** @type {[typeof AppIcon, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(AppIcon, new AppIcon({
        name: "check",
        size: (15),
    }));
    const __VLS_18 = __VLS_17({
        name: "check",
        size: (15),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
}
var __VLS_16;
/** @type {[typeof ProfileHeader, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(ProfileHeader, new ProfileHeader({
    ...{ 'onEdit': {} },
    firstName: (__VLS_ctx.profile.firstName),
    lastName: (__VLS_ctx.profile.lastName),
    course: (__VLS_ctx.profile.course),
    semester: (__VLS_ctx.profile.semester),
    status: (__VLS_ctx.profile.status),
}));
const __VLS_21 = __VLS_20({
    ...{ 'onEdit': {} },
    firstName: (__VLS_ctx.profile.firstName),
    lastName: (__VLS_ctx.profile.lastName),
    course: (__VLS_ctx.profile.course),
    semester: (__VLS_ctx.profile.semester),
    status: (__VLS_ctx.profile.status),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
let __VLS_23;
let __VLS_24;
let __VLS_25;
const __VLS_26 = {
    onEdit: (...[$event]) => {
        __VLS_ctx.isEditing = true;
    }
};
var __VLS_22;
if (__VLS_ctx.isEditing) {
    /** @type {[typeof EditProfileForm, ]} */ ;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(EditProfileForm, new EditProfileForm({
        ...{ 'onSave': {} },
        ...{ 'onCancel': {} },
        profile: (__VLS_ctx.profile),
    }));
    const __VLS_28 = __VLS_27({
        ...{ 'onSave': {} },
        ...{ 'onCancel': {} },
        profile: (__VLS_ctx.profile),
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    let __VLS_30;
    let __VLS_31;
    let __VLS_32;
    const __VLS_33 = {
        onSave: (__VLS_ctx.saveProfile)
    };
    const __VLS_34 = {
        onCancel: (...[$event]) => {
            if (!(__VLS_ctx.isEditing))
                return;
            __VLS_ctx.isEditing = false;
        }
    };
    var __VLS_29;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "details-grid" },
    });
    /** @type {[typeof InfoCard, ]} */ ;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(InfoCard, new InfoCard({
        title: "Persönliche Angaben",
        subtitle: "Deine hinterlegten Kontaktdaten",
        fields: (__VLS_ctx.personalFields),
    }));
    const __VLS_36 = __VLS_35({
        title: "Persönliche Angaben",
        subtitle: "Deine hinterlegten Kontaktdaten",
        fields: (__VLS_ctx.personalFields),
    }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    /** @type {[typeof InfoCard, ]} */ ;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(InfoCard, new InfoCard({
        title: "Studium & Status",
        subtitle: "Informationen zu deinem Studium",
        fields: (__VLS_ctx.studyFields),
    }));
    const __VLS_39 = __VLS_38({
        title: "Studium & Status",
        subtitle: "Informationen zu deinem Studium",
        fields: (__VLS_ctx.studyFields),
    }, ...__VLS_functionalComponentArgsRest(__VLS_38));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({
    ...{ class: "page-footer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
/** @type {__VLS_StyleScopedClasses['app-shell']} */ ;
/** @type {__VLS_StyleScopedClasses['main-content']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar']} */ ;
/** @type {__VLS_StyleScopedClasses['breadcrumb']} */ ;
/** @type {__VLS_StyleScopedClasses['crumb-slash']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
/** @type {__VLS_StyleScopedClasses['notification-button']} */ ;
/** @type {__VLS_StyleScopedClasses['topbar-user']} */ ;
/** @type {__VLS_StyleScopedClasses['mini-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['page-content']} */ ;
/** @type {__VLS_StyleScopedClasses['page-intro']} */ ;
/** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
/** @type {__VLS_StyleScopedClasses['last-updated']} */ ;
/** @type {__VLS_StyleScopedClasses['save-toast']} */ ;
/** @type {__VLS_StyleScopedClasses['toast-check']} */ ;
/** @type {__VLS_StyleScopedClasses['details-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['page-footer']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AppIcon: AppIcon,
            EditProfileForm: EditProfileForm,
            InfoCard: InfoCard,
            ProfileHeader: ProfileHeader,
            SidebarNav: SidebarNav,
            profile: profile,
            isEditing: isEditing,
            showSaved: showSaved,
            activeItem: activeItem,
            personalFields: personalFields,
            studyFields: studyFields,
            saveProfile: saveProfile,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
