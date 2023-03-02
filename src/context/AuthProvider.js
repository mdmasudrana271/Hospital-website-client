import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config";

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider =({children})=>{

    const [user, setUser] = useState({})

    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }
  
    const signInWithEmailPassword = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const logOut = ()=>{
      localStorage.removeItem('photography')
      signOut(auth)
      .then(()=>{
        console.log('log out success')
        localStorage.removeItem('bookAccessToken')
      })
      .catch(error => {
        console.log(error.message)
      })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {logOut,signInWithEmailPassword,createUser}
 
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;