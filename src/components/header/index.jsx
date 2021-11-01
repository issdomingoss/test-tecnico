import { ContainerHeader, ContainerMenuLinks } from "./style"

import { useHistory } from "react-router"

export const Header = () => {

    const history = useHistory();

    return(
        <ContainerHeader>
            <ContainerMenuLinks>
                <ul>
                    <li onClick={() => history.push("/address")}>Endereço</li>
                    <li onClick={() => history.push("/home")}>Home</li>
                    <li onClick={() => history.push("/offer")}>Offers</li>
                </ul>
            </ContainerMenuLinks>
        </ContainerHeader>
    )
}