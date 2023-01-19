import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const signup = async (props) => {
  return axios.post("", props).then((res) => {
    console.log(res);
    // return updateProfile(res.user, {
    //     displayName: `${firstName} ${lastName}`,
    // })
  });
};

const drsignup = async (props) => {
  axios.post("", props).then((res) => {
    console.log(res);
    // return updateProfile(res.user, {
    //     displayName: `${firstName} ${lastName}`,
    // })
  });
};

const login = (email, password) => {
  axios.post("", { email, password }).then((res) => {
    console.log(res);
    // return updateProfile(res.user, {
    //     displayName: `${firstName} ${lastName}`,
    // })
  });
};

const logout = () => {
  //logout function
  return;
};

const resetPassword = (email) => {
  return axios("", email).then();
};

const updateUserDetails = (props) => {
  return axios.post("", props);
};

const updateDrDetails = (props) => {
  return axios.post("", props);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateDrDetails,
    updateUserDetails,
    drsignup,
  };

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       setCurrentUser(user);
  //       setLoading(false);
  //     });

  //     return unsubscribe;
  //   }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
