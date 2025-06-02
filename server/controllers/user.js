import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../middlewares/sendMail.js";
import TryCatch from "../middlewares/tryCatch.js";
import { use } from "bcrypt/promises.js";
export const register = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return res.status(400).json({
      message: "User already exists",
    });
  const hashedPassword = await bcrypt.hash(password, 10);
  user = {
    name,
    email,
    password: hashedPassword,
  };
  const otp = Math.floor(Math.random() * 1000000);
  const activationToken = jwt.sign(
    {
      user,
      otp,
    },
    process.env.Activation_Secret,
    { expiresIn: "5m" }
  );
  const data = {
    name,
    otp,
  };
  await sendMail(email, "online learning", data);
  res.status(200).json({
    message: "otp sent your mail",
    activationToken,
  });
});
export const verifyUser = TryCatch(async (req, res) => {
  const { otp, activationToken } = req.body;
  const verify = jwt.verify(activationToken, process.env.Activation_Secret);
  if (!verify) {
    return res.status(400).json({
      message: "Otp expired",
    });
  }
  if (verify.otp !== otp) {
    return res.status(400).json({
      message: "Wrong Otp",
    });
  }
  await User.create({
    name: verify.user.name,
    email: verify.user.email,
    password: verify.user.password,
  });
  res.json({
    message: "user registered",
  });
});
export const login = TryCatch(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "user not found",
    });
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    return res.status(400).json({
      message: "wrong password",
    });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_Sec, {
    expiresIn: "15d",
  });
  res.json({
    message: `welcome ${user.name}`,
    token,
    user,
  });
});
export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json({ user });
});
