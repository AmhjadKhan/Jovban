import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth"
import app from "../firebase_config";


export const AuthContex = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)


    // 1 create user
    const creatrUser = (email, password) => {
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }


   //2 current usseer manage (memore can"t hold)
   useEffect(() =>{
    const unsubscrive = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setloading(false)
    })
    return () =>{
        return unsubscrive();
    }
   },[])

  //3 singin 
   const singIn = (email, password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   //  4.logout 
 const signOutee = () =>{
  setloading(true)
    return signOut(auth)
 }

    const authInfo = {
        user,
        loading,
        creatrUser,
        singIn,
        signOutee
    }

  return (
    <AuthContex.Provider value={authInfo} >
      {children}
    </AuthContex.Provider>
  )
}

export default Authprovider
