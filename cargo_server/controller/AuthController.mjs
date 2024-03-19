import asyncHandler from "express-async-handler";
import { auth as firebaseAuth } from "../services/firebase.mjs";
import generateToken from "../utils/generateToken.mjs";
import User from "../models/userModels.mjs";



const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const {
        user: { emailVerified },
      } = await firebaseAuth.signInWithEmailAndPassword(email, password);
  
      const user = await User.findOne({ email });
  
      if (user) {
        res.json({
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
          verified: emailVerified,
        });
      } else {
        res.status(404);
        throw new Error("User not found");
      }
    } catch (e) {
      res.status(404);
      var errorMessage = e.message;
      if (
        errorMessage ===
        "The password is invalid or the user does not have a password."
      ) {
        errorMessage = "Invalid password";
      } else if (
        errorMessage ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        errorMessage = "User not found";
      }
      throw new Error(errorMessage);
    }
  });

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, isAdmin } = req.body;


    const {
        user: { emailVerified },
    } = await firebaseAuth.createUserWithEmailAndPassword(email, "password");
    await firebaseAuth.currentUser.sendEmailVerification();

    // const {
    //     user: { emailVerified },
    //   } = await createUserWithEmailAndPassword(auth, email, password);
    // await firebaseAuth.currentUser.sendEmailVerification();

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists.");
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        isAdmin: isAdmin || false,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            verified: emailVerified,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});


export {
    authUser,
    registerUser,
    // getUsers,
    // deleteUser,
    // sendEmailVerification,
    // sendForgetPasswordEmail,

};