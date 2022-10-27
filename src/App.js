import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase-config";



function App() {
  const [registerEmail , setRegisterEmail] = useState("");
  const [ registerPassword , setRegisterPassword ] = useState("");

  const register = async () => {
   try{
    const user =  await createUserWithEmailAndPassword(auth,registerEmail,registerPassword );
    console.log(user);
   }catch(error){
     console.log(error.message);

   }

  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="  w-[30rem] h-[20rem] bg-slate-100 shadow-2xl rounded-2xl flex items-center flex-col justify-start ">
       <div className="mt-8 space-y-8" >
        <div className="flex flex-col">
        <label className="text-blue-600 font-extrabold tracking-wider mb-2"> Email</label>
        <input  type='text' className="w-96 h-8 rounded-md outline-none p-3 " value={registerEmail}  onChange={(e) => setRegisterEmail(e.target.value)}/>
        </div>
        <div className="flex flex-col">
        <label className="text-blue-600 font-extrabold tracking-wider mb-2 "> Password</label>
        <input type='password' className="w-96 h-8 rounded-md outline-none p-3 "  value={registerPassword}  onChange={(e) => setRegisterPassword(e.target.value)}/>
        </div>
       

       <button onClick={register}  type="submit" className="bg-blue-500 hover:bg-blue-700 w-full py-3  rounded-xl ">SUBMIT</button>
       </div>
        
       
      </div>
    </div>
  );
}

export default App;
