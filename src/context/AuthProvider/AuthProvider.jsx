import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  signInWithPopup
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import app from "../../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  /**
   * CreateUser is a function that takes two arguments, email and password, and returns a promise that
   * creates a user with the email and password provided.
   * @returns The function createUserWithEmailAndPassword is being returned.
   */
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /**
   * The function verifyEmail() returns the result of the function sendEmailVerification() which takes
   * the current user as an argument.
   * @returns The function sendEmailVerification() is being returned.
   */
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  /**
   * UserLogin is a function that takes two arguments, email and password, and returns a promise that
   * resolves to the result of calling signInWithEmailAndPassword with the arguments auth, email, and
   * password.
   * @returns The return value of the function is the return value of the signInWithEmailAndPassword
   * function.
   */
  const userLogin = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /**
   * When the user clicks the logout button, remove the token from local storage and sign the user out of
   * the app.
   * @returns The user is being returned.
   */
  const userLogOut = () => {
    setAuthLoading(true);
    localStorage.removeItem("accessToken");
    return signOut(auth);
  };

  /**
   * UpdateUserProfile is a function that takes a profile as an argument and returns a promise that
   * updates the user's profile.
   * @returns The return value of the updateProfile function.
   */
  const updateUserProfile = profile => {
    setAuthLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  /**
   * The providerLogin function takes a provider as an argument and returns a promise that resolves to
   * the result of calling signInWithPopup with the auth and provider arguments.
   * @returns The return value of the signInWithPopup function.
   */
  const providerLogin = provider => {
    setAuthLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const cleanup = onAuthStateChanged(auth, curUser => {
      setUser(prev => (prev = { ...user, ...curUser }));
      setAuthLoading(false);
    });
    return () => cleanup();
  }, []);

  const authInfo = {
    authLoading,
    setAuthLoading,
    user,
    createUser,
    verifyEmail,
    userLogin,
    userLogOut,
    updateUserProfile,
    providerLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export const AuthContext = createContext();
