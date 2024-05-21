import { useNavigate } from 'react-router-dom'
import {KTIcon} from '../../../../../../../../_metronic/helpers'
// import {useListView} from '../../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'

const ProductsListToolbar = () => {
//   const {setItemIdForUpdate} = useListView()
  const navigate = useNavigate();
  const openAddUserModal = () => {
    // setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTIcon iconName='exit-up' className='fs-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={()=>navigate('/apps/e-commerce/catalog/products/create-product')}>
        <KTIcon iconName='plus' className='fs-2' />
        Add Product
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {ProductsListToolbar}
