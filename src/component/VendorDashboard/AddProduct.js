import React from 'react'
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import img1 from '../../assets/img/product-image/product1.png'


const AddProduct = () => {

    const history = useHistory();
    return (
        <>
            <section id="add_product_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="add_product_wrapper">
                                <h4>Add Product</h4>
                                <form className="add_product_form" onSubmit={(e)=> {e.preventDefault();Swal.fire('Success','Product Successfully Added', 'success'); history.push('/shop')}}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="image-input">
                                                <img src={img1} className="image-preview"
                                                    alt="img" />
                                                <input type="file" accept="image/*" id="imageInput" />
                                                <label htmlFor="imageInput" className="image-button">
                                                    <i className="fa fa-image"></i>Choose image</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_name">Title<span className="text-danger">*</span></label>
                                                <input type="text" id="product_name" className="form-control"
                                                    placeholder="Product Title here" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="whole_sale">Condition<span className="text-danger">*</span></label>
                                                <select name="product" id="whole_sale" required>
                                                    <option value="yes">Used</option>
                                                    <option value="no">Old</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_name">Country & City<span className="text-danger">*</span></label>
                                                <input type="text" id="product_name" className="form-control"
                                                    placeholder="Country & City" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_price">Product Price<span className="text-danger">*</span></label>
                                                <input type="number" id="product_price" className="form-control" placeholder="Product Price" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_unit">Category<span className="text-danger">*</span></label>
                                                <select name="product" id="product_unit" required>
                                                    <option value="Category 1">Category 1</option>
                                                    <option value="Category 2">Category 2</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_unit">Marca<span className="text-danger">*</span></label>
                                                <select name="product" id="product_unit" required>
                                                    <option value="Marca 1">Marca 1</option>
                                                    <option value="Marca 2">Marca 2</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_price">Serial Number<span className="text-danger">*</span></label>
                                                <input type="number" id="product_price" className="form-control" placeholder="Serial Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_price">Year<span className="text-danger">*</span></label>
                                                <input type="number" id="product_price" className="form-control" placeholder="Year" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_price">Modelo<span className="text-danger">*</span></label>
                                                <input type="number" id="product_price" className="form-control" placeholder="Modelo" required />
                                            </div>
                                        </div>



                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="flash_sale">Condicion<span className="text-danger">*</span></label>
                                                <select name="product" id="flash_sale" required>
                                                    <option value="Condicion 1">Condicion 1</option>
                                                    <option value="Condicion 2">Condicion 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_price">Precio<span className="text-danger">*</span></label>
                                                <input type="number" id="product_price" className="form-control" placeholder="Precio" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="fotm-group">
                                                <label htmlFor="product_price">Nota<span className="text-danger">*</span></label>
                                                <input type="number" id="product_price" className="form-control" placeholder="Nota" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="btn_right_table">
                                                <button className="theme-btn-one bg-black btn_sm">Add Product</button>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProduct
