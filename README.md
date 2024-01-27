```ts
import { defineConfig } from 'vite'
import { createPropRemover } from 'wucdbm-vite-vue-prop-remover'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    nodeTransforms: [createPropRemover('data-qa')],
                },
            },
        }),
    ],
})
```
