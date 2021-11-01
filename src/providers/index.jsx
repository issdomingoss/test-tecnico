import { DBProductsProviders } from "./db"
import { CEPProviders } from "./CEP"

export const Providers = ({children}) => {

    return(
        <CEPProviders>
            <DBProductsProviders>
                {children}
            </DBProductsProviders>
        </CEPProviders>
    );
};