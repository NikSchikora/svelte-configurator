import { writable } from "svelte/store";

export const config = writable({
  color: 1,
  engine: 1,
});
