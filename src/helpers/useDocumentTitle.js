import React, {useEffect} from "react";


export default function useDocumentTitle(value) {
    useEffect(() => {
        document.title = value; 
    }, []);

}