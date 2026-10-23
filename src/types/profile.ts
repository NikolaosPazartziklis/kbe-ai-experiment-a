export type StudentStatus = 'Aktiv' | 'Beurlaubt' | 'Alumni'

export interface StudentProfile {
  firstName: string
  lastName: string
  email: string
  studentId: string
  course: string
  semester: number
  status: StudentStatus
  phone: string
  birthday: string
  city: string
}

export interface ProfileField {
  label: string
  value: string
  icon: string
}
