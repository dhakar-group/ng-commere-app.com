import { KTCard } from "../../../../../../_metronic/helpers"
import { Content } from "../../../../../../_metronic/layout/components/content"
import { ToolbarWrapper } from "../../../../../../_metronic/layout/components/toolbar"
import { UsersListHeader } from "../../../user-management/users-list/components/header/UsersListHeader"
import { ProductListHeader } from "./components/header/ProductListHeader"
import { ListViewProvider, useListView } from "./core/ListViewProvider"


import { QueryRequestProvider } from "./core/QueryRequestProvider"
import { QueryResponseProvider } from "./core/QueryResponseProvider"

const ProductList = () =>{
    // console.log('product-page')
    const {itemIdForUpdate} = useListView();
    console.log(itemIdForUpdate);

    return(
        <>
            <KTCard>
                <ProductListHeader />
            </KTCard>
        </>
    )
}
const ProductListWrapper = () =>(
    <QueryRequestProvider>
        <QueryResponseProvider>
            <ListViewProvider>
                <ToolbarWrapper />
                <Content>
                    <ProductList />
                </Content>
            </ListViewProvider>
        </QueryResponseProvider>
    </QueryRequestProvider>
    
)
export { ProductListWrapper }