/******************************************************************************
 * Given a list of numbers and a number k, return whether any two numbers from
 * the list add up to k.
 *
 * For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7
 * is 17.
 *
 * Bonus: Can you do this in one pass?
 *****************************************************************************/

/**
 * Given a list of numbers and a number k, returns wether any two numbers from
 * the list add up to k.
 *
 * @param {[number]} list A list of integers.
 * @param {number} k The target sum.
 */
export const dcp1 = (list, k) => {
  if (list.length < 1) return false;

  if (list.length === 1) {
    if (list[0] === k) return true;

    return false;
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === k) return true;
    }
  }

  return false;
};
