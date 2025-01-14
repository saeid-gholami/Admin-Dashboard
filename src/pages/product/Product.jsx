import React from 'react'
import { Link } from 'react-router-dom';
import './Product.css'

export default function Product() {
    return (
        <div className='product'>
            <div className="product__title-containet">
                <h1 className='product__title'>Product</h1>
                <Link to='/newProduct'>
                    <a className='create__btn'>Create</a>
                </Link>
            </div>
        </div>
    )
}
