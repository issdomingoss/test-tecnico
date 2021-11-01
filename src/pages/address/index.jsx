import { useContext } from "react"
import { CEPContext } from "../../providers/CEP"
import { Header } from "../../components/header";
import { ButtonUpdateCep } from "../../components/buttonReturn";
import { ContainerAddress } from "./style";
import { useHistory } from "react-router";

export const AddressPage = () => {

    const { address, boolCep } = useContext(CEPContext);
    const history = useHistory();
    
    return(
        <>
            <Header />
            <ContainerAddress>
                <h1>Meu endereço</h1>

                {boolCep ? 
                    <div>
                        <p>Rua: {address.logradouro}</p>
                        <p>Bairro: {address.bairro}</p>
                        <p>Cidade: {address.localidade}</p>
                        <p>Estado: {address.uf}</p>
                    </div> 
                    : 
                    <button onClick={() => history.push('/')}>Cadastre um CEP</button>}
            </ContainerAddress>
            <ButtonUpdateCep />
        </>
    );
};