declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
/*
TypeScript 默认并不支持 *.vue 后缀的文件
所以在 vue 项目中引入的时候需要创建一个shims-vue.d.ts 文件
放在项目项目对应使用目录下
例如 src/shims-vue.d.ts
用来支持*.vue 后缀的文件
*/