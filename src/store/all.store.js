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

export default {
  initStore,
};
