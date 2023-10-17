import { type Field } from 'payload/types'
import { ckeditor } from '../components/ckeditor'

interface CKEditorFieldOptions {
  name: string
  label: string
  localized: boolean
}

export const ckeditorField = ({ name, label, localized }: CKEditorFieldOptions): Field => {
  return {
    name,
    label,
    localized,
    type: 'text',
    admin: {
      components: {
        Field: ckeditor,
      },
    },
  }
}
