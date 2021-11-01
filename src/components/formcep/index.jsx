import { useState } from "react";
import { useContext } from "react";
import { CEPContext } from "../../providers/CEP";
import { useHistory } from 'react-router-dom';
import { FormContainer } from "./style";

export const FormCep = () => {
    
    const history = useHistory(); 

    const [inputValue, setInputValue] = useState('')

    const { getAddress } = useContext(CEPContext);
    
    const handleSubimit = (event) => {
        event.preventDefault();
        getAddress(inputValue)
        history.push('/home')
    }
    
    return(
        <FormContainer onSubmit={handleSubimit}>
            <label id="cep">
                <input required autoComplete="off" pattern="[0-9]{5}[\d]{3}"
                value={inputValue}
                title="Somente números! CEP com 8 digítos e sem o ( - )"
                onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="00000-000"/>
            </label>
            <input type="submit"/>
        </FormContainer>
    )
}