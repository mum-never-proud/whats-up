function validateRequest(req, res, next) {
  if (req.body.Body) {
    next();
  } else {
    res.boom.badRequest();
  }
}

module.exports = validateRequest;
