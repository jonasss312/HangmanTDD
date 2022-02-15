export function getObserverTemplate(done: any, onNext: (value: any) => void) {
  return {
    next: (value: any) => { onNext(value); },
    error: (error: Error) => done(error),
    complete: () => done(),
  };
}
