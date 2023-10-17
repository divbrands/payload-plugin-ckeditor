# Payload Plugin CKEditor

* This plugin is still under development. PR's are welcomed.

This plugin adds a function that returns a `Field` representing CKEditor 5. it is a HTML Editor for simple and efficient editing.

As of now, it uses a minimal build of CKEditor 5. We may change this later.

## Installation

### Install the package

```
yarn add @divbrands/payload-plugin-ckeditor
```

### Import the Field helper on config

```
import { ckeditorField } from "@divbrands/payload-plugin-ckeditor"
```

### Add the field with needed params

```js
  fields: [
    ckeditorField({
      name: "longDescription",
      label: "Long Description",
      localized: true,
      required: true,
    }),
  ],
```

### That's it!

Your new field should present a full blown CkEditor 5 editor saving everything as HTML. 