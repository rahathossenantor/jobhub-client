import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
// import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profileAvatar, setProfileAvatar] = useState(null);
    const [loading, setLoading] = useState(true);

    // register user with email and password
    const registerUserWithEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // register user with google
    const googleProvider = new GoogleAuthProvider();
    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // sign in user with email and password
    const signInUserWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            // const userEmail = currentUser?.email || user?.email;
            // const loggedUser = { email: userEmail };

            // request for a jwt token if the user exist
            // if (currentUser) {
            //     axios.post("https://cardoctors-server.vercel.app/jwt", loggedUser, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //         })
            //         .catch(err => console.error(err.message));
            // } else {
            //     axios.post("https://cardoctors-server.vercel.app/logout", loggedUser, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //         })
            //         .catch(err => console.error(err.message));
            // }
        });

        return () => unSubscribe();
    }, [user?.email]);

    const contextData = {
        user,
        profileAvatar,
        loading,
        setProfileAvatar,
        registerUserWithEmailAndPass,
        signInUserWithGoogle,
        signInUserWithEmailAndPass,
        signOutUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
