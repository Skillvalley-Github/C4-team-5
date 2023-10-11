const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("./../models/userModel");
const crypto = require("crypto");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  try {
    //JWT cookie:
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      //this code is important to avoid any server-side scripting.
    };
    // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

    res.cookie("jwt", token, cookieOptions);

    res.status(statusCode).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: `User authentication isn't possible`,
    });
  }
};

exports.signUp = async (req, res, next) => {
  const newUser = await User.create({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email: req.body.email,
    // photo: req.body.photo,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    role: req.body.role,
  });

  createSendToken(newUser, 201, res);
      
  next();
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError(`please provide email and password`, 400));
  }

  const user = await User.findOne({ email }).select("+password"); // check the user on the basis of email.
  const correctPassword = user.correctPassword(password, user.password);

  if (!user || !correctPassword) {
    return next(new AppError(`Incorect email or password`, 401));
  }

  createSendToken(user, 200, res);

  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `User role:${req.user.role} is not authorized to access this route`,
      });
    }
    next();
  };
};

