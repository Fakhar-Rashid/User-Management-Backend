const User = require("../models/user");
const mongoose = require("mongoose");

//1. insertOne
exports.createUser = async (req, res) => {
  try {
    const user = await User.insertOne(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 2. insertMany
exports.bulkCreateUsers = async (req, res) => {
  try {
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 3. find
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(req.query);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 4. findOne
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 5. find().limit()
exports.getLimitedUsers = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const users = await User.find().limit(limit);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 6. find().skip()
exports.getPaginatedUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const users = await User.find().skip(skip).limit(limit);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 7. find().sort()
exports.getSortedUsers = async (req, res) => {
  try {
    const sortField = req.query.sortBy || "name";
    const sortOrder = req.query.order === "desc" ? -1 : 1;
    const users = await User.find().sort({ [sortField]: sortOrder });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 8. distinct()
exports.getDistinctNames = async (req, res) => {
  try {
    const cities = await User.distinct("name");
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 9. countDocuments()
exports.countUsers = async (req, res) => {
  try {
    const count = await User.countDocuments(req.query);
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 10. updateOne()
exports.updateUser = async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 11. updateMany()
exports.bulkUpdateUsers = async (req, res) => {
  try {
    const result = await User.updateMany(req.body.filter, {
      $set: req.body.update,
    });
    res.json({ modifiedCount: result.modifiedCount });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 12. replaceOne()
exports.replaceUser = async (req, res) => {
  try {
    const result = await User.replaceOne({ _id: req.params.id }, req.body);
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 13. deleteOne()
exports.deleteUser = async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 14. deleteMany()
exports.bulkDeleteUsers = async (req, res) => {
  try {
    const result = await User.deleteMany(req.body);
    res.json({ deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 15. aggregate()
exports.getUserStats = async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          averageAge: { $avg: "$age" },
        },
      },
      { $sort: { count: -1 } },
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 16. createIndex()
exports.createEmailIndex = async (req, res) => {
  try {
    await User.collection.createIndex({ email: 1 }, { unique: true });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 17. dropIndex()
exports.dropEmailIndex = async (req, res) => {
  try {
    await User.collection.dropIndex("email_1");
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 18. getIndexes()
exports.getIndexes = async (req, res) => {
  try {
    const indexes = await User.collection.getIndexes();
    res.json(indexes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 19. findOneAndUpdate()
exports.findAndUpdateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 20. findOneAndDelete()
exports.findAndDeleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 21. bulkWrite()
exports.bulkOperations = async (req, res) => {
  try {
    const result = await User.bulkWrite(req.body.operations);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 22. findOneAndReplace()
exports.findAndReplaceUser = async (req, res) => {
  try {
    const user = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 23. renameCollection()
exports.renameCollection = async (req, res) => {
  try {
    await mongoose.connection.db.collection("people").rename("users");
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 24. drop()
exports.dropCollection = async (req, res) => {
  try {
    await User.collection.drop();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 25. listCollections()
exports.getCollections = async (req, res) => {
  try {
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    res.json(collections.map((c) => c.name));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
