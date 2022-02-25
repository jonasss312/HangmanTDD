import { useSnackbar } from "notistack";
import { Observer } from "rxjs";

export default function useCeateObserver<T>(
  callback: (value: T) => void
): Observer<T> {
  const { enqueueSnackbar } = useSnackbar();

  return {
    next: (value: T) => callback(value),
    error: (error: Error) => {
      enqueueSnackbar("Error with server: " + error.message, {
        variant: "error",
        preventDuplicate: true,
      });
    },
    complete: () => console.log("Observer got a complete notification"),
  };
}
