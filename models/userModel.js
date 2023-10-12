const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: [validator.isEmail, 'Please provide valid email'],
  },
  photo: [String],
  password: {
    type: String,
    required: [true, "a user should fill his/her password"],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [
      true,
      "cannot proceed further without entering confirm password.",
    ],
    validate: {
      //this only works if we save
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  role: {
    type: String,
    required: true,
    enum: ["client", "freelancer"],
    default: "freelancer",
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  passwordChangedAt: Date,
});

userSchema.pre("save", async function (next) {
  //only run this function if password was actually modified.
  if (!this.isModified("password")) return next();

  //password is hashed with the cost of 12.
  //cost specify the number of cycles to use in algorithm
  this.password = await bcrypt.hash(this.password, 12);

  //delete the confirm password.
  this.confirmPassword = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    console.log(this.passwordChangedAt, JWTTimestamp);
    return JWTTimestamp < changedTimeStamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  console.log("resetToken:", resetToken);

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  console.log("paswordResetToken:", this.passwordResetToken);

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
