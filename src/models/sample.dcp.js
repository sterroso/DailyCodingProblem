/******************************************************************************
 * There's a staircase with N steps, and you can climb 1 or 2 steps at a time.
 * Given N, write a function that returns the number of unique ways you can
 * climb the staircase. The order of the steps matters.
 *
 * For example, if N is 4, then there are 5 unique ways:
 *
 *  1, 1, 1, 1
 *  2, 1, 1
 *  1, 2, 1
 *  1, 1, 2
 *  2, 2
 *
 * What if, instead of being able to climb 1 or 2 steps at a time, you could
 * climb any number from a set of positive integers X? For example, if
 * X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your
 * function to take in X. 
 *****************************************************************************/

export const MAX_STEPS = 99999;

/**
 * Calculates the number of combinations in which a staircase can be climbed,
 * given a max number of steps that can be climbed at a time (2 max by default).
 * 
 * @param {number} steps The number of steps for a staircase.
 * @param {number} max The max number of steps that can be climbed at a time.
 * @throws { Error } If the value provided for the _steps_ parameter is not
 * an integer number.
 * @throws { RangeError } If the value provided for the _steps_ parameter is
 * less than 0 or greater than MAX_STEPS.
 * @returns {number} the number of unique ways a staircase can be climbed, 
 * given a max number of steps that can be climbed at a time.
 */
export const UniqueWays = (steps, max = 2) => {
    if (steps === 0) return 1;
    
    if (steps < 4) return steps;

    const combinations = [];

    for (let i = 1; i <= max; i++) {
        for (let j = 1; j <= i; j++) {
            let way = [];

            while (way.reduce((sum, item) => sum + item, 0) < steps) {
                way.push(j);
            }

            combinations.push(way);
        }
    }

    return combinations.length;
}
