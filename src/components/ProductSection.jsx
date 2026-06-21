import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function ProductSection() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axiosInstance
            .get("/products")
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.error(error);
            });
        axiosInstance.get("/categories").then((response) => {
            setCategories(response.data);
        });

    }, []);
    return (
        <section>
            <div className="mx-auto w-full max-w-[328px] py-[80px] md:max-w-[1124px]">
                <div className="mx-auto mb-[48px] flex w-[300px] flex-col items-center gap-[10px] text-center md:mb-[80px] md:w-[691px]">
                    <h2 className="font-[Montserrat] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#737373]">
                        Featured Products
                    </h2>

                    <h3 className="font-[Montserrat] text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#252B42]">
                        BESTSELLER PRODUCTS
                    </h3>

                    <p className="w-[261px] md:w-auto font-[Montserrat] text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

              <div className="flex flex-wrap justify-center gap-[30px] md:gap-[30px]">
                    {products.slice(0, 8).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            categories={categories}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductSection;