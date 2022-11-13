import { Box, H1 } from '@chakra-ui/react'
import React from 'react';
import Footer from '../../Components/Footer';
import { Navbar1 } from '../../Components/Nav';
import Navbar from '../../Components/Navbar';
import styles from "./HomePage.module.css"

export default function HomePage() {
    return (
        <div id={styles.Home_main_div}>
            <Navbar1 />
            <Navbar/>
            <Box id={styles.official_merch_store}>
                <Box>
                    <img src="https://images.bewakoof.com/uploads/grid/app/Oversized-sweatshirt-and-hoodies-1x1-m-1667798822.jpg" alt="" />
                </Box>
                <Box>
                    <img src="https://images.bewakoof.com/uploads/grid/app/official-merch-1x1-Static-banner-1667926321.png" alt="" />
                </Box>
                <Box>
                    <img src="https://images.bewakoof.com/uploads/grid/app/very-peri-collection-1x1-m-1667926321.jpg" alt="" />
                </Box>
            </Box>


            <Box id={styles.own_your_crazy_div}>
                <img id={styles.own_your_crazy_img} src='https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg' alt='own_your_crazy' />
            </Box>


            <Box id={styles.ni9_img_div}>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/New-thumbnail-DOTD-Men-1667900427.gif' alt='none' />
                    <p>Design Of The Day</p>
                </Box>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/new-thumbnail-243-1665572988.jpg' alt='none' />
                    <p>BestSellers</p>
                </Box>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-daily-deals-additional-10--off-01-1666012651.jpg' alt='none' />
                    <p>Hot Deals</p>
                </Box>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/custom-men--1660921672.jpg' alt='none' />
                    <p>Customization</p>
                </Box>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-new-arrival-1665498051.jpg' alt='none' />
                    <p>New Arrivals</p>
                </Box>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/newest-thumbnail-lastsizesleft-1666074760.jpg' alt='none' />
                    <p>Last Sizes Left</p>
                </Box>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/plus-size-1660921675.jpg' alt='none' />
                    <p>Plus Size</p>
                </Box>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/offiicale-merch-1660921674.jpg' alt='none' />
                    <p>Office Collaboration</p>
                </Box>
                <Box className={styles.ni9_images}>
                    <img src='https://images.bewakoof.com/uploads/grid/app/vote-1660921675.jpg' alt='none' />
                    <p>Vote for Design</p>
                </Box>
            </Box>

            <Box id={styles.happy_surprise_div}>
                <img src="https://images.bewakoof.com/uploads/grid/app/thun-strip-new-2022-desksite-1667395389.jpg" alt="Happy Surprise" />
            </Box>

            <Box id={styles.POPULAR_CATEGORIES}>
                <h1>POPULAR CATEGORIES</h1>
                <Box id={styles.popular_categories_div}>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-1-1665646057.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-fullsleeves-men-1665149767.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-oversizedtees-1661866116.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-7-1662981567.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-8-1662981567.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-6-1662981566.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-1661866109.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1661866115.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-shorts-1661866118.jpg" alt="" />

                    </Box>
                    <Box className={styles.popular_categories_img}>
                        <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-accessories-covers-1661866111.jpg" alt="" />

                    </Box>
                </Box>
            </Box>

            <Box id={styles.discount_pe_discount_div}>
                <h1>DISCOUNT PE DISCOUNT</h1>
                <Box className={styles.discount_img_div}>
                    <img className={styles.discount_img} src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2-at-599-1666352224.jpg" alt="" />
                    <img className={styles.discount_img} src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-buy2at899-1667809501.jpg" alt="" />
                </Box>
            </Box>

            <Box>
                <Box className={styles.discount_img_div}>
                    <img className={styles.discount_img} src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-plussize-store-men-1666532800.jpg" alt="" />
                    <img className={styles.discount_img} src="https://images.bewakoof.com/uploads/grid/app/new-midsize-banner-AOP-pyjamas-m-1667827799.jpg" alt="" />
                </Box>
            </Box>

<Box id={styles.bestsellers_for_men_main_div}>
    <h1>BESTSELLERS FOR MEN</h1>
            <Box id={styles.bestsellers_for_men_div}>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/men-s-white-what-the-duck-graphic-printed-oversized-t-shirt-553308-1667891931-1.jpg" alt="" />
                </Box>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/it-s-a-deal-oversized-t-shirt-552835-1667575078-1.jpg" alt="" />
                </Box>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/men-s-black-the-purrnisher-graphic-printed-oversized-t-shirt-552898-1667807326-1.jpg" alt="" />
                </Box>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/it-s-a-deal-half-sleeve-t-shirt-552837-1667574877-1.jpg" alt="" />
                </Box>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1667563188-1.jpg" alt="" />
                </Box>
            </Box>
            </Box>
            

            <Box id={styles.slide_div2}>
                <Box className={styles.slide_div_img}>
                    <img src="https://images.bewakoof.com/uploads/grid/app/comfy-solid-joggers-1x1-m-1667802359.jpg" alt="" />
                </Box>
                <Box className={styles.slide_div_img}>
                    <img src="https://images.bewakoof.com/uploads/grid/app/OVERSIZED-TEES-1X1-m-1667812348.gif" alt="" />
                </Box>
                <Box className={styles.slide_div_img}>
                    <img src="https://images.bewakoof.com/uploads/grid/app/Flatknit-sweater-1x1-m-1667910222.jpg" alt="" />
                </Box>
            </Box>

            <Box id={styles.bestsellers_for_men_main_div}>
    <h1>CLEARANCE ZONE</h1>
            <Box id={styles.bestsellers_for_men_div}>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/men-s-full-sleeve-t-shirts-1094-1659608683-1.jpg" alt="" />
                </Box>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/it-s-a-deal-oversized-t-shirt-552835-1667575078-1.jpg" alt="" />
                </Box>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/men-s-black-the-purrnisher-graphic-printed-oversized-t-shirt-552898-1667807326-1.jpg" alt="" />
                </Box>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/it-s-a-deal-half-sleeve-t-shirt-552837-1667574877-1.jpg" alt="" />
                </Box>
                <Box className={styles.bestseller_img}>
                    <img src="https://images.bewakoof.com/t320/men-s-blue-dope-bear-graphic-printed-oversized-t-shirt-547532-1667563188-1.jpg" alt="" />
                </Box>
            </Box>
            </Box>

            <Box id={styles.stoopid_collection_div}> 
                <h1>THE STOOPID COLLECTION</h1>
                <Box id={styles.stoopid_collection_grid_div}>
                <Box className={styles.stoopid_img}>
                    <img src="https://images.bewakoof.com/uploads/grid/app/jackets-mid-size-1667293853.jpg" alt="" />
                </Box>
                <Box className={styles.stoopid_img}>
                    <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-playbybewakoof-1666532963.jpg" alt="" />
                </Box>
                <Box className={styles.stoopid_img}>
                    <img src="https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner-1667495646.jpg" alt="" />
                </Box>
                <Box className={styles.stoopid_img}>
                    <img src="https://images.bewakoof.com/uploads/grid/app/me-shirt-men-1658682131--1--1666890085.png" alt="" />
                </Box>
                </Box>
            </Box>

            <Box id={styles.exclusive_div}>
                <img src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png" alt="" />
            </Box>

            <Box id={styles.exclusive_div}>
                <img src="https://images.bewakoof.com/uploads/grid/app/VoteForDesign-ThinStrip-Desktop-Revised-1667372740.gif" alt="" />
            </Box>
            <Footer/>
        </div>
    )
}
