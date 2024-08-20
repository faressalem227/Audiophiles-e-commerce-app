import { createContext } from "react";
import { useContext } from "react";


export const UserContactsContext = createContext(undefined);
export const AdminRespondsContext = createContext(undefined);

// Custom Hook To Handle undefined 
export function useUserContactsContext() {
    const contacts = useContext(UserContactsContext);

    if(contacts === undefined)
        throw new Error("NO CONTACTS");

    return contacts;
}

// Custom Hook To Handle undefined 
export function useAdminRespondsContext() {
    const responds = useContext(AdminRespondsContext);

    if(responds === undefined)
        throw new Error("NO RESPONDS");

    return responds;
}