import { Header } from "../../components/header"
import { ButtonUpdateCep } from '../../components/buttonReturn'
import { ContainerHome } from "./style"
import {ContainerCard} from '../../components/containerCards'

export const HomePage = () => {
    return(
        <>
            <Header />
            <ContainerHome>
                <main>
                    <h2>Sobre a empresa</h2>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Harum quaerat minima 
                        corrupti nostrum, incidunt est tempora eum quos. 
                        Doloribus voluptatem mollitia rerum laboriosam 
                        incidunt tempore? Corrupti perspiciatis quo 
                        asperiores quas.</p>
                </main>
                
                <ContainerCard/>
                <ButtonUpdateCep />    
            </ContainerHome>
        </>
    )
}