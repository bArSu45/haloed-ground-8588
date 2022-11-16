import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './AdminPage.module.css';
const AdminPage = () => {
    var name = JSON.parse(localStorage.getItem("username"))
    const [mensData, setMensData] = useState([])
    const [product, setProduct] = useState({
        name: "",
        productImgTagSrc: "",
        price: "",
        id: ""
    })
    const [category, setCategory] = useState("")

    const getMensData = () => {
        axios.get("https://clickandbuy-json-server.onrender.com/mensdata")
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
        axios.post(`https://clickandbuy-json-server.onrender.com/${category}`, product)
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

        <div id={styles.admin_header_main_div}>
            <div id={styles.admin_header}>
                <Link to='/'>
                <img id={styles.admin_logo} src="https://play-lh.googleusercontent.com/zZ6CalfB1nkHveMXD6iD6he6GJW6IemWjlNDPw1mQoxnx1Yo_qLNcJbhxbT34nYFvkgX" alt="" />
                </Link>
                <h3 id={styles.admin_heading}>Welcome <span style={{color:'green', fontStyle:'italic'}}>{name}</span> to Admin Panel</h3>
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
                        <button onClick={handleSubmit} id={styles.admin_btn}>Add Product</button>                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
