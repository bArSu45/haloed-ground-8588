import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Input,
  Select,
  Wrap,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AdminPage.module.css";
const AdminPage = () => {
  var name = JSON.parse(localStorage.getItem("username"));
  const [mensData, setMensData] = useState([]);
  const [product, setProduct] = useState({
    "col_sm_4_href": "",
      "productImgTagSrc": "",
      "plp": "SLIM FIT",
      "brand_namez": "",
      "clr_shade_4": "",
      "discountedPriceText": "",
      "actualPriceText": "",
      "discount_price_box": "",
    id: "",
  });
  const [category, setCategory] = useState("");

  const getMensData = () => {
    axios
      .get("https://clickandbuy-json-server.onrender.com/mensdata")
      .then((res) => {
        setMensData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // console.log(mensData)
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(product)
    axios
      .post(`https://clickandbuy-json-server.onrender.com/${category}`, product)
      .then((res) => {
        // setProduct(res.data)
        getMensData();
        console.log(res.data);
        alert("Add data successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // console.log("product",product)
  useEffect(() => {
    getMensData();
  }, [mensData]);


  const deleteDataFromCart = (id) =>{
    // console.log(id)
    axios.delete(`https://clickandbuy-json-server.onrender.com/mensdata/${id}`)

  }
  return (
    <div id={styles.admin_header_main_div}>
      <div id={styles.admin_header}>
        <Link to="/">
          <img
            id={styles.admin_logo}
            src="https://play-lh.googleusercontent.com/zZ6CalfB1nkHveMXD6iD6he6GJW6IemWjlNDPw1mQoxnx1Yo_qLNcJbhxbT34nYFvkgX"
            alt=""
          />
        </Link>
        <h3 id={styles.admin_heading}>
          Welcome{" "}
          <span style={{ color: "green", fontStyle: "italic" }}>{name}</span> to
          Admin Panel
        </h3>
      </div>
      <Box w="100%" display="flex" justifyContent="space-around">
        <Box W="50%">
          <div className={styles.form_element_div}>
          
            <Input
            placeholder="name"
              type="text"
              name={product.name}
              value={product.name}
              className={styles.form_Input}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div >
           
            <Select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="mensdata">Men's Data</option>
              <option value="womensdata">Women's Data</option>
            </Select>
          </div>
          <div >
            
            <Input
              
              type="url"
              placeholder="Image URL"
              value={product.src}
              name={product.productImgTagSrc}
              onChange={(e) =>
                setProduct({ ...product, productImgTagSrc: e.target.value })
              }
            />
          </div>
          <div className={styles.form_element_div}>
           
            <Input
              type="number"
              value={product.actualPriceText}
              name={product.actualPriceText}
              onChange={(e) =>
                setProduct({ ...product, actualPriceText: e.target.value })
              }
             placeholder="actualPriceText"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={handleSubmit} >
              Add Product
            </Button>
          </div>
        </Box>
        <Box style={{  overflow: "scroll"}} w="50%" h="580px" scrollBehavior="auto" ><Button>mens</Button><Button>womens</Button> 
        <Box>
        <div id={styles.mensPage_main_div}>
          {mensData.length > 0 && mensData.map((item) => {
            return (

              <div key={item.id} id={styles.mensPage_grid_boxez}>
                <Box>
                
                </Box>
                <Box id={styles.name_brand_div}>
                  <h1 id={styles.product_brand}>{item.brand_namez}</h1>
                  <h1 id={styles.product_name}>{item.clr_shade_4}</h1>
                  <Box id={styles.price_div}>
                    <h1 id={styles.discount_price}>₹{item.discount_price_box}</h1>
                    <h1 id={styles.actual_price}>₹{item.actualPriceText}</h1>
                  </Box>
                  <Button onClick={() => (item)} ml="70px">update</Button>
                  <Button onClick={() => (item)} ml="70px">active</Button>
                  <Button bg="red" onClick={() => 
        deleteDataFromCart(item.id)} ml="70px">Delete</Button>
                </Box>
              </div>

            )
          })}
        </div></Box> </Box>
      </Box>
    </div>
  );
};

export default AdminPage;
