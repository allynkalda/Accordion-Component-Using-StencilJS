/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    'description': string;
    'name': string;
    'title': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    'description'?: string;
    'name'?: string;
    'onOnToggle'?: (event: CustomEvent<any>) => void;
    'title'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


