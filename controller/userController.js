import {authenticateUser} from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (authenticateUser(email, password)) { 
      res.status(200).json({
      message: 'Login successful',
      email,
    });  
  } else {
    res.status(401);
    throw new Error('Invalid Email or Password!');
  }
});
