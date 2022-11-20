import { Box, Button, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./AdminPage.module.css";
const update = ({ id }) => {
  console.log(id);
  axios.patch(`https://clickandbuy-json-server.onrender.com/mensdata/${id}`, {
    id: "",
  });
};
export const getCiteByid = ({ id }) =>
  fetch(`https://clickandbuy-json-server.onrender.com/mensdata/${id}`).then(
    (res) => res.json()
  );
const Edit = () => {
  var name = JSON.parse(localStorage.getItem("username"));
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({
    col_sm_4_href: data.col_sm_4_href,
    productImgTagSrc: data.productImgTagSrc,
    plp: data.pip,
    brand_namez: data.brand_namez,
    clr_shade_4: data.clr_shade_4,
    discountedPriceText: data.discountedPriceText,
    actualPriceText: data.actualPriceText,
    discount_price_box: data.discount_price_box,
    id: "",
  });
  const { id } = useParams();
  useEffect(() => {
    // setLoading(true);
    getCiteByid({ id })
      .then((res) => {
        // setLoading(false);
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        // setLoading(false);
      });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(product)
    axios
      .patch(
        `https://clickandbuy-json-server.onrender.com/mensdata/${id}`,
        product
      )
      .then((res) => {
        alert("Edit data successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Box>
      <Box id={styles.admin_header}>
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
          Edit Page
        </h3>
      </Box>
      <Box w="100%" display="flex" justifyContent="space-around">
        <Box>
          <Box>{data.brand_namez}</Box>

          <Box>{data.clr_shade_4}</Box>

          <Box>{`₹${data.discount_price_box}`}</Box>

          <Box>₹{data.actualPriceText} </Box>
        </Box>
        <Box>
          <Box W="50%">
            <Box>
              <Input
                placeholder="name"
                type="text"
                name={product.name}
                value={product.brand_namez}
                onChange={(e) =>
                  setProduct({ ...product, brand_namez: e.target.value })
                }
              />
            </Box>
            <Box>
              <Select
                name="category"
                //   onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Men's Data</option>
                <option value="mensdata">Men's Data</option>
                <option value="womensdata">Women's Data</option>
              </Select>
            </Box>
            <Box>
              <Input
                type="url"
                placeholder="Image URL"
                value={product.productImgTagSrc}
                name={product.productImgTagSrc}
                onChange={(e) =>
                  setProduct({ ...product, productImgTagSrc: e.target.value })
                }
              />
            </Box>
            <Box>
              <Input
                type="number"
                value={product.actualPriceText}
                name={product.actualPriceText}
                onChange={(e) =>
                  setProduct({ ...product, actualPriceText: e.target.value })
                }
                placeholder="actualPriceText"
              />
            </Box>
            <Box>
              <Input
                type="number"
                value={product.discount_price_box}
                name={product.discount_price_box}
                onChange={(e) =>
                  setProduct({ ...product, discount_price_box: e.target.value })
                }
                placeholder="discount_price_box"
              />
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Button onClick={handleSubmit}>Edit Product</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Edit;
