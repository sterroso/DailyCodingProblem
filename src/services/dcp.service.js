import { UniqueWays } from "../models/sample.dcp.js";
import * as DCP from "../models/dcp.js";

/**
 * Returns the number of possible combinations to climb a staircase, given
 * a maximum number of steps that can be climbed at a time.
 *
 * @param {number} steps Number of steps for a staircase.
 * @param {[number]} configurations Max number of steps climbed at a time.
 * @returns {number} The number of possible combinations to climb a staircase,
 * given the maximum number of steps that can be climbed at a time.
 */
export const getUniqueWays = (steps, configurations = [1, 2]) => {
  try {
    return UniqueWays(steps, { configurations });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const dcp1 = (list, k) => {
  try {
    return DCP.dcp1(list, k);
  } catch (error) {
    throw new Error(error.message);
  }
};
