const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted_middleware.js');

router.get('/users', restricted, (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

router.get('/users/current', restricted, (req, res) => {
  Users.find()
    // eslint-disable-next-line no-unused-vars
    .then((user) => {
      let temp = req.user;
      console.log(req.user);
      res.json({ currentUserId: temp.id, currentUsername: temp.username });
    })
    .catch((err) => res.send(err));
});

router.get('/users/:id', restricted, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: 'The user with the specified id could not be found.',
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: 'The server could not retrieve the user. Error on server end.',
        error,
      });
    });
});

router.delete('/users/:id', (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then((user) => {
      Users.remove(id).then((removeUser) => {
        if (removeUser) {
          res.status(200).json({
            message: `The User with ID number ${id} has been successfully removed.`,
            user,
          });
        } else {
          res.status(404).json({
            errorMessage: 'The user with the specified ID does not exist.',
          });
        }
      });
    })
    .catch((error) => {
      console.log('error on DELETE /users/:id', error);
      res.status(500).json({ errorMessage: 'The user could not be removed.' });
    });
});

module.exports = router;
