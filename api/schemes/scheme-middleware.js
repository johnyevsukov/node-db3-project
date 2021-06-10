const Scheme = require('./scheme-model')

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  Scheme.findById(req.params.scheme_id)
  .then(scheme => {
    if(!scheme) {
      res.status(404).json({ message: `scheme with scheme_id ${req.params.scheme_id} not found` })
    }
    else {
      next()
    }
  })
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  // if(req.body.scheme_name.length == 0 || req.body.scheme_name == undefined || typeof(req.body.scheme_name) != 'string') {
  //   res.status(400).json({ message: 'invalid scheme name' })
  // }
  // else {
  //   next()
  // }
  next()
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  // if(req.body.instructions.length == 0 || req.body.instructions == undefined || typeof(req.body.instructions) != 'string' || req.body.step_number < 1 || typeof(req.body.step_number) != 'number' || isNaN(req.body.step_number)){
  //   res.status(400).json({ message: 'invalid step' })
  // }
  // else {
  //   next()
  // }
  next()
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
