import { useListView } from "../../core/ListViewProvider"
import { ProductsListSearchComponent } from "./ProductListSearchComponent"
import { ProductsListToolbar } from "./ProductListToolbar";
// import { ProductsListGrouping } from "./ProductsListGrouping";

const ProductListHeader = () =>{
    const {selected} = useListView();
    return(
        <div className='card-header border-0 pt-6'>
            <ProductsListSearchComponent />
            {/* begin::Card toolbar */}
            <div className='card-toolbar'>
                {/* begin::Group actions */}
                {/* {selected.length > 0 ? <ProductsListGrouping /> : <ProductsListToolbar />} */}
                {/* end::Group actions */}
            </div>
            {/* end::Card toolbar */}
        </div>
    )
}
export { ProductListHeader }