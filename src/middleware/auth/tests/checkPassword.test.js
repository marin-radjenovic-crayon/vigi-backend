const { checkPassword } = require('../checkPassword');
const { buildErrObject } = require('../../utils');

jest.mock('../../utils', () => ({
  buildErrObject: jest.fn(),
}));

describe('checkPassword', () => {
  let userMock;

  beforeEach(() => {
    userMock = {
      comparePassword: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should resolve true when password matches', async () => {
    userMock.comparePassword.mockImplementation((password, callback) => {
      callback(null, true);
    });

    const result = await checkPassword('password123', userMock);
    expect(result).toBe(true);
  });

  test('should resolve false when password does not match', async () => {
    userMock.comparePassword.mockImplementation((password, callback) => {
      callback(null, false);
    });

    const result = await checkPassword('wrongpassword', userMock);
    expect(result).toBe(false);
  });

  test('should reject with error object when there is an error', async () => {
    const errorMessage = 'Some error';
    const errorObject = { code: 422, message: errorMessage };

    userMock.comparePassword.mockImplementation((password, callback) => {
      callback(new Error(errorMessage));
    });

    buildErrObject.mockReturnValue(errorObject);

    await expect(checkPassword('password123', userMock)).rejects.toEqual(errorObject);
    expect(buildErrObject).toHaveBeenCalledWith(422, errorMessage);
  });
});
