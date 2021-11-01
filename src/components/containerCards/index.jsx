import { Card } from '../card'
import { ContainerCardWrap, ContainerWrap } from './style';

export const ContainerCard = () => {

    return(
        <ContainerWrap>
            <h2>Nossas Ofertas</h2>
            <ContainerCardWrap>
                <Card />
            </ContainerCardWrap>
        </ContainerWrap>
    );
};