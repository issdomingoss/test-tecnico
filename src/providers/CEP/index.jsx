import { createContext, useEffect, useState } from "react";
import axios from "axios"
// import { useHistory } from "react-router";


export const CEPContext = createContext();

export const CEPProviders = ({ children }) => {
    // const history = useHistory();

    const [address, setAddress] = useState();
    const [boolCep, setBoolCep] = useState(false);

    const getAddress = (inputCep) => {

        axios.get(`https://viacep.com.br/ws/${inputCep}/json/`)
        .then((response) => {
            setAddress(response.data)
            console.log('resposta da requisição',response.data)
            setBoolCep(true)
        })
        .catch((e) => {
            console.log(e)
        })

        console.log('POSSO USAR UMA FUNÇÃO AQUI', address)

    }
    
    console.log('endereço no state address', address)

    useEffect(() => {
        getAddress();
    }, [])

    return(
        <CEPContext.Provider value={{getAddress, address, boolCep}}>
            { children }
        </CEPContext.Provider>
    )
}