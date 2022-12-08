import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AdminPage.module.css";
const AdminPage = () => {
  var name = JSON.parse(localStorage.getItem("username"));
  const [mensData, setMensData] = useState([]);

const [active, setActive] = useState(true);
  
  const [product, setProduct] = useState({
    col_sm_4_href: "",
    productImgTagSrc: "",
    plp: "SLIM FIT",
    brand_namez: "",
    clr_shade_4: "",
    discountedPriceText: "",
    actualPriceText: "",
    discount_price_box: "",
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
        // console.log(res.data);
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

  const deleteDataFromCart = (id) => {
    // console.log(id)
    axios.delete(`https://clickandbuy-json-server.onrender.com/mensdata/${id}`);
  };
  const update = (id ) => {
    console.log(id);
    axios.patch(`https://clickandbuy-json-server.onrender.com/mensdata/${id}`, {
      status:active,
    }).then((r)=>{
      console.log(r.data)
    })
  };
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
              name={product.brand_namez}
              value={product.brand_namez}
              className={styles.form_Input}
              onChange={(e) => setProduct({ ...product, brand_namez: e.target.value })}
            />
          </div>
          <div>
            <Select
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="mensdata">Men's Data</option>
              <option value="womensdata">Women's Data</option>
            </Select>
          </div>
          <div>
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
              value={product.discount_price_box}
              name={product.discount_price_box}
              onChange={(e) =>
                setProduct({ ...product, discount_price_box: e.target.value })
              }
              placeholder="actualPriceText"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={handleSubmit}>Add Product</Button>
          </div>
        </Box>
        <Box
          style={{ overflow: "scroll" }}
          w="50%"
          h="580px"
          scrollBehavior="auto"
        >
          <Button>mens</Button>
          <Button>womens</Button>
          <Box>
            <div>
              {mensData.length > 0 &&
                mensData.map((item) => {
                  return (
                    <div key={item.id}>
                      <Box>{item.brand_namez}</Box>
                      <Box>
                        

                        <div>{item.clr_shade_4}</div>

                        <div>₹{item.discount_price_box}</div>

                        <div>₹{item.actualPriceText} </div>
                        <Box justifyContent={"space-around"}>
                        <Link to={`/product/${item.id}`} >
                          <Button color={"white"} bg={"teal"} _hover={{ bg:"#F9F5EB" ,color:"teal",border:"2px solid teal " }}> Edit</Button> 
                        </Link>
                        {item.status?<Button _hover={{ bg:"#F9F5EB" ,color:"green",border:"2px solid green " }} bg="green" color={"white"} onClick={()=>{
                          update(item.id);
                          setActive(false)
                          alert("Inactive")
                          }} ml="70px">active</Button>
                        :<Button bg="red.400" ml="70px" onClick={()=>{
                          update(item.id);setActive(true)
                          alert("active")}}>Inactive</Button>}
                        <Button
                          bg="red"
                          color={"white"}
                          _hover={{ bg:"#F9F5EB" ,color:"red",border:"2px solid red " }}
                          onClick={() => deleteDataFromCart(item.id)}
                          ml="70px"
                        >
                          Delete
                        </Button>
                        </Box>
                      </Box>
                    </div>
                  );
                })}
            </div>
          </Box>{" "}
        </Box>
      </Box>
    </div>
  );
};

export default AdminPage;
