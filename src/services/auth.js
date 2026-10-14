import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from '@react-native-firebase/auth';

/**
 * Register a new user with email and password and send email verification
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<Object>}
 */
export const signUpWithEmail = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Send email verification
    if (userCredential && userCredential.user) {
      await sendEmailVerification(userCredential.user);
    }

    return { 
      success: true, 
      user: userCredential.user,
      message: 'Account created! Verification email has been sent.'
    };
  } catch (error) {
    let errorMessage = 'An error occurred during registration.';
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'That email address is already in use!';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'That email address is invalid!';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'The password is too weak. Please use at least 6 characters.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
};

/**
 * Send email verification to current logged-in user
 * @returns {Promise<Object>}
 */
export const sendVerificationEmail = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      await sendEmailVerification(user);
      return { success: true, message: 'Verification email sent successfully!' };
    }
    return { success: false, error: 'No user is currently signed in.' };
  } catch (error) {
    let errorMessage = 'Failed to send verification email.';
    if (error.code === 'auth/too-many-requests') {
      errorMessage = 'Too many requests. Please wait a moment before trying again.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
};

/**
 * Sign in an existing user with email and password
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<Object>}
 */
export const signInWithEmail = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    let errorMessage = 'Invalid email or password.';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage = 'Invalid email or password!';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'That email address is invalid!';
    } else if (error.code === 'auth/user-disabled') {
      errorMessage = 'This user account has been disabled.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
};

/**
 * Sign out current logged-in user
 * @returns {Promise<Object>}
 */
export const signOutUser = async () => {
  try {
    const auth = getAuth();
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/**
 * Send password reset email
 * @param {string} email 
 * @returns {Promise<Object>}
 */
export const resetPassword = async (email) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Password reset link sent to your email!' };
  } catch (error) {
    let errorMessage = 'Could not send password reset email.';
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'No user found with this email!';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email address!';
    } else if (error.message) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
};

/**
 * Get current user
 * @returns {Object|null}
 */
export const getCurrentUser = () => {
  const auth = getAuth();
  return auth.currentUser;
};

export default {
  signUpWithEmail,
  sendVerificationEmail,
  signInWithEmail,
  signOutUser,
  resetPassword,
  getCurrentUser,
};
