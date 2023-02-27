import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const login = async ({ email, password }) => {
  return await axios.get("https://reqres.in/api/users/2", {
    email,
    password,
  });

  // const token = res.data.token;
  // if (token) {
  //   localStorage.setItem("user", JSON.stringify(res.data));
  // }
  // return res.data;
};

const setUser = (res) => {
  // const token = res.data.token;

  // if (token)
  if (true) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return {};
  }
  return JSON.parse(user);
};

const signup = async (props) => {
  return axios.post("", props).then((res) => {
    console.log(res);
  });
};

const drsignup = async (props) => {
return  await axios.post("http://localhost:8080/register", props)
};

const logout = () => {
  localStorage.removeItem("user");
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
    isAuthenticated,
    setUser,
    signup,
    logout,
    resetPassword,
    updateDrDetails,
    updateUserDetails,
    drsignup,
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = isAuthenticated();
      if (cuser === null) {
        localStorage.removeItem("user");
        cuser = "";
      }

      setCurrentUser(cuser);
      setLoading(false);
    };
    checkLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
