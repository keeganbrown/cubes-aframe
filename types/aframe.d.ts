import AFRAME from 'aframe';

declare module 'aframe' {
  interface Utils extends AFRAME.Utils {
    getUrlParameter(param: string): string | boolean | null;
    clone<T>(obj: T): T;
  }
}
