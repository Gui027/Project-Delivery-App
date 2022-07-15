const badRequest = {
  status: 400,
  message: 'Bad Request',
};

const unauthorized = {
  status: 401,
  message: 'Unauthorized',
};

const notFound = {
  status: 404,
  message: 'Not Found',
};

const conflict = {
  status: 409,
  message: 'Email or password incorrect',
};

module.exports = {
  badRequest,
  unauthorized,
  notFound,
  conflict,
};