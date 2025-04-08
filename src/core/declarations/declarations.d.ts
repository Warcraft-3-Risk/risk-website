// This file contains TypeScript declarations for SVG files.
// It allows importing SVG files as React components in TypeScript files.

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}
