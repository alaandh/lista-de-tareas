import { All } from "../all/models/all.model";

const Filters = {
  Lot: "lot",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  alls: [
    new All("Piedra del alma"),
    new All("Piedra del infinito"),
    new All("Piedra del tiempo"),
    new All("Piedra del espacio"),
  ],
  filter: Filters.Lot,
};

const initStore = () => {
  console.log(state);
  console.log("InitStore 📝");
};

const loadStore = () => {
  throw new Error("Not implemented");
};

const addAll = (description) => {
  throw new Error("Not implemented");
};

const toggleAll = (allId) => {
  throw new Error("Not implemented");
};

const deleteAll = (allId) => {
  throw new Error("Not implemented");
};

export default {
  initStore,
  loadStore,
};
