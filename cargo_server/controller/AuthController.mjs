import asyncHandler from "express-async-handler";


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    res.json({
        email: email,
        password: password
    });


    // try {
    //   const {
    //     user: { emailVerified },
    //   } = await firebaseAuth.signInWithEmailAndPassword(email, password);

    //   const user = await User.findOne({ email });

    //   if (user) {
    //     res.json({
    //       _id: user._id,
    //       firstName: user.firstName,
    //       lastName: user.lastName,
    //       email: user.email,
    //       isAdmin: user.isAdmin,
    //       token: generateToken(user._id),
    //       verified: emailVerified,
    //     });
    //   } else {
    //     res.status(404);
    //     throw new Error("User not found");
    //   }
    // } catch (e) {
    //   res.status(404);
    //   var errorMessage = e.message;
    //   if (
    //     errorMessage ===
    //     "The password is invalid or the user does not have a password."
    //   ) {
    //     errorMessage = "Invalid password";
    //   } else if (
    //     errorMessage ===
    //     "There is no user record corresponding to this identifier. The user may have been deleted."
    //   ) {
    //     errorMessage = "User not found";
    //   }
    //   throw new Error(errorMessage);
    // }
});


export {
    authUser,
    // registerUser,
    // getUsers,
    // deleteUser,
    // sendEmailVerification,
    // sendForgetPasswordEmail,
  };