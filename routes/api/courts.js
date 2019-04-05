const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Court = require('../../models/Court');
const validateCourtInput = require('../../validation/courts');

router.get("/test", (req, res) => res.json({ msg: "This is the courts router" }));

router.get('/', (req, res) => {
    Court.find()
        .then(courts => res.json(courts))
        .catch(err => res.status(404).json({ nocourtsfound: 'No courts found' }));
});

router.get('/user/:user_id', (req, res) => {
    Court.find({user: req.params.user_id})
        .then(courts => res.json(courts))
        .catch(err =>
            res.status(404).json({ nocourtsfound: 'No court found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Court.findById(req.params.id)
        .then(court => res.json(court))
        .catch(err =>
            res.status(404).json({ nocourtfound: 'No court found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCourtInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newCourt = new Court({
        description: req.description,
        user: req.user.id,
        type: req.type
      });
  
      newCourt.save().then(court => res.json(court));
    }
  );

module.exports = router;