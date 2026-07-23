import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toggleFavorite } from "../../features/togglreFavorites/toggleProductsInfoSlice";
import data from "../../data/products.json";

export default function CardDetailsView() {
  const dispatch = useDispatch();
  const selectedCardId = useSelector(
    (state) => state.ProductsInfo.selectedCardId,
  );
  const favoriteIds = useSelector((state) => state.ProductsInfo.favoriteIds);
  const allProducts = data.collections.flatMap((col) => col.products || []);
  const selectedCard = allProducts.find(
    (product) => product.id == selectedCardId,
  );
  const isFavorited = favoriteIds.includes(selectedCard.id);
  console.log(selectedCard);

  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [commentRating, setCommentRating] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface shadow-sm opacity-90 px-5 md:px-margin-desktop h-16 flex justify-between items-center">
        <button
          aria-label="Go back"
          className="hover:bg-surface-variant/50 transition-colors duration-200 p-2 rounded-full active:scale-95 transition-transform duration-150"
        >
          <span className="material-symbols-outlined text-primary">
            arrow_back
          </span>
        </button>
        <h1 className="text-headline-md font-headline-md text-primary tracking-tight">
          Handcrafted
        </h1>
        <button
          aria-label="Shopping bag"
          className="hover:bg-surface-variant/50 transition-colors duration-200 p-2 rounded-full active:scale-95 transition-transform duration-150"
        >
          <span className="material-symbols-outlined text-primary">
            shopping_bag
          </span>
        </button>
      </header>

      <main className="flex-grow pt-16 pb-16">
        <div className="max-w-container-max mx-auto px-5 md:px-margin-desktop">
          {/* Hero Section / Gallery */}
          <section className="mt-base md:mt-stack-md grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
            <div className="relative aspect-[1.79] lg:aspect-square rounded-xl overflow-hidden organic-shadow bg-surface-container-low">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLvjIjQQrzcItvijrl0m1ApjcKfe--Z8oMpSzAPmNcqxTJrzD6n9PjkIqXebE7Afhu8y8LuRvndvymOorR7nC5WfLM9R7HDctbsq4CtI28LMtwwgWPWB8Ek2wpuB5yU52KDYWDDozhiHZqnPxRN7KqtSx26e3C8lg7xOuXn1vHqO5I7pAQbKm-zOCsrFRvnmRwjsV5MON9VCZ5FgxXEdoLayDmhcLyWXl-7la1rd8wLAB9SSIol4RWeF6Q"
                className="w-full h-full object-cover"
                alt="Artisanal ceramic vase set"
              />
              <div className="absolute top-4 right-4">
                <button
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary transition-opacity card-favorite-btn ${isFavorited ? "card-favorite-btn-active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(toggleFavorite(selectedCard.id));
                  }}
                >
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col space-y-stack-sm md:pl-gutter">
              <div className="space-y-1">
                <p className="font-label-md text-label-md text-secondary tracking-widest">
                  SIGNATURE SCULPTURAL SERIES
                </p>
                <h2 className="font-headline-xl text-headline-xl text-on-surface leading-none">
                  Handcrafted Ceramic Vase
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-headline-md text-headline-md text-primary">
                  $185.00
                </span>
                <div className="flex items-center text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-md text-label-md ml-1">
                    4.8 (124 reviews)
                  </span>
                </div>
              </div>

              <div className="pt-stack-sm border-t border-outline-variant/30">
                <h3 className="font-label-md text-label-md text-on-surface mb-2">
                  ABOUT THE PIECE
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Each vessel is a testament to the slow rhythm of the potter's
                  wheel. Meticulously hand-thrown using locally sourced
                  stoneware, the piece features an intentionally irregular
                  silhouette that celebrates its human origin. The natural
                  sandstone glaze reacts uniquely in the kiln, resulting in
                  subtle mineral speckles and a tactile, matte finish that
                  mimics the raw beauty of weathered earth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-stack-sm">
                <div className="bg-surface-container p-4 rounded-lg">
                  <span className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                    MATERIAL
                  </span>
                  <span className="font-body-md text-body-md text-on-surface">
                    Premium Stoneware
                  </span>
                </div>
                <div className="bg-surface-container p-4 rounded-lg">
                  <span className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                    TECHNIQUE
                  </span>
                  <span className="font-body-md text-body-md text-on-surface">
                    Wheel-Thrown
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="pt-stack-md">
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all shadow-md active:scale-95 duration-150 flex items-center justify-center gap-2">
                  ADD TO CART — $185.00
                </button>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="mt-stack-lg border-t border-outline-variant/30 pt-stack-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-sm mb-stack-md">
              <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-1">
                  Customer Reviews
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 0.5" }}
                    >
                      star_half
                    </span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Based on 124 reviews
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
                className="font-label-md text-label-md text-primary underline underline-offset-4 hover:text-primary-container transition-colors"
              >
                {isReviewFormOpen ? "Cancel" : "Write a review"}
              </button>
            </div>

            {/* Review Form */}
            {isReviewFormOpen && (
              <div className="mb-stack-lg bg-surface-container-low p-gutter rounded-xl border border-outline-variant/20">
                <h4 className="font-label-md text-label-md mb-4">
                  YOUR FEEDBACK
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                      <button
                        key={starIndex}
                        type="button"
                        onClick={() => setRating(starIndex)}
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontVariationSettings: `'FILL' ${rating >= starIndex ? 1 : 0}`,
                          }}
                        >
                          star
                        </span>
                      </button>
                    ))}
                  </div>
                  <textarea
                    placeholder="Tell us about your experience with this piece..."
                    className="w-full bg-surface-bright border-none rounded-xl focus:ring-1 focus:ring-primary p-4 font-body-md text-body-md min-h-[120px]"
                  />
                  <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all">
                    SUBMIT REVIEW
                  </button>
                </div>
              </div>
            )}

            {/* List of Comments */}
            <div className="space-y-stack-md">
              {/* Review 1 */}
              <div className="flex flex-col space-y-2 pb-stack-sm border-b border-outline-variant/20">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label-md text-label-md text-on-surface">
                      ELARA JENNINGS
                    </span>
                    <div className="flex text-primary text-sm mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    October 12, 2023
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed italic">
                  "The texture is even more beautiful in person. It has this
                  incredible grounding weight to it that you only get with
                  high-quality stoneware. It sits perfectly on my mantle."
                </p>
              </div>

              {/* Review 2 */}
              <div className="flex flex-col space-y-2 pb-stack-sm border-b border-outline-variant/20">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label-md text-label-md text-on-surface">
                      MARCUS THORNE
                    </span>
                    <div className="flex text-primary text-sm mt-1">
                      {[...Array(4)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 0" }}
                      >
                        star
                      </span>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    September 28, 2023
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  "A truly stunning piece of art. The glaze has subtle
                  variations that catch the afternoon light beautifully.
                  Shipping took a little longer than expected, but it was worth
                  the wait for something this special."
                </p>
              </div>

              {/* Review 3 */}
              <div className="flex flex-col space-y-2 pb-stack-sm border-b border-outline-variant/20">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label-md text-label-md text-on-surface">
                      SARAH CHEN
                    </span>
                    <div className="flex text-primary text-sm mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    August 15, 2023
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  "The sculptural form is so unique. It functions as a vase but
                  honestly stands alone as a sculpture. I've bought three pieces
                  from this series now and they are all flawless."
                </p>
              </div>

              {/* Quick Comment Bar */}
              <div className="mt-stack-md pt-stack-md border-t border-outline-variant/20 px-margin-mobile">
                <h4 className="font-label-md text-label-md mb-4">
                  SHARE YOUR THOUGHTS
                </h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-sm">
                  <div className="flex items-center gap-1 mb-2 md:mb-0">
                    {[1, 2, 3, 4, 5].map((starIdx) => (
                      <button
                        key={starIdx}
                        type="button"
                        onClick={() => setCommentRating(starIdx)}
                        className="text-primary hover:scale-110 transition-transform active:scale-95"
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontVariationSettings: `'FILL' ${commentRating >= starIdx ? 1 : 0}`,
                          }}
                        >
                          star
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 w-full md:w-auto flex-grow flex-wrap">
                    <input
                      type="text"
                      placeholder="Share your thoughts about this piece..."
                      className="flex-grow bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-2.5 font-body-md text-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                    <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm active:scale-95">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
