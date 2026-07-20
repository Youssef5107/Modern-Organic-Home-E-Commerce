import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 pt-8 pb-16 animate-page-enter ">
        {/* Filter/Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-stack-lg animate-fade-in">
          <div>
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-2">
              Our Curated Shop
            </h2>
            <p className="text-on-surface-variant max-w-lg">
              Functional beauty for the slow living space. Every piece is
              selected for its tactile quality and sustainable origin.
            </p>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 [scrollbar-width:thin] [::-webkit-scrollbar]:h-1">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary-container text-on-secondary-container rounded-full font-label-md whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px] select-none">
                tune
              </span>
              Filter
            </button>
            <div className="h-6 w-px bg-outline-variant mx-1"></div>
            <button className="px-5 py-2.5 bg-surface-container-high hover:bg-surface-container-highest rounded-full font-label-md text-on-surface-variant whitespace-nowrap transition-colors">
              Ceramics
            </button>
            <button className="px-5 py-2.5 bg-surface-container-high hover:bg-surface-container-highest rounded-full font-label-md text-on-surface-variant whitespace-nowrap transition-colors">
              Textiles
            </button>
            <button className="px-5 py-2.5 bg-surface-container-high hover:bg-surface-container-highest rounded-full font-label-md text-on-surface-variant whitespace-nowrap transition-colors">
              Furniture
            </button>
          </div>
        </div>

        {/* Section 1: Ceramics */}
        <section className="mb-stack-lg reveal-on-scroll">
          <div className="flex items-end justify-between mb-stack-sm">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Ceramics
            </h3>
            <Link
              className="font-label-md text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
              to={"./ceramics"}
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="group relative overflow-hidden bg-white rounded-xl [transition:transform_0.3s,box-shadow_0.3s] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(111,52,41,0.08)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  alt="Handcrafted Ceramic Vase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtqoAXms5j5QaYSumseDqKWED1A_gyXGyr9dr7itSHBLJgdVkGKF_HNjgsVTIiSg1E9xrkXz_eTGR5u-t_4hvKqzmAtPPyfpcOn1S6-i8bwFoyvhtrfNywKuDmfPKQTfDEl2zr6Wy7LWK97X1FiOoR1JaDFffr9BiToA2PBwTytuQ1KE2ZHLtv9pbzUEyKLslVAzt2Ps2bWOLoSnDEAmEwl-IF-SDNPbXEjK-EH53IFjYWXfMvNA8SlrAoomFcNmlm"
                />
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="p-5">
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                  STORY PIECE
                </p>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                  Handcrafted Ceramic Vase
                </h4>
                <p className="text-primary font-semibold">$84.00</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden bg-white rounded-xl [transition:transform_0.3s,box-shadow_0.3s] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(111,52,41,0.08)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  alt="Earthen Pitcher"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzkU2o5AIefoOtm1Falr8OksOv3i050xwvBvtS5iOmRtV7g1fjv4Eu0Qor-Q2qvM3M9KJDm_siVU0DEZGHFtDwlLoDHapSxUMgUNOgXYxcOqC4c_btBFpDm5uTvMTRlnUDRojH9YXtWUXSiu4wVtu92BEt1BjHnvGhZ59cYbnsSy1n9jDKJhsx9OzHqNhASeJUj2TbacJyGfm3XrPqPktwoP1ixm0bXI7FIk7_EdcxrrCgZD88dqM"
                />
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="p-5">
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                  DAILY RITUAL
                </p>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                  Earthen Pitcher
                </h4>
                <p className="text-primary font-semibold">$62.00</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden bg-white rounded-xl [transition:transform_0.3s,box-shadow_0.3s] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(111,52,41,0.08)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  alt="Basin Bowls, Set of 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZnxBWkTL8sJHEWtsheefdb666-gLr8WgWKTsUIo2T7dKmOh3KicXAxv1BEGzD9j8jMrLeA7DBs0u08fUqGg9weYPaN-trhzLNRM--y--whaHOUa5TV5tpNvQU7BcQOXa79EMFuqML3UfWU4Gq-LVMqIVDK6wPYAidRFBGHDKaaL7ODZof7xMQnCkHII4bKNt9KSbUGrQMxxjnsyURzhVV2S5a5-wrgEGUNHqJyRLKtiyFKt-1Bx0"
                />
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="p-5">
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                  STAPLE
                </p>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                  Basin Bowls, Set of 3
                </h4>
                <p className="text-primary font-semibold">$110.00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Living Room */}
        <section className="mb-stack-lg reveal-on-scroll">
          <div className="flex items-end justify-between mb-stack-sm">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Living Room
            </h3>
            <Link
              className="font-label-md text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
              to={"./living-rooms"}
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Wide Card 1 */}
            <div className="group relative overflow-hidden bg-white rounded-xl [transition:transform_0.3s,box-shadow_0.3s] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(111,52,41,0.08)] md:col-span-1">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Solid Walnut Coffee Table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy4c9AeByxgNarlcyA4jdGeB7IAQE3qt0zTZsEhfL2PEp38Cpr4mczk-szQFy1hU12_2EYgBEKiFx_CHtujCQVDvJKHkg5A_vVxNddNDFJ5jdvb6PKZxvCF1zFaGXvIUMH3lTbygPY15-xNZIVqTpwpKcoLJi9Y_Pr-6AtVZUktLge5NnclcLruvEd8UU1bq7_2TiREJ13dp8k97qCIsExqG_8PFrKwhAAYCdoLiU6ayTLPS9bK8k"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                      SUSTAINABLE WOOD
                    </p>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                      Solid Walnut Coffee Table
                    </h4>
                  </div>
                  <p className="text-primary font-semibold text-lg">$540.00</p>
                </div>
              </div>
            </div>

            {/* Wide Card 2 */}
            <div className="group relative overflow-hidden bg-white rounded-xl [transition:transform_0.3s,box-shadow_0.3s] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(111,52,41,0.08)] md:col-span-1">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Textured Wool Throw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-BbskSKcsxf0j076BhHoVUW_ecrKJAq2xGUE_CmlJKBJgo2MlKCLt1VL54lcpeWCpiGfbgNtEx3dsTpdsZfRECuevQTScYYuMKt0FO_1RqBBCjtzlk2ov4r9cJjjimu7hHGF3BIM7XqsPlIv4n9BXPjaWsQZUaHbUBBa002jBdgB_AQpYh-MklXjTOmP_SN3XOGEaUfI3hjSYTcWmG5RdTpRV2WYDJ2NEmaq6CKJ4NPwUlJANUno"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                      COZY ESSENTIALS
                    </p>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                      Textured Wool Throw
                    </h4>
                  </div>
                  <p className="text-primary font-semibold text-lg">$145.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Dining */}
        <section className="mb-stack-lg reveal-on-scroll">
          <div className="flex items-end justify-between mb-stack-sm">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Dining
            </h3>
            <Link
              className="font-label-md text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
              to={"./dining-rooms"}
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Product 1: Earthen Pitcher */}
            <div className="group relative overflow-hidden bg-white rounded-xl product-card-hover transition-all duration-300 md:col-span-1">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Earthen Pitcher"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzkU2o5AIefoOtm1Falr8OksOv3i050xwvBvtS5iOmRtV7g1fjv4Eu0Qor-Q2qvM3M9KJDm_siVU0DEZGHFtDwlLoDHapSxUMgUNOgXYxcOqC4c_btBFpDm5uTvMTRlnUDRojH9YXtWUXSiu4wVtu92BEt1BjHnvGhZ59cYbnsSy1n9jDKJhsx9OzHqNhASeJUj2TbacJyGfm3XrPqPktwoP1ixm0bXI7FIk7_EdcxrrCgZD88dqM"
                />
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                      DAILY RITUAL
                    </p>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                      Earthen Pitcher
                    </h4>
                  </div>
                  <p className="text-primary font-semibold text-lg">$84.00</p>
                </div>
              </div>
            </div>

            {/* Product 2: Reclaimed Oak Serving Board */}
            <div className="group relative overflow-hidden bg-white rounded-xl product-card-hover transition-all duration-300 md:col-span-1">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Reclaimed Oak Serving Board"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy4c9AeByxgNarlcyA4jdGeB7IAQE3qt0zTZsEhfL2PEp38Cpr4mczk-szQFy1hU12_2EYgBEKiFx_CHtujCQVDvJKHkg5A_vVxNddNDFJ5jdvb6PKZxvCF1zFaGXvIUMH3lTbygPY15-xNZIVqTpwpKcoLJi9Y_Pr-6AtVZUktLge5NnclcLruvEd8UU1bq7_2TiREJ13dp8k97qCIsExqG_8PFrKwhAAYCdoLiU6ayTLPS9bK8k"
                />
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                      SUSTAINABLE WOOD
                    </p>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                      Reclaimed Oak Serving Board
                    </h4>
                  </div>
                  <p className="text-primary font-semibold text-lg">$125.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Bedroom */}
        <section className="mb-stack-lg reveal-on-scroll">
          <div className="flex items-end justify-between mb-stack-sm">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Bedroom
            </h3>
            <Link
              className="font-label-md text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
              to={"./bedrooms"}
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {/* Small Item 1 */}
            <div className="group flex flex-col gap-4">
              <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative">
                <img
                  alt="Linen Pillow Cover in Sage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT0dVoJTzD2Uysqzw3ioNt9rDV7biZiQLXYEhG30DNiKSaeSeQ7Mfs2cYHNEjgGtFeFtr_n-bIUKsbJkImALSEEJRAsFferxW8fLQ07XhKPCbS1rjw8V9aP2TLld-Shl9--9aQ5XQ-sZqfPTZOnu6wjHfqxw4e4gCe-sv2r0NwuwNhtaBshhwPPDcGeZjOR2fls0_izIy8l1m0OFhJSDRS_qpCKM7cMzewHAhno_35K84JYi2nZPI"
                />
                <div className="absolute top-2 right-2 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-widest text-primary uppercase">
                  Best Seller
                </div>
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div>
                <h4 className="font-label-md text-on-surface">
                  Linen Pillow Cover in Sage
                </h4>
                <p className="text-on-surface-variant font-label-sm">$38.00</p>
              </div>
            </div>

            {/* Small Item 2 */}
            <div className="group flex flex-col gap-4">
              <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative">
                <img
                  alt="Linen Pillow Cover in Moss"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmuDFTBgrxQ0HveU_xce-exBenDZ8hjviwdTaX2Tp-KklgiS5DeE_LXPgRNMXMxFo1iAKnde2FSyvvLKglRLXK7FaTQHFboPWAQhWfO-r9qYsVlxSN3dYtrqHgptm3Uoekv3fJYUE_H9ewSj_kVnPsWi1YR6chgq2CRc556z5nAFEuhDXkw7QCI9y7WqGWIZ04rfOWqlmpGCsEpbVsucgP1lAuaQUwziJsER3dBEphCrfTbhyV1UE"
                />
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div>
                <h4 className="font-label-md text-on-surface">
                  Linen Pillow Cover in Moss
                </h4>
                <p className="text-on-surface-variant font-label-sm">$38.00</p>
              </div>
            </div>

            {/* Small Item 3 */}
            <div className="group flex flex-col gap-4">
              <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative">
                <img
                  alt="Hush Ceramic Candle"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFYMYrrDZfq63zEXe0yBUapG-1ggM8HsU95tLI429_0_KL4hTaqGKegf2NQU2xUhtbehX_NCamYb-MStP7Hkts40H1HS3cu-rIkCky7IWQcSkC1K6vLLW_mDTNh90A_aYDIxMI-3WNd7iRucNMhshSmWlg0wt_ecznB3-iagkLF8DWFliMWkysdOEz8Rkfw1HmZKTC2a-XqrM_-7mtaUJUlmejMFFmMdcUZlyYED9SCLlEFSsXY4M"
                />
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div>
                <h4 className="font-label-md text-on-surface">
                  Hush Ceramic Candle
                </h4>
                <p className="text-on-surface-variant font-label-sm">$42.00</p>
              </div>
            </div>

            {/* Small Item 4 */}
            <div className="group flex flex-col gap-4">
              <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative">
                <img
                  alt="Cloud Quilt Cover"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXLt5NUdv3T7Xq3iiXJGJCbtSyRsnVdMDxRfh8Za-nfBz3wJG9IXO9rd2sa55c6pbj3y6DQiwgMCiLRQjJdJgVFI8wfYeD2O8jp-XqyQtHtz51sU2D_id_EjQ_uIjp6PZNNH8fc5aQMjms2j9LVkTn6xVLRKbhTgQmdIuIm5zkvtBTXVGYnl7jQI0E92Z9dfE7gC6TOVeNfiraRJBL6czvFZrsBLJV7TbrLqQnsLCx2QyyaNvyLe4"
                />
                <button className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    favorite
                  </span>
                </button>
                <button className="absolute bottom-4 right-4 bg-primary text-on-primary p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">
                    add_shopping_cart
                  </span>
                </button>
              </div>
              <div>
                <h4 className="font-label-md text-on-surface">
                  Cloud Quilt Cover
                </h4>
                <p className="text-on-surface-variant font-label-sm">$280.00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="bg-surface-container rounded-3xl p-8 md:p-16 flex flex-col items-center text-center reveal-on-scroll">
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Join our community
          </h3>
          <p className="text-on-surface-variant mb-8 max-w-md">
            Receive seasonal curation notes, design inspiration, and early
            access to new collections.
          </p>
          <div className="flex flex-col md:flex-row w-full max-w-md gap-4">
            <input
              className="flex-1 bg-surface-container-lowest border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 outline-none"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-primary text-white px-8 py-3 rounded-full font-label-md hover:bg-primary-container transition-colors active:scale-95 duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
