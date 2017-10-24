const { validationResult } = require('express-validator/check');

function enforceValidation(next, req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  next(req, res);
}

function returnError(code, message, status, req, res) {
  res.status(status);
  res.json({ error: code, message })
  res.end();
}

module.exports = {
  enforceValidation,
}
