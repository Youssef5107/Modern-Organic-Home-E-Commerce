import data from "../../data/products.json";
export default function BedroomCollection() {
  const bedroomProducts = data.collections.find(
    (collection) => collection.id === "bedroom",
  );

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md animate-page-enter">
      {/* Filter & Sort Bar */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 mb-stack-md reveal-on-scroll">
        <div className="flex flex-wrap gap-2 items-center">
          <button className="px-4 py-2 rounded-xl bg-secondary-container/30 text-primary border border-primary/10 font-label-md text-label-md flex items-center gap-2 hover:bg-secondary-container/50 transition-all">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Filters
          </button>
          <div className="h-6 w-[1px] bg-outline-variant/30 mx-2 hidden md:block"></div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="px-4 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap cursor-pointer hover:bg-surface-variant transition-colors">
              Linen
            </span>
            <span className="px-4 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap cursor-pointer hover:bg-surface-variant transition-colors">
              Quilts
            </span>
            <span className="px-4 py-2 rounded-xl bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap cursor-pointer hover:bg-surface-variant transition-colors">
              Lighting
            </span>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-between items-center gap-4">
          <p className="font-label-sm text-label-sm text-outline">
            12 Products
          </p>
          <button className="px-4 py-2 rounded-xl text-on-surface-variant font-label-md text-label-md flex items-center gap-2 hover:opacity-80 transition-opacity">
            Sort: Featured
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter reveal-on-scroll">
        {bedroomProducts.products.map((product) => (
          <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
              <img
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                alt="A professional product photograph of high-end, organic linen pillow covers in a soft terracotta hue. The covers are neatly stacked on a textured light oak surface."
                src={product.image_url}
              />
              <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  favorite
                </span>
              </button>
              {product.is_new_arrival ? (
                <div className="absolute bottom-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full">
                  New Arrival
                </div>
              ) : null}
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant italic">
                {product.series}
              </p>
              <p className="font-label-md text-label-md text-primary mt-1">
                {data.currency}
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Editorial Lookbook Section */}
      <section className="mt-stack-lg mb-stack-lg reveal-on-scroll">
        <div className="relative h-[500px] rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            alt="A large-scale, editorial lifestyle photograph of a complete, beautifully styled modern organic bedroom."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcToPyMYHHigJ_KvFmAszqUEsxfGief7fZ6Rdmnu_od0tNqaiyECLym7NeA_r_4CbbBML3caJlTFFURBK7gYGBlRcwMlD5UZAgRWsz58fBRqBT1NUF2Fp8a3mit2gxOFfzU6eKuCZT71QFrMYkXZqHTEwTO8SLiO_bUZzVfeoxrdgL6qtfUtAK9ed6xy_K3s_mdBK33BAysC124oAMT3sb2VtBzYvLr9Hv8DWa37Mx6C5KVrp5FWM"
          />
          <div className="absolute bottom-10 left-10 z-20 max-w-md">
            <h2 className="font-headline-xl text-headline-xl text-white mb-4">
              The Restorative Retreat
            </h2>
            <p className="font-body-lg text-body-lg text-white/90 mb-6">
              Discover the art of slow mornings with our curated bedroom
              essentials, designed for comfort and crafted with integrity.
            </p>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors active:scale-95">
              Shop The Look
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
