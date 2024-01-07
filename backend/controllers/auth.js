import User from "../models/userModel.js";
import { BadRequestError } from "../errors/customErrors.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const user = await User.create(req.body);
  const token = generateToken(res, user.id, user.role);
  const data = {
    _id: user._id,
    name: user.name,
    blogName: user.blogName,
    role: user.role,
    token,
  }
  res.status(201).json(data);
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && (await user.matchPasswords(req.body.password))) {
    const token = generateToken(res, user.id, user.role);
    const data = {
      _id: user._id,
      name: user.name,
      blogName: user.blogName,
      role: user.role,
      token,
    };
    res.status(200).json(data)
  } else {
    throw new BadRequestError('Invalid email or password')
  }
};
