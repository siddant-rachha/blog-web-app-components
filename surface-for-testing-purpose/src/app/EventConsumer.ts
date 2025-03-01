// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-explicit-any
export const EventConsumer = (name: string, callback: (value: any) => void) => {
  window.addEventListener(name, e => {
    const event = e as CustomEvent;
    callback(event.detail);
  });
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const RemoveEvent = (name: string, callback: Function) => {
  window.removeEventListener(name, callback as unknown as EventListener);
};
