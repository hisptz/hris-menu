# HRIS Menu

Menu module for hris applications based on angular 8+

## installation

`npm install @iapps/hris-menu --save`

## Usage

If the module is to be imported in the app.module, then import as

import { HrisMenuModule } from '@iapps/ngx-hris-menu';

then add this in the imports

```typescript
imports: [
...
HrisMenuModule,
...
]
```

> Note: Menu component make a use of animations from angular, in this case you have to import BrowserAnimationsModule in app.module.ts

`import { BrowserAnimationsModule } from '@angular/platform-browser/animations'`;

```typescript
imports: [
...
BrowserAnimationsModule,
...
]
```

Once imported, menu can be called in as

`<hris-menu></hris-menu>`
