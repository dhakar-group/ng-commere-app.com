import { Route,Outlet, Routes, Navigate } from "react-router-dom";
import { PageLink, PageTitle } from "../../../../../_metronic/layout/core";
import { ProductListWrapper } from "./products/ProductPage";
import BrandPage from "./brands/BrandPage";
import CategoryPage from "./categories/CategoryPage";
import CreateProductPage from "./create-product/CreateProductPage";


const catalogBreadcrumbs:Array<PageLink> = [
    {
        title:'Catalog',
        path:'/apps/e-commerce/catalog/products',
        isSeparator:false,
        isActive:false
    },
    {
        title:'',
        path:'',
        isSeparator:true,
        isActive:false
    },
    
    
]

const CatalogPage = () => {
    return(
        <Routes>
            {/* <Route element={ <Outlet /> }>
                <Route 
                    path='product'
                    element={
                        <>
                            <PageTitle breadcrumbs={catalogBreadcrumbs}>Product</PageTitle>
                            <ProductListWrapper />
                        </>
                    }
                />
                <Route index element={<Navigate to='/apps/e-commerce/catalog/product' />} />
                
            </Route> */}
            {/* <Route index element={<BrandPage/>} /> */}
            
            <Route path='catalog/' element={<Outlet/>}>
                <Route 
                    path="products"
                    element={
                        <>  
                            <PageTitle breadcrumbs={catalogBreadcrumbs}>Products</PageTitle>
                            <ProductListWrapper />
                        </>
                    }
                />
                <Route path='products/create-product' 
                    element={
                        <>
                            <PageTitle breadcrumbs={catalogBreadcrumbs}>Create Product</PageTitle>
                            <CreateProductPage/>
                        </>
                    } 
                />
                <Route path='brands' element={<BrandPage/>} />
                <Route path='categories' element={<CategoryPage/>} />                
                <Route index element={<Navigate to='/apps/e-commerce/catalog/products' />} />
            </Route>
        </Routes>
        
    );
}

export default CatalogPage

