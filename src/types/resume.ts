export interface Contact {
  id: string
  kind: 'phone' | 'email' | 'telegram' | 'github'
  label: string
  value: string
  href: string
}

export interface SkillGroup {
  id: string
  title: string
  items: string[]
  note?: string
}

export interface Language {
  name: string
  level: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  responsibilities: string[]
  stack: string[]
}

export interface Education {
  id: string
  institution: string
  period: string
  qualification: string
  details?: string
}

export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
}
