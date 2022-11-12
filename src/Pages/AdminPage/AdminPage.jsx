import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from './AdminPage.module.css';
const AdminPage = () => {

    const [mensData, setMensData] = useState([])
    const [product, setProduct] = useState({
        name: "",
        productImgTagSrc: "",
        price: "",
        id: ""
    })
    const [category, setCategory] = useState("")

    const getMensData = () => {
        axios.get("http://localhost:8080/mensdata")
            .then((res) => {
                setMensData(res.data)
            }).catch((e) => {
                console.log(e)
            })
    }


    // console.log(mensData)
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(product)
        axios.post(`http://localhost:8080/${category}`, product)
            .then((res) => {
                // setProduct(res.data)
                getMensData()
                console.log(res.data)
            }).catch((e) => {
                console.log(e)
            })
    }

    // console.log("product",product)
    useEffect(() => {
        getMensData()
    }, [mensData])

    return (

        <div style={{ backgroundColor: '#F9F5EB', height: '100vh' }}>
            <div style={{ display: 'flex', height: '100px', width: '100%', backgroundColor: 'white', margin: 'auto' }}>
                <img style={{ width: '100px', height: '100px', marginLeft: '5%' }} src="https://play-lh.googleusercontent.com/zZ6CalfB1nkHveMXD6iD6he6GJW6IemWjlNDPw1mQoxnx1Yo_qLNcJbhxbT34nYFvkgX" alt="" />
                <h3 style={{ fontSize: '55px', fontWeight: '800', color: '#FF9F29', textAlign: 'center', marginLeft: '20%' }}>Welcome to Admin Panel</h3>
            </div>
            <div id={styles.admin_main_div}>
                <div
                    className={styles.add_product_wrapper}>
                    <div className={styles.form_element_div}>
                        <label className={styles.form_label}>Product Title</label>
                        <input type="text" name={product.name} value={product.name} className={styles.form_input} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                    </div>
                    <div className={styles.form_element_div}>
                        <label className={styles.form_label}>Product Category</label>
                        <select name="category" onChange={(e) => setCategory(e.target.value)} >
                            <option value="">Select Category</option>
                            <option value="mensdata">Men's Data</option>
                            <option value="womensdata">Women's Data</option>
                        </select>
                    </div>
                    <div className={styles.form_element_div}>
                        <label className={styles.form_label}>Product Image</label>
                        <input
                            className={styles.form_input}
                            type="url"
                            placeholder="Image URL"
                            value={product.src}
                            name={product.productImgTagSrc}
                            onChange={(e) => setProduct({ ...product, productImgTagSrc: e.target.value })}

                        />
                    </div>
                    <div className={styles.form_element_div}>
                        <label className={styles.form_label}>Product Price</label>
                        <input type="number" value={product.price} name={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} className={styles.form_input} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button onClick={handleSubmit} style={{ backgroundColor: '#354259', padding: '2px 10px 2px 10px', borderRadius: '5px', marginTop: '20px', color: '#F9F5EB' }}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
