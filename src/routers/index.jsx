import { Switch, Route } from "react-router-dom"
import { HomePage } from '../pages/home'
import { OfferPage } from '../pages/offers'
import { CepPage } from "../pages/pagecep"
import { AddressPage } from "../pages/address"

export const Router = () => {
    return(
        <Switch>
            <Route exact path="/">
                <CepPage />
            </Route>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="/offer">
                <OfferPage />
            </Route>
            <Route path="/address">
                <AddressPage />
            </Route>
        </Switch>
    )
}