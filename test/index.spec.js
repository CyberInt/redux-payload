import 'babel-polyfill';

import payload from 'index';

describe('payload()', () => {
  const ACTION = 'ACTION';
  const PAYLOAD = 'PAYLOAD';
  const action = {
    type: ACTION,
    payload: PAYLOAD
  };

  it('saves payload', () => {
    const reducer = payload(ACTION)();

    expect(reducer(null, action)).toBe(PAYLOAD);
  });

  it('invokes mapResult() function before saves payload', () => {
    const mapResult = (result) => `-${result}-`;
    const reducer = payload(ACTION, mapResult)();

    expect(reducer(null, action)).toBe(`-${PAYLOAD}-`);
  });
});
