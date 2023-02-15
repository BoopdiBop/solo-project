// this is a constants file, we are exporting the SQL queries
// because they are meant to be constants, I'll put it in all caps

//exports.property is an alternative to doing module.exports = {} 
// you cannot do both!  https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/
exports.SELECT_ALL = `SELECT * FROM pictures;`

exports.SELECT_ONE = `SELECT * FROM pictures WHERE id=?;`

exports.INSERT = `INSERT INTO pictures (caption, url) VALUES (?, ?);`

exports.UPDATE_ROW = `UPDATE pictures SET caption=?, url=? WHERE id=?;`

exports.UPDATE_CAPTION = `UPDATE pictures SET caption=? WHERE id=?;`

exports.UPDATE_URL = `UPDATE pictures SET url=? WHERE id=?;`

exports.DELETE_ROW = `DELETE FROM pictures WHERE id=?;`
