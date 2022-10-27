import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="w-full h-screen flex flex-col space-y-12 justify-start items-center">
      <div className="  w-[30rem] h-[20rem] mt-8 bg-slate-100 shadow-2xl rounded-2xl flex items-center flex-col justify-start ">
        <div className="mt-8 space-y-8">
          <div className="flex flex-col">
            <label className="text-blue-600 font-extrabold tracking-wider mb-2">
              {" "}
              Email
            </label>
            <input
              type="text"
              className="w-96 h-8 rounded-md outline-none p-3 "
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 font-extrabold tracking-wider mb-2 ">
              {" "}
              Password
            </label>
            <input
              type="password"
              className="w-96 h-8 rounded-md outline-none p-3 "
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>

          <button
            onClick={register}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 w-full py-3  rounded-xl "
          >
            Register
          </button>
        </div>

        <div className="  w-[30rem] h-[24rem] py-8 mt-14 bg-slate-100 shadow-2xl rounded-2xl flex items-center flex-col justify-start ">
          <div className="mt-8 space-y-8">
            <div className="flex flex-col">
              <label className="text-blue-600 font-extrabold tracking-wider mb-2">
                {" "}
                Email
              </label>
              <input
                type="text"
                className="w-96 h-8 rounded-md outline-none p-3 "
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-blue-600 font-extrabold tracking-wider mb-2 ">
                {" "}
                Password
              </label>
              <input
                type="password"
                className="w-96 h-8 rounded-md outline-none p-3 "
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <button
              onClick={login}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 w-full py-3  rounded-xl "
            >
              login
            </button>
          </div>
        </div>
        <div className="flex gap-4  mt-8">
          <h2>User login Name :</h2>
          <h1>{user?.email}</h1>
        </div>
        
      </div>
    </div>
  );
}

export default App;
