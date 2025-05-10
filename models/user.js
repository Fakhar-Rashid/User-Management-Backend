const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: {
      type: {
        city: { type: String },
        country: { type: String },
        street: { type: String },
      },
      required: false,
    },
    age: { type: Number, required: true },
    number: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^\d+$/.test(v),
        message: "Number must contain only digits (0-9)",
      },
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
