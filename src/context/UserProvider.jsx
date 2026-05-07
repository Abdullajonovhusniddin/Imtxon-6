import { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({children}) {
    const [img , setImg] = useState('');
    const [job , setJob] = useState('');

    return (
        <UserContext.Provider value={{img , setImg , job , setJob}}>
            {children}
        </UserContext.Provider>
    )
}