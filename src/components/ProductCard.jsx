

function ProductCard({ product, categories }) {
  const category = categories?.find(
    (item) => Number(item.id) === Number(product.category_id)
  );

  return (
    
   <div className="flex w-[328px] flex-col md:w-[239px]">
      <div className="flex h-[427px] w-full items-center justify-center overflow-hidden bg-[#F5F5F5]">
        <img
          src={product.images?.[0]?.url}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      
      <div className="flex h-[188px] w-full flex-col items-center gap-[10px] px-[25px] pb-[35px] pt-[25px] text-center">
        <h5 className="font-[Montserrat] text-base font-bold leading-6 tracking-[0.1px] text-[#252B42]">
          {product.name}
        </h5>

        <a
          href="#"
          className="font-[Montserrat] text-sm font-bold leading-6 tracking-[0.2px] text-[#737373]"
        >
          {category?.title || "Category"}
        </a>

        <div className="flex gap-[5px]">
          <h5 className="font-[Montserrat] text-base font-bold leading-6 tracking-[0.1px] text-[#BDBDBD] line-through">
            ${(product.price * 1.3).toFixed(2)}
          </h5>

          <h5 className="font-[Montserrat] text-base font-bold leading-6 tracking-[0.1px] text-[#23856D]">
            ${product.price}
          </h5>
        </div>

        <div className="flex gap-[6px]">
          <span className="h-4 w-4 rounded-full bg-[#23A6F0]"></span>
          <span className="h-4 w-4 rounded-full bg-[#23856D]"></span>
          <span className="h-4 w-4 rounded-full bg-[#E77C40]"></span>
          <span className="h-4 w-4 rounded-full bg-[#252B42]"></span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;