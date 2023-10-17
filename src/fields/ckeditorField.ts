import { type Field } from 'payload/types'
import { ckeditor } from '../components/ckeditor'

interface CKEditorFieldOptions {
  name: string
  label: string
  localized?: boolean
  required?: boolean
}

export const ckeditorField = ({
  name,
  label,
  localized,
  required,
}: CKEditorFieldOptions): Field => {
  return {
    name,
    label,
    localized,
    required,
    type: 'text',
    admin: {
      components: {
        Field: ckeditor,
      },
    },
  }
}
