const express = require('express')
const router = express.Router()
const signupCopy = require('../models/signupModels')
const bcrypt = require('bcrypt')


router.post('/signup', async (req, res) => {

  const theSalt = await bcrypt.genSalt(10)
  const securedPassword = await bcrypt.hash(req.body.password, theSalt)


  const newUser = new signupCopy({

    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: securedPassword

  })

  newUser.save()
    .then(
      data => {
        res.json(data)
      }
    )
    .catch(error => {
      res.json(error)
    })
})

module.exports = router