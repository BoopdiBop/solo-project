// this is a constants file, we are exporting the SQL queries
// because they are meant to be constants, I'll put it in all caps

//exports.property is an alternative to doing module.exports = {} 
// you cannot do both!  https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
exports.SELECT_ALL = `SELECT * FROM pictures;`
