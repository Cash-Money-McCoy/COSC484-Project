// Locally it doesn’t require user name and password; 
// however, in the production, you must create an admin 
// and assign the database to a specific user.
module.exports = {
    db: 'mongodb://localhost:27017/reactdb'
};
