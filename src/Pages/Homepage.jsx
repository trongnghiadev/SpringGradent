import React, { useEffect } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../Redux/Customers/Product/Action";
import { findCategories } from "../Redux/Customers/Category/Action";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Homepage = () => {
  const { customersProduct, customerCategory } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findCategories());
  }, []);
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 999999999,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 100,
      stock: "",
    };
    dispatch(findProducts(data));
  }, []);
  function filterProductsByName(name) {
    return customersProduct?.products?.content
      ?.filter((product) => product.category?.parentCategory?.name === name)
      .map((product) => ({
        id: product.id,
        image: product.imageUrl,
        brand: product.brand,
        title: product.title,
        color: product.color,
        selling_price: product.discountedPrice || product.price,
        price: product.price,
        discount: product.discountPersent,
        size: product.sizes.map((size) => size.name).join(", "),
      }));
  }

  const filteredProductsHoaCuoi = filterProductsByName("hoachucmung");

  const filteredProductsChucMung = filterProductsByName("hoachucmung");

  const filteredProductsHoaTinhYeu = filterProductsByName("hoachucmung");

  const filteredProductsCayNgoaiTroi = filterProductsByName("hoachucmung");

  const filteredProductsCayTrongNha = filterProductsByName("hoachucmung");

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mx-auto w-4/5 h-1/2">
        <HomeCarousel images={homeCarouselData} />
      </div>
      <div className="space-y-10 py-20">
        <HomeProductSection
          data={filteredProductsHoaCuoi}
          section={"Hoa Cưới Dành Cho Bạn"}
        />
        <HomeProductSection
          data={filteredProductsChucMung}
          section={"Hoa Chúc Mừng"}
        />
        <HomeProductSection
          data={filteredProductsHoaTinhYeu}
          section={"Hoa Tình Yêu"}
        />
        <HomeProductSection
          data={filteredProductsCayNgoaiTroi}
          section={"Cây Ngoài Trời"}
        />
        <HomeProductSection
          data={filteredProductsCayTrongNha}
          section={"Cây Trong Nhà"}
        />
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>
      <MessengerCustomerChat pageId="117171744822319" appId="300019272928819" />
    </div>
  );
};

export default Homepage;
