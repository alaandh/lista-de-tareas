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
    new All("Piedra del poder"),
    new All("Piedra del realidad"),
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

const getAll = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.alls];

    case Filters.Completed:
      return state.alls.filter((all) => all.done);

    case Filters.Pending:
      return state.alls.filter((all) => !all.done);

    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

const addAll = (description) => {
  if (!description) {
    throw new Error("Description is required");
  }

  state.alls.push(new All(description));
};

const toggleAll = (allId) => {
  state.alls = state.alls.map((all) => {
    if (all.id === allId) {
      all.done = !all.done;
    }
    return all;
  });
};

const deleteAll = (allId) => {
  state.alls = state.alls.filter((all) => all.id !== allId);
};

const deleteCompleted = () => {
  state.alls = state.alls.filter((all) => all.done);
};

const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  getAll,
  addAll,
  initStore,
  loadStore,
  toggleAll,
  deleteAll,
  setFilter,
  deleteCompleted,
  getCurrentFilter,
};
