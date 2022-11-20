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
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const initialRef = useRef(null);
  // const finalRef = useRef(null);
  const [productupdate, setProductupdate] = useState({
    col_sm_4_href: "",
    productImgTagSrc: "",
    plp: "SLIM FIT",
    brand_namez: "",
    clr_shade_4: "",
    discountedPriceText: "",
    actualPriceText: "",
    discount_price_box: "",
  });
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
  const update = (id) => {
    console.log(id)
    axios.patch(
      `https://clickandbuy-json-server.onrender.com/mensdata/${id}`,
      productupdate
    );
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
              name={product.name}
              value={product.name}
              className={styles.form_Input}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
              value={product.actualPriceText}
              name={product.actualPriceText}
              onChange={(e) =>
                setProduct({ ...product, actualPriceText: e.target.value })
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

                        <div>{`₹${item.discount_price_box}`}</div>

                        <div>{item.actualPriceText} </div>
                        <Button onClick={onOpen} ml="70px">
                          update
                        </Button>
                        <Button ml="70px">active</Button>
                        <Button
                          bg="red"
                          onClick={() => deleteDataFromCart(item.id)}
                          ml="70px"
                        >
                          Delete
                        </Button>
                        <Modal
                          // initialFocusRef={initialRef}
                          // finalFocusRef={finalRef}
                          isOpen={isOpen}
                          onClose={onClose}
                        >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Create your account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                              <FormControl>
                                <FormLabel>brand_namez</FormLabel>
                                <Input
                                  
                                  type="text"
                                  placeholder="brand_namez"
                                  name={productupdate.brand_namez}
                                  value={productupdate.brand_namez}
                                  onChange={(e) =>
                                    setProductupdate({
                                      ...productupdate,
                                      brand_namez: e.target.value,
                                    })
                                  }
                                />
                              </FormControl>

                              <FormControl mt={4}>
                                <FormLabel>price</FormLabel>
                                <Input placeholder="price" />
                              </FormControl>
                            </ModalBody>

                            <ModalFooter>
                              <Button
                                onClick={update(item.id)}
                                colorScheme="blue"
                                mr={3}
                              >
                                Save
                              </Button>
                              <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
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
