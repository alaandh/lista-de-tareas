import { All } from "../models/all.model";

/**
 *
 * @param {All} all
 */

export const createAllHTML = (all) => {
  if (!all) {
    throw new Error("A ALL objet is required");
  }

  const html = `<h1>${all.description}<h1>`;
  const liElement = document.createElement("li");

  liElement.innerHTML = html;
  return liElement;
};
