import React from 'react'
import f from "./Footer.module.css"
import { Button } from '@chakra-ui/react'


const data1top = " CUSTOMER SERVICE"
const data1 = [


    "Contact Us",
    "Track Order",
    "Return Order",
    "Cancel Order"
]
const data2top = " COMPANY"
const data2 = [

    " About Us",
    "We're Hiring",
    " Terms & Conditions",
    "Privacy Policy",
    "Blog"
]
const data3top = "CONNECT WITH US"
const data3 = [

    "4.7M People Like this",
    "1M Followers"

]
const data4top = "KEEP UP TO DATE"

const data4 = [

    " 15 Days return policy",
    "Cash on delivery"
]
const data5top = "DOWNLOAD THE APP"
const data6top = "100% SECURE PAYMENT"
const cd1="MEN'S CLOTHING"
const column1=[
   " Top Wear",
   " -------------    ",
"Men's New Arrivals",
"Men's Half Sleeve T-Shirts",
"Men's Hoodies & Sweatshirts",
"Men's Long Sleeve T-shirts",
"Men's Printed T-shirts",
"Men's Plain T-shirts",
"Men's Vests",
"Men's Polo T-Shirts",
"Men's Kurtas",
"Men's Combo T-Shirts",
"Men's Shirts",
"Men's Nightwear",
"Men's Plus Size Store",

"Bottom Wear",
"-------------     ",
"Men's Pajamas",
"Men's Boxer Shorts",
"Men's Shorts",
"Men's Track Pants",
"Men's Pants",
"Featured",
"     -------------     ",
"Men's Flip Flops",
"Men's Sliders",
"Marvel T-Shirts",
"Disney T-Shirts",
"Avengers T-Shirts",
"Star Wars T-Shirts",
"Batman T-Shirts",
"Superman T-Shirts",
"Joker T-Shirts"
]
const cd2="WOMEN'S CLOTHING"
const column2=[
   " Women's Top Wear",
   "-----------",

"Women's New Arrivals",
"Women's T-Shirts",
"Women's Hoodies & Sweatshirts",
"Women's Dresses",
"Women's 3/4 Sleeve T-Shirts",
"Women's Kurtis",
"Women's Combo T-Shirts",
"Women's Nightwear",
"Women's Plus Size Store",
"Women's Bottom Wear",
"Women's Pajamas",
"Women's Boxer Shorts",
"Women's Jeans",
"Women's Joggers",
"Women's Shorts",
"BAGS",
"---------",
"Laptop Bags",
"Small Backpacks",
"Featured",
"Women's Slides",
"Women's Flip Flops"
]
const cd3="MOBILE COVERS"
const column3=[
   " Brands",

  "  Apple",
   " Realme",
   " Samsung",
   " Xiaomi",
   " Oneplus",
   " Vivo",
    "Oppo"
]

const ListDiv = ({ data, datatop }) => {
    return (
        <>
            <p className={f.head}>
                {datatop}
            </p>
            <ul>
                {data.map((item) => (
                    <li className={f.tail}>{item}</li>
                ))}
            </ul>
        </>
    )
}
const ListDiv2 = ({ data, datatop }) => {
    return (
        <>
            <p className={f.head2}>
                {datatop}
            </p>
            <ul>
                {data.map((item) => (
                    <li className={f.tail}>{item}</li>
                ))}
            </ul>
        </>
    )
}

