import { startLoading, stopLoading } from "../features/loading/loadingSlice";
import { store } from "../app/store";

export async function fetchWithLoading(input, init) {
  store.dispatch(startLoading());
  try {
    const response = await fetch(input, init);
    return response;
  } finally {
    store.dispatch(stopLoading());
  }
}
