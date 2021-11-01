import { useHistory } from "react-router"
import { ButtonUpdate } from "./style";

export const ButtonUpdateCep = () => {
    
    const history = useHistory();

    const handleToForm = () => {
        history.push("/")
    }

    return(
        <ButtonUpdate onClick={handleToForm}>Ops, errei meu cep!</ButtonUpdate>
    )
}