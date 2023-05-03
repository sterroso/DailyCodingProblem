import { UniqueWays } from "../models/sample.dcp.js";

/**
 * Returns the number of possible combinations to climb a staircase, given
 * a maximum number of steps that can be climbed at a time.
 * 
 * @param {number} steps Number of steps for a staircase.
 * @param {number} max Max number of steps climbed at a time.
 * @returns {number} The number of possible combinations to climb a staircase,
 * given the maximum number of steps that can be climbed at a time.
 */
export const getUniqueWays = (steps, max) => {
    try {
        return UniqueWays(steps, max);
    } catch (error) {
        throw new Error(error.message);
    }
}