# vite-plugin-import-antd
从antd中按需引入组件

## 安装
```
npm i @m-f2e/vite-plugin-import-antd
```

## 使用
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginImportAntd } from '../src/index.ts'

export default defineConfig({
  plugins: [
    vue(), 
    VitePluginImportAntd(),
  ],
})
```

## 效果
```vue
<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue';

export default defineComponent({
  components: {
    [Button.name]: Button,
  }
})
</script>
```
转后
```html
import { createHotContext as __vite__createHotContext } from "/@vite/client";
import Button from "/@fs/vite-plugin-import-antd/node_modules/.vite/deps/ant-design-vue_es_button.js?v=684398ce";
const __default__ = defineComponent({
  components: {
    [Button.name]: Button
  }
});
```