import { 
  getFirestore, 
  collection, 
  addDoc, 
  doc, 
  setDoc, 
  getDocs, 
  getDoc, 
  updateDoc,
  deleteDoc,
} from '@react-native-firebase/firestore';

const db = getFirestore();

// Table (Collection) Name
const USERS_COLLECTION = 'users';

/**
 * 1. CREATE: Add a new user to the "users" collection (table)
 * @param {Object} userData - Object containing user info (e.g. { name, email, age })
 * @param {string} [userId] - Optional document ID (e.g. Firebase Auth UID)
 * @returns {Promise<{success: boolean, id?: string, message?: string, error?: string}>}
 */
export const addUser = async (userData, userId = null) => {
  try {
    const dataWithTimestamp = {
      ...userData,
      createdAt: new Date(),
    };

    if (userId) {
      // Agar custom ID di ho (jaise user UID)
      const userDocRef = doc(db, USERS_COLLECTION, userId);
      await setDoc(userDocRef, dataWithTimestamp);
      return {
        success: true,
        id: userId,
        message: 'User added successfully!',
      };
    } else {
      // Auto-generated ID ke sath save karega
      const usersRef = collection(db, USERS_COLLECTION);
      const docRef = await addDoc(usersRef, dataWithTimestamp);
      return {
        success: true,
        id: docRef.id,
        message: 'User added successfully!',
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Failed to add user',
    };
  }
};

/**
 * 2. READ (ALL): Read all users from the "users" collection (table)
 * @returns {Promise<{success: boolean, data?: Array, error?: string}>}
 */
export const getUsers = async () => {
  try {
    const usersRef = collection(db, USERS_COLLECTION);
    const querySnapshot = await getDocs(usersRef);

    const usersList = [];
    querySnapshot.forEach((document) => {
      usersList.push({
        id: document.id,
        ...document.data(),
      });
    });

    return {
      success: true,
      data: usersList,
      count: usersList.length,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Failed to fetch users',
    };
  }
};

/**
 * 3. READ (SINGLE): Read a single user by document ID
 * @param {string} userId - Document ID to fetch
 * @returns {Promise<{success: boolean, data?: Object, error?: string}>}
 */
export const getUserById = async (userId) => {
  try {
    const userDocRef = doc(db, USERS_COLLECTION, userId);
    const documentSnapshot = await getDoc(userDocRef);

    const isExisting = typeof documentSnapshot.exists === 'function' 
      ? documentSnapshot.exists() 
      : documentSnapshot.exists;

    if (isExisting) {
      return {
        success: true,
        data: {
          id: documentSnapshot.id,
          ...documentSnapshot.data(),
        },
      };
    } else {
      return {
        success: false,
        error: 'User not found!',
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Failed to fetch user',
    };
  }
};

/**
 * 4. UPDATE: Update an existing user by Document ID
 * @param {string} userId - Document ID to update
 * @param {Object} updatedData - Object containing fields to update (e.g. { name: 'Abid', age: 25 })
 * @returns {Promise<{success: boolean, message?: string, error?: string}>}
 */
export const updateUser = async (userId, updatedData) => {
  try {
    if (!userId) {
      return {
        success: false,
        error: 'User ID is required for update!',
      };
    }

    const userDocRef = doc(db, USERS_COLLECTION, userId);
    await updateDoc(userDocRef, {
      ...updatedData,
      updatedAt: new Date(),
    });

    return {
      success: true,
      message: 'User updated successfully!',
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Failed to update user',
    };
  }
};

/**
 * 5. DELETE: Delete a user document by Document ID
 * @param {string} userId - Document ID to delete
 * @returns {Promise<{success: boolean, message?: string, error?: string}>}
 */
export const deleteUser = async (userId) => {
  try {
    if (!userId) {
      return {
        success: false,
        error: 'User ID is required for delete!',
      };
    }

    const userDocRef = doc(db, USERS_COLLECTION, userId);
    await deleteDoc(userDocRef);

    return {
      success: true,
      message: 'User deleted successfully!',
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Failed to delete user',
    };
  }
};

export default {
  db,
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
