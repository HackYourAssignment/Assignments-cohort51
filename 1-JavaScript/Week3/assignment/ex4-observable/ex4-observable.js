export function createObservable() {
  const subscribers = [];

  return {
    subscribe(subscriber) {
      subscribers.push(subscriber);
    },
    notify(message) {
      subscribers.forEach(subscriber => subscriber(message));
    },
  };
}
