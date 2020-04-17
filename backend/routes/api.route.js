const express = require('express');
const router = express.Router();

// Home API
router.route('/how-is-today').get((req, res, next) => {
    res.send('great');
});

// Fake data for stubs
const userObject = {
    name: 'name1',
    email: 'email1@mail.com',
    rollno: 1
};
const userObject2 = {
    name: 'name2',
    email: 'email2@mail.com',
    rollno: 2
};
const userObject3 = {
    name: 'name3',
    email: 'email3@mail.com',
    rollno: 3
};
const userObjectList = [userObject, userObject2, userObject3];

// User list API
router.route('/create-user').post((req, res, next) => {
    res.sendStatus(201); // 201 = created
});

router.route('/get-user-list').get((req, res, next) => {
    res.status(200).json(userObjectList);   // 200 = OK
});

router.route('/get-user/:id').get((req, res, next) => {
    res.status(200).json(userObject);   // 200 = OK
});
router.route('/update-user/:id').put((req, res, next) => {
    res.sendStatus(200);
});
router.route('/delete-user/:id').delete((req, res, next) => {
    res.sendStatus(200);
});

module.exports = router;