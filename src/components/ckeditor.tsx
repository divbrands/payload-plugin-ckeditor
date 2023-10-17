import React, { useEffect, useState } from 'react'
import { useField } from 'payload/components/forms'
import './ckeditor.css'

type Props = { path: string; name: string; type: string; label: string }

export const ckeditor = (props: Props) => {
  const path = props.path
  const { value = '', setValue } = useField<Props>({ path })
  const [CKEditor, setCKEditor] = useState<any>(null)
  const [ClassicEditor, setClassicEditor] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@ckeditor/ckeditor5-react').then(module => {
        setCKEditor(() => module.CKEditor)
      })

      import('@divbrands/ckeditor5').then(module => {
        setClassicEditor(() => module.default)
      })
    }
  }, [])

  if (typeof window === 'undefined' || !CKEditor || !ClassicEditor) {
    return <>Loading CKEditor...</>
  }

  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ color: 'rgb(235, 235, 235)' }}>{props.label}</label>
      <CKEditor
        editor={ClassicEditor}
        data={value as string}
        onReady={(editor: any) => {
          // We're only using direct URL images, so disable the upload button since they come together.
          const uploadImageButton = document.querySelector(
            'button[data-cke-tooltip-text="Insert image"]',
          )
          // @ts-ignore
          uploadImageButton.disabled = true
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData()
          setValue(data)
        }}
      />
    </div>
  )
}
