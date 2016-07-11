import { extendReducer, nullReducer } from 'redux-reuse';

const identity = (value) => value;

/**
 * Creates a reducer wrapper which return the payload of the action for the
 * given action type.
 * @param {string} actionType
 * @param {function} mapResult - function to be invoked with payload as argument
 *   before returning it.
 * @returns {function} a function of signature (reducer) => newReducer
 */
const payload = (actionType, mapResult = identity) => (reducer = nullReducer) =>
  extendReducer(reducer, {
    [actionType]: (_, { payload } = {}) => mapResult(payload)
  });

export default payload;
