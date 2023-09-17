import { All } from "../models/all.model";
import { createAllHTML } from "./create-all-html";

/**
 *
 * @param {String} elementId
 * @param {All} alls
 */

export const renderAlls = (elementId, alls = []) => {
  const element = document.querySelector(elementId);

  alls.forEach((all) => {
    element.append(createAllHTML);
  });
};
