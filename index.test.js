/* eslint-disable no-global-assign, no-underscore-dangle */
const birthday = require('./index');

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
    expect(birthday.howOld(new Date('01 Jan 2017'))).not.toBe(0);
    expect(birthday.howOld(new Date('01 Mar 1983'))).not.toBe(0);
    expect(birthday.howOld(new Date('17 Dec 2017'))).toBe(0);
    expect(birthday.howOld(new Date('02 Jan 2015'))).not.toBe(0);
    expect(birthday.howOld(new Date('01 Jan 1018'))).toBe(1000);
  });
});
