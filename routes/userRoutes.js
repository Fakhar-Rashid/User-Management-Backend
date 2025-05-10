const express = require("express");
const router = express.Router();
const {
  createUser,
  bulkCreateUsers,
  getUsers,
  getUser,
  getLimitedUsers,
  getPaginatedUsers,
  getSortedUsers,
  getDistinctNames,
  countUsers,
  updateUser,
  bulkUpdateUsers,
  replaceUser,
  deleteUser,
  bulkDeleteUsers,
  getUserStats,
  createEmailIndex,
  getIndexes,
  dropEmailIndex,
  findAndUpdateUser,
  findAndDeleteUser,
  bulkOperations,
  findAndReplaceUser,
  renameCollection,
  dropCollection,
  getCollections,
} = require("../controllers/userController");

//  Create user (insertOne)
router.post("/", createUser);

//  Bulk create users (insertMany)
router.post("/bulk", bulkCreateUsers);

//  Get all users (find)
router.get("/", getUsers);

//  Get limited users (limit)
router.get("/limited", getLimitedUsers);

//  Get paginated users (skip + limit)
router.get("/paginated", getPaginatedUsers);

//  Get sorted users (sort)
router.get("/sorted", getSortedUsers);

//  Get distinct cities (distinct)
router.get("/distinct/names", getDistinctNames);

//  Count users (countDocuments)
router.get("/count", countUsers);

//  Get user stats (aggregate)
router.get("/stats", getUserStats);

//  Get all indexes (getIndexes)
router.get("/indexes", getIndexes);

//  List collections (listCollections)
router.get("/collections", getCollections);

// Get single user (findOne)
router.get("/:id", getUser);

//  Update user (updateOne)
router.patch("/:id", updateUser);

//  Bulk update users (updateMany)
router.patch("/bulk/update", bulkUpdateUsers);

//  Replace user (replaceOne)
router.put("/:id/replace", replaceUser);

//  Delete user (deleteOne)
router.delete("/:id", deleteUser);

//  Bulk delete users (deleteMany)
router.delete("/bulk/delete", bulkDeleteUsers);

//  Create email index (createIndex)
router.post("/indexes/email", createEmailIndex);

//  Drop email index (dropIndex)
router.delete("/indexes/email", dropEmailIndex);

//  Find and update user (findOneAndUpdate)
router.put("/:id/find-update", findAndUpdateUser);

//  Find and delete user (findOneAndDelete)
router.delete("/:id/find-delete", findAndDeleteUser);

//  Bulk operations (bulkWrite)
router.post("/bulk/write", bulkOperations);

//  Find and replace user (findOneAndReplace)
router.put("/:id/find-replace", findAndReplaceUser);

//  Rename collection (renameCollection)
router.post("/collection/rename", renameCollection);

//  Drop collection (drop)
router.delete("/collection/drop", dropCollection);

module.exports = router;
