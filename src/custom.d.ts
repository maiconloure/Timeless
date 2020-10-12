declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'react-xarrows';

declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
    style?: any;
  }
}
