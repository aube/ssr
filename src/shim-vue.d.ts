declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@oruga-ui/theme-bootstrap' {
  export const bootstrapConfig: any;
}