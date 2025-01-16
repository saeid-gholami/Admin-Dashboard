import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productsData } from '../../datas';
import PublishIcon from "@mui/icons-material/Publish";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Product.css'

export default function Product() {
    const { productID } = useParams();
    const [allProducts, setAllProducts] = useState([]);
    const [mainProduct, setMainProduct] = useState(null);
    const [uploader, setUploader] = useState("none");

    useEffect(() => {
        fetch('https://saeid-4edd5-default-rtdb.firebaseio.com/products.json')
            .then(res => res.json())
            .then(products => {
                const productsArray = Object.values(products);
                setAllProducts(productsArray);
                const product = productsArray.find(p => p.id == productID);
                setMainProduct(product);
            })
    }, [productID]);

    return (
        <div className='product'>
            <div className="product__title-containet">
                <h1 className='product__title'>Product</h1>
                <Link to='/newProduct'>
                    <span className='create__btn'>Create</span>
                </Link>
            </div>
            <div className='product__top'>
                <div className='product__top-left'>
                    <Chart title='Sale in mounth' data={productsData} dataKey='sales' />
                </div>
                <div className='product__top-right'>
                    {mainProduct && (
                        <div className="product__info-top">
                            <img src={`/${mainProduct.image}`} className='product__info-image' />
                            <span className='product__name'>{mainProduct.title}</span>
                        </div>
                    )}
                    <div className="product__info-bottom">
                        <div className="product__info-item">
                            <div className="product__info-key">ID</div>
                            {mainProduct && (
                                <div className="product__info-value">{mainProduct.id}</div>
                            )}
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Product Name</div>
                            {mainProduct && (
                                <div className="product__info-value">{mainProduct.title}</div>
                            )}
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Active</div>
                            <div className="product__info-value">Yes</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">In Stock</div>
                            <div className="product__info-value">Yes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product__bottom">
                <div className="product__form">
                    <div className="product__form-left">
                        <label htmlFor="name">Product Name</label>
                        <input type="text" id='name' placeholder='Enter product name ...' />
                        <label htmlFor="select">In Stock</label>
                        <select name='select' id="select">
                            <option value="-1">Select in stock</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="active">Active</label>
                        <select name='active' id="active">
                            <option value="-1">Select active mode</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="product__form-right">
                        <div className="product__uploader">
                            <img src="/images/python.png" alt="product image" className='product__img' />
                            <IconButton className='icon' onClick={() => setUploader("block")}>
                                <PublishIcon />
                            </IconButton>
                            <input type="file" style={{ display: `${uploader}` }} />
                        </div>
                        <Button variant="contained" color="primary" className='upload__btn' style={{ width: "auto" }}>
                            Upload (Edit)
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
