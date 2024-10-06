declare module 'nprogress' {
    const NProgress: {
      start: () => void;
      done: () => void;
      configure: (options: any) => void;
    };
    export default NProgress;
  }
  