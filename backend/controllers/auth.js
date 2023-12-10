import User from "../models/userModel.js";
import { BadRequestError } from "../errors/customErrors.js";

export const register = async (req, res) => {
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user'
    console.log(isFirstAccount);
  //check for existing user
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) throw new BadRequestError(`User already exists!`);

  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const login = (req, res) => {
  // res.status(200)
  // throw new Error('something went wrong')
  res.send("user login success");
};
