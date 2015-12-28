// use for query one doc only by id string
// input userId {string}
DBCollection.prototype.onedoc = function (userId) {
  return this.findOne({"_id": ObjectId(userId)});
}

//use for query id with pipeline
//input userId {string}, pipeline {json object}
DBCollection.prototype.fid = function (userId, pipeline) {
  return this.find({"_id": ObjectId(userId)}, pipeline);
}

// opponent of db.collections.findOne()
DBCollection.prototype.findLast = function (pipeline) {
  return this.find(pipeline).sort({"_id":-1}).limit(1).pretty();
}
