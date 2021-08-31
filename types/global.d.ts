// Types for compiled templates
declare module 'polarity-ember/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';

  const tmpl: TemplateFactory;
  export default tmpl;
}
