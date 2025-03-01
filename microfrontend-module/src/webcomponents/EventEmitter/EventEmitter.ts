import { EventName } from './constants';

export const EventEmitter = (
  eventName: keyof typeof EventName,
  payload: string | object
) => {
  const event = new CustomEvent(`${eventName}WC`, {
    detail: payload,
  });
  window.dispatchEvent(event);
};