const Footer = () => {
    return (
        <div className={f.container}>
            <div className={f.main_container}>
                <p className={f.top_heading}>Click n Buy</p>
                <div className={f.customer_service}>
                    <div>
                        <ListDiv data={data1} datatop={data1top} />
                    </div>
                    <div>
                        <ListDiv data={data2} datatop={data2top} />
                    </div>
                    <div>
                        <ListDiv data={data3} datatop={data3top} />
                    </div>
                    <div>
                        <ListDiv data={data3} datatop={data4top} />
                        <div className={f.sunscribe}>
                            <input className={f.box} placeholder='Enter Email Address' type="text" />
                            <Button colorScheme='yellow'>Subscribe</Button>
                        </div>
                    </div>

                </div>

                <div className={f.app}>
                    <div>
                        <ListDiv data={data4} />
                    </div>
                    <div>
                        <p className={f.head}>
                            {data5top}
                        </p>
                        <div className={f.play}>
                            <img src="https://images.bewakoof.com/web/app_android_v1.png" alt="" />
                            <img src="https://images.bewakoof.com/web/app_ios_v1.png" alt="" />
                        </div>

                    </div>
                    <div>
                    <p className={f.head}>
                            {data6top}
                        </p>
                        <img src="https://images.bewakoof.com/web/secure-payments-image.png" alt="" />

                    </div>
                </div>
                <hr  className={f.line}/>
                <div className={f.list_container}>
                    <div>
                        <ListDiv2 data={column1} datatop={cd1}/>
                    </div>
                    <div>
                    <ListDiv2 data={column2} datatop={cd2}/>
                    </div>
                    <div>
                    <ListDiv2 data={column3} datatop={cd3}/>
                    </div>
                    <div>
                        <ul>
                            <li className={f.last_column}>FANBOOK</li>
                            <li className={f.last_column}>OFFERS</li>
                            <li className={f.last_column}>SITEMAP</li>
                        </ul>
                    </div>


                </div>
                <div className={f.para_div}>
                <h1 className={f.h1}>CLICK N BUY THE NEW AGE ONLINE SHOPPING EXPERIENCE.</h1>
                <p className={f.para} >Founded in 2012, Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof was created on the principle of creating impact through innovation, honesty and thoughtfulness.

</p>
<p className={f.para} >With a team of 400 members, and 2mn products sold till date. We like to experiment freely, which allows us to balance creativity and relatability, and our innovative designs. Our range of products is always fresh and up-to-date, and we clock sales of over 1 lakh products a month. Our innovation focus extends to our operations as well. We are vertically integrated, manufacture our own products, and cut out the middleman wherever possible. This direct-to-consumer model allows us to create high-quality fashion at affordable prices. A thoughtful brand, we actively attempt to minimize our environmental footprint and maximize our social impact. These efforts are integrated right into our day-to-day operations, from rainwater harvesting to paper packaging to employee benefits. To create an accessible, affordable and thoughtful experience of online shopping in India.

</p>
<h1 className={f.h1}>ONLINE SHOPPING AT CLICK N BUY IS HASSLE-FREE, CONVENIENT AND SUPER-EXCITING!</h1>

<p className={f.para} >Online Shopping has always been a fun and exciting task for most and more so when the shopping mall is none other than your own house. We have all had days when we have planned trips to the clothing store in advance, dreaming about what we would buy once we get there. Now we wouldnt think twice before indulging in some online shopping. Well, cut to todays time and age, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals and discounts to one of the most robust user interface amongst most online shopping sites in India, with many shopping filters to make your shopping experience truly hassle free. This in our own words is what we call Bewakoof.com.</p>
<p className={f.para} >Bewakoof, THE place to be when it comes to the coolest in online fashion, offers you fine, high-quality merchandise go ahead and indulge in a bit of online shopping for men and womens fashion. So browse through the exciting categories we have on offer from mens fashion to basic mens clothing as well as wide variety in womenswear and womens clothes to the amazing range of accessories, fill up your carts and get fast home delivery for all orders. All of this topped with our exclusive online shopping offers makes for an exciting, irresistible and uber cool combo! You can even gift some to your near and dear ones while being absolutely certain that it will put a smile on their faces.

</p>
<h1 className={f.h1}>BEWAKOOF.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!</h1>
<p className={f.para} >Online fashion is definitely more accessible with Bewakoof.com. Explore the latest collections in Marvel t-shirts including avengers t-shirts and captain America t-shirts in official merchandise. Apart from these, quirkiest of T-shirts that you wont find on any online shopping sites in India are showcased at Bewakoof.com. If your wardrobe has been longing for a cool overhaul then bewakoof.com will certainly be your best bet amongst all online shopping sites. Also, take a tour of our bewakoof blog to stay abreast with the latest runway trends and be a trendsetter among your immediate circles. What we wear speaks volumes of us they say. But what if what you wore actually spoke what your mood was! Havent we all wondered where we could get those quirky t-shirts and sport them with confidence? Sure otherwise getting them made or even buying them from otherwise expensive online shopping sites for clothes may cost you substantially but with Bewakoof.com, you will understand that you do not have to spend a fortune on online fashion to look great. Sliders, joggers, sweatshirts, bag and bag packs and so much more are just some of the other items you can grab hold of here.

</p>
<h1 className={f.h1}>AVAIL OF ONLINE SHOPPING BENEFITS AT BEWAKOOF.COM AND YOULL SHOP NOWHERE ELSE!</h1>
<p className={f.para} >Choose your product, get it ordered online, and we ensure that its delivery happens right at your doorstep anywhere in India. You just need to take care of the payment for the product from the comfort of your home, while we ensure free shipping all the time on almost everything with no strings attached. For any second thoughts after purchase, we have in place a return policy as well. One of the best you will find on any online shopping sites in India. For your online shopping experience to be safe and risk-free, we offer Cash On Delivery (COD) facility too. So you dont have to worry anymore about your hard earned money being stuck when you buy clothes online at bewakoof.com. Avail exciting online shopping offers like designs of the day and colour of the month when you shop with us. Make sure to use our easy 15-day returns policy, card or cash on delivery option and other customer-friendly features. A comprehensive sizing guide and detailed product descriptions coupled with high-resolution product shots will give you all the information to make the right buying decision. Give your wardrobe the much-needed upgrade with uber cool clothing head to Bewakoof.com for a great online shopping india experience now! Could you have asked for more?</p>
<h1 className={f.h1}>DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED ONLINE STORE!</h1>
<p className={f.para} >We dont just offer you exciting options in online fashion but also give you amazing accessories with really cool bags and bag packs to choose from. Our bags and backpacks are compact, hassle-free and easy to stuff things in. And all of this with the swag that you get to carry along with it. Cool designs are what form a major part of our online fashion and we also ensure our accessories section doesnt feel left out!</p>
<p className={f.para} >As for our accessories collection, they are also manufactured with impeccable quality materials. Our mobile covers are made from hard and durable polycarbonate, with a matte finish that will make for a great protection for your phone with the rough use that we put them through nowadays.

</p>
<h1 className={f.h1}>DESIGN OF THE DAY- THE COOLEST FEATURE EVER!</h1>
                <p className={f.para} >Who said good and cool t-shirts have to expensive? We bring newer, cooler and more youth oriented designs everyday. Yes! Everyday you get a new design to explore and buy. Although all our t-shirts are at an extremely affordable price, we decided to slash them down even further. But there is a catch. It is only for those designs and these exclusive prices are only valid for for a duration of 24 hours! Designs refresh every day at 3pm and are valid only for 24 hours. So you need to hurry and grab one fast before it ends. Because we believe everyone needs to have a fair chance at all of our fresh designs of the day.</p>
                <h1 className={f.h1}>CLICK N BUY.COM: THE UBER COOL ONLINE FASHION STORE FOR THE YOUTH</h1>
                <p className={f.para} >We, at Bewakoof.com, have all that you need to glam up your cool quotient. From an extensive range of plus size clothing, casual shirts for men and accessories for everyone, we purvey diversity of choices in online shopping india platform has to offer under one umbrella. The range of apparels like men t-shirts, joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants and more provide an array of options for the online customer to create a ravishing ensemble from. We try to target all kinds of customers and cater to their needs and preferences. Communication is the key to our functioning. Your Bewakoof Online fashion Shop has arrived! Do not miss the attractive online shopping offers everyday. Work your fashion with the wide range of apparels available only one click away! Make a statement with our best t-shirts online! Get more, pay less!

</p>
                <h1 className={f.h1}>OUR PHILOSOPHY</h1>
                <p className={f.para} >We believe in creating the kind of fashion, that makes you stand out as they are in line with the latest local and global trends of the industry, but also at the same time offer value for money functionality, with quality materials and comfortable and flattering prints. We try to look into the psyche of our customers, and try to get inspired by the conversations and experiences around us while creating our graphics, to ensure that they are relatable. We believe in constant and consistent innovation to ensure that our fans get nothing short of the bets at affordable rates! While most people do not know, we do not outsource the manufacturing of our products, everything from the conception of the designs to the manufacture and the styling that you see on the photographs of the banners and product pages of our website all happen in house! We go from yarn to product and since we 're vertically integrated and bring fashion from us directly to your doorstep without any middlemen that also further ensures reliability because for us it is not just about the money but about building the trust and credibility in our fans about our brand. We also make sure to decrease the impact on environment and are building initiatives that will help us with the same, for now by optimizing our processes to use only as much as we need from nature, rain water harvesting and recycling the water from our RO water facility, because we believe that the spirit of Bewakoof is about creating an impact by breaking conventions and having a different perspective!</p>
                </div>





            </div>




        </div>
    )
}

export default Footer