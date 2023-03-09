import React, { useEffect } from 'react'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { STATUS } from '../../utils/status'
import Loader from '../../components/Loader/Loader'
import ProductList from '../../components/ProductList/ProductList'
import { fetchAsyncSearchProduct, getSearchProduct, getSearchProductsStatus, clearSearch } from '../../store/searchSlice'

const SearchPage = () => {

    const { searchTerm } = useParams()
    const dispatch = useDispatch();
    const searchProducts = useSelector(getSearchProduct)
    const searchProductsStatus = useSelector(getSearchProductsStatus)

    useEffect(() => {
        dispatch(clearSearch())
        dispatch(fetchAsyncSearchProduct(searchTerm))
    }, [searchTerm]);

    if (searchProducts.length === 0) {
        return (
            <div className='container container-danger'>
                <div className='fw-5 text-danger py-5'>
                    <h3>No Products found.</h3>
                </div>
            </div>
        )
    }

    return (
        <main className='search-content bg-whitesmoke'>
            <div className='container'>
                <div className='py-5'>
                    <div className='title-md'>
                        <h3>Search results:</h3>
                    </div>

                    <br />
                    {
                        searchProducts === STATUS.LOADING ? <Loader /> : <ProductList products={searchProducts} />
                    }
                </div>
            </div>
        </main>
    )
}

export default SearchPage