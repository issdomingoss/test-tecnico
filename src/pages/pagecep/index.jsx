import { FormCep } from "../../components/formcep"
import { ContainerForm } from "./style"

export const CepPage = () => {
    return(
        <ContainerForm>
            <section>
                <h2>Para continuar por favor insira seu CEP:</h2>
                <FormCep />
            </section>
            <div>
                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
                    target="_blank"
                    rel='noreferrer'
                >Não sei meu CEP</a>
            </div>
        </ContainerForm>
    );
};