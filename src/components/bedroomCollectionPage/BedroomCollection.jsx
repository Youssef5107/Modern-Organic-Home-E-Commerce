export default function BedroomCollection() {
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
        {/* Product 1 */}
        <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A professional product photograph of high-end, organic linen pillow covers in a soft terracotta hue. The covers are neatly stacked on a textured light oak surface."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaSDkjiAs6UTxsluAg4AyuKCvI6q8al9YCx6jFmDrzO2eilTLvkRj1rubCMmvFAfQuQnrTt_lr3_3xE5qXg3ILHdHExKcz6sm7swCdGLdTo1dmIh8rnNZbT-z0ZMsk7I0pz0KsGfJ6Fz6xAPJIMY2VVNlSbM6GHArzy8QqIBJUSREUxK3lTz87NFdm8XLnpaXFFgq7KGFwfWDuYFXyCaCxhCxZ-GdKN6PuRbtlAas958F4iqIZL-Q"
            />
            <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Washed Linen Pillow Cover
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Terracotta
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $48.00
            </p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="An editorial close-up of a premium sage green quilted bedspread made from recycled cotton."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqP-Z-5YU19zPqf2Xfae2qnbP_nNt-y48zYKjCC7KT29MKzeas2PtHnyf469aDD3e7FiBkJMCqUiqhxBO4KRkvo6ssvdeQJAYnP6WiV33qVdMWvHgXGBjPGJvavLZVDOSsQUXFTyQOklptrRgBZ_H2S3pxUylhPrcPl9Kb_debJEHeJwSfJqkpCe4asINREcg3eZ4jGcFInd5UwJO7pFd2kYFokmn_Bll8bw-f0r_Rx8knU3BsnCg"
            />
            <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Hand-Stitched Heirloom Quilt
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Sage Mist
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $240.00
            </p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A minimalist ceramic table lamp with a pleated linen shade, standing on a low wooden bedside table."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Ir46GmA7gXfVwuNBM5In_TmGLYmdnJr00_Drf8k8MEMbSXz_qAjOR-M2AcIHl33jLMFC9hYLq5-rd-FDtPyUwDWgFcyVSAnNS8CtPvqJr82b1mC5zvsT1CUVpS14QS_4yn_OzRtY43iixcW-tZJGGY2AlIQwnWmvLoEok0oSIUIdNycpir8JP17tRoGe5D5xRybyFWTtLeVtC1Fmvizo5rpd4oQzqu_jreRAosryKLLl33Izg_I"
            />
            <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Artisan Ceramic Table Lamp
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Sandstone
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $185.00
            </p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A luxurious set of organic cotton bed sheets in a deep charcoal grey, neatly folded on a minimalist white bed."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyZDrQajYB4VHFCfGcdUf9wDiBM6L2sDBpMregMg5gZ2iqPVMI3Dd_q0mylqpWVzu3SOxsrTflfCfbnfBbtD6kt0I1Ax6Bxoxm71Z_dKK5vPhKQp1Cxi5CxEc7iw2cdep6uaJ8dQkc336PwkKm3ksZiykqXqO2rswzBunrF-hwkByFG3vldUtTTeaPpKLnx6e_t0IO4OJpTsFg2hxY-Id0qhR_9IgbjwJ49iyr6QaZpeNv3ZKpBII"
            />
            <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Organic Cotton Percale Set
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Charcoal
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $160.00
            </p>
          </div>
        </div>

        {/* Product 5 */}
        <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A beautifully crafted wooden bedside carafe and glass set made of smoke-tinted hand-blown glass."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmhzLqFCH8bXF2OMgAhLqtcuUQb_F9Ixxgj315Jw8yVayerQhwu4Y1_1EAxdNDKzdwF1QvtfI7MNfPthxx25Yy7UNrVBf7xmAlFEC0jAj3DkwH7Oacos85ls240GdsXdtiGBfd73keDHHsFYTsvD-_eLCUS0EH2piw2qxZR9UaSpZjACe9n4-cya7Yn92uyg3NjFM_zLt7_YYRMCfeae37J_xxICzj30NGSQx30vmYP7yaCxq1LBk"
            />
            <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Hand-Blown Bedside Carafe
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Smoke
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $65.00
            </p>
          </div>
        </div>

        {/* Product 6 */}
        <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A soft, chunky knit wool throw blanket in an oatmeal color, draped casually over the corner of a contemporary bed."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkStQKgh-AIEXfLzYG4wMUwC0K6adLWVWR0NXx0lxTJrTSbBioVU-Z3903roc1AYB9Q11H8n1LKzZ8Tf64mCHwNF9yrnzYhtZAjyDPsm4FQalS_XNfh1WyWdwTXcna85NvdGJsggh1XMlnFV1e8ET4Ka8eEoSVZmdBMTiFm2A3Pu9gzMLueCYRt3MR5vC_QR-S0g7lrzKkvWlHiDeGXcNjRFP7fCC6yxJV43rRSW7ypE9wust5Atw"
            />
            <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Chunky Merino Throw
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Oatmeal
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $120.00
            </p>
          </div>
        </div>

        {/* Product 7 */}
        <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A pair of minimalist brass wall sconces with milk glass globes, installed on a soft-textured beige wall."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoCV9ysU9iFBAyB-EleRqWswtIzvHN1j62yuTbJTJCAq42hdrX0DWYuZ6MG-13bkba-XcRDvwGRjLXGsO9ERirHnwFXPeQ_h-KBWz_oCexvfwPmJFEgBapYPcbo4dOPs1Nl9zpTgM818d-z5XhIVPP-MMzqzT8pP0JFnybCeZpoCPmQgrB3UN9UDamr3X3leqAqvvprlxDseYMiIlAcFkSDie_R7AbqeVLaBfZhBmzsqGL9kXdVKg"
            />
            <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Brass &amp; Glass Wall Sconce
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Brushed Brass
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $145.00
            </p>
          </div>
        </div>

        {/* Product 8 */}
        <div className="group flex flex-col gap-3 cursor-pointer transition-transform duration-100 active:scale-[0.98]">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4]">
            <img
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="A set of three aromatic cedarwood and lavender scented candles in minimalist matte white ceramic jars."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg_9-hk4ViEk6JebRt7pZrz9pXmx2VYIAKfZwXug7GRqIRaZQLMlTrL-aHK6PcC2Yi0VrAqAdiBhGkHzIX3FfUoSLmVetm-Z5c-Z4eIokAu43wRStRi4eXiZ36I25AarySdC2LWt5tbmMXap5p06lqAkf1E8S30zheJSu8J1R87ssG7C5A2VSrG-Sxfrj4mOIS-UALPVcgcovthH33WwW_VVzm1Wfo0rAhOHRuuj1VCWRrMq7nKTk"
            />
            <button className="absolute top-3 right-3 p-2 bg-surface/80 backdrop-blur-sm rounded-full text-primary hover:bg-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                favorite
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-1 px-1">
            <h3 className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
              Evening Ritual Candle Set
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant italic">
              Cedar &amp; Lavender
            </p>
            <p className="font-label-md text-label-md text-primary mt-1">
              $72.00
            </p>
          </div>
        </div>
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
