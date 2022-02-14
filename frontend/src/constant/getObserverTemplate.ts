export function getObserverTemplate(done: any) {
  return {
    next: (game: any) => {},
    error: (error: Error) => done(error),
    complete: () => done(),
  };
}