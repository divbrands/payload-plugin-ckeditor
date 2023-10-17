import { CollectionConfig, Field } from 'payload/types'
import { ckeditorField } from '../../../src/fields/ckeditorField'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'someField',
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
    },
    ckeditorField({
      name: 'longDescription',
      label: 'Long Description',
      localized: true,
      required: true,
    }) as Field,
  ],
}

export default Examples
