const db = require(".../data/dbConfig.js");

function find(){
    return db("users")
        .select("id", "username")
        .orderBy("id");
};

function findBy(id) {
    return db("users")
        .where(filter)
        .orderBy("id");
}

function findById(id) {
    return db("users")
        .where({ id })
        .first();
}

function add(value){
    return db("users")
        .insert(value, "id")
        .then(id => {
            return findById(id)
        });
}

module.exports = {
    find,
    findBy,
    findById,
    add
  };