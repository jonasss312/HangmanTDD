import DoneCallback = jest.DoneCallback;

export function getObserverTemplate(
  done: DoneCallback,
  onNext: (value: any) => void
) {
  return {
    next: (value: any) => {
      onNext(value);
    },
    error: (error: Error) => done(error),
    complete: () => {
      done();
    },
  };
}
