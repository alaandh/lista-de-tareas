import html from "./app.html?raw";
import { renderAlls } from "./use-cases";
import allStore from "../store/all.store";

const ElementsIDs = {
  TodoList: ".todo-list",
};

/**
 *
 * @param {String} elementID
 */

export const App = (elementID) => {
  const displayAlls = () => {
    const alls = allStore.getAll(allStore.getCurrentFilter());
    renderAlls(ElementsIDs.TodoList, alls);
  };

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementID).append(app);
    displayAlls();
  })();
};
