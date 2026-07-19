import FavoriteIcon from "@mui/icons-material/Favorite";
export default function Home() {
  const muiIconStyle = { color: "inherit", fontSize: "24px" };

  return (
    <div className="animate-page-enter ">
      {/* Hero Section */}
      <section className="relative w-full h-[618px] md:h-[707px] overflow-hidden reveal-on-scroll">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAi0KHY1XXICMr1mepQy0LAY8b02MiF_Lt7rVqOcwVhmQlKlJI2kBs2VaYZLpWFQJ5g0W4zQvzMqiv1kziIGA9izOukcgMI8JbhQ4UnPLaq-SfTxAXmeeJ6osP9h2sgHMeCDWs2x3He1tBhp1HMcMXScau43YSO80RpiVFD9hn_NgVJZcZvmSTBTtKmW1nCpdP9spKQGw018yDTwhpTXYlRw3swOU9k04w98vwX98CyNNRNopH5pTI')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-2xl">
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block">
              New Season
            </span>
            <h2 className="font-headline-xl text-headline-xl md:text-[64px] text-on-background mb-6 leading-tight">
              The Autumn Collection
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Curated pieces inspired by the raw beauty of late harvest and
              shifting light. Bring nature's quietude indoors.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95">
                Explore Collection
              </button>
              <button className="border border-secondary text-secondary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-secondary/5 transition-all active:scale-95">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
        <div className="flex justify-between items-end mb-stack-md">
          <div>
            <h3 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
              Shop by Room
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Functional beauty for every corner of your life.
            </p>
          </div>
          <button className="font-label-md text-label-md text-primary underline underline-offset-4 hover:text-primary-container transition-colors">
            View All Categories
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Living Room Card */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpb13amzs6ie0nDJwZLSV9_Sb5jHAohCyPtN4bAucxdnOwkEjuInU5WZPqZCno3trC3XgbPMI-gocCRbt1EER07K4dCHBgAKQetL-pE8qVMRnlEsCASWYfswSKA1ClqYlnjf9af87XTO4nUMNSXkmgolyicpzipFRcCFuDIWM4x1EdpbBpGdU76zzRyczjsIwirQdsLvco_XnDQyerne-l9B-IFLw94eRAPqLlLikALs723_BIlm4')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <h4 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
              Living Room
            </h4>
            <span className="text-label-sm font-label-sm text-on-surface-variant">
              42 Items
            </span>
          </div>

          {/* Bedroom Card */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXRCwHJbAqZXfBL7RuTybYW-mq7_yvBBSd6tWTQiXCR21ofSpnoiEX9xS9zHpJe-oCXQStjdoXowzZbN4ob65Ij4cMypxU65JRKZOUQROvvDd5_EzTzF0tVjE-Qb5kEaQuRQxYXVAysvrnF70A1M9b___Y5z830NprH6ALm2InohSRp5haGEskJQzG8nYoBI8jzX15l_wNzRIJb9zX9YPjrqQeiIgdgUemG9_dHDCGqNb-wOs60OU')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <h4 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
              Bedroom
            </h4>
            <span className="text-label-sm font-label-sm text-on-surface-variant">
              28 Items
            </span>
          </div>

          {/* Dining Card */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYbiZSRRXIjtBBvBaojPlpz-QFqh-OJZ4bNyov4Ujpmlk2YIsEawrF3sbv26jVKkBg1hg1H2Yu6zufw_10PtKyi7icIVKFs--rbII1vmrah8rWhILOAT6RFiIof4srz3s2HH9A1KJ5TJo1ltdRqKx529Js9NosT4a9u3e5NPFFVZEkrUse1og9BLLnDDBSaZIYj6HaDCAmbHAK2KsH3JApYfz1NdrlhrutQhPV5AFRL45OGfvSnpk')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <h4 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
              Dining
            </h4>
            <span className="text-label-sm font-label-sm text-on-surface-variant">
              15 Items
            </span>
          </div>
        </div>
      </section>

      {/* New Arrivals Product Cards Section */}
      <section className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
        <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-stack-md">
          New Arrivals
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {/* Product Card 1 */}
          <div className="group flex flex-col">
            <div className="relative aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-LeWeFJVN_lvrScnwzwCHGEuTCg2nkXj1Pa0H5VnGu-cMWcvJ3O8e_8w-KQI4gsiS5S6VVWWVRs05WiKWq-9ltDuDq6WHP2TwZXJEaBaCd3-1D-qM_-htWmyX5PnkqSW31WSIx_16cnvyd4IKJUTDYdhRWFKdllNeKJ8FtT0lpTR9PDeTGzT_K84Tgxvl3riLEe3TwFAEYt5aEWgoLYxoVPWC0cU_hdwQ_s8qwZ761rfnB0LjNQI"
                alt="Earthen Pitcher"
              />
              <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FavoriteIcon style={muiIconStyle} />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
                  Earthen Pitcher
                </h5>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Handmade Ceramics
                </p>
              </div>
              <span className="font-label-md text-label-md text-primary">
                $84.00
              </span>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="group flex flex-col">
            <div className="relative aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-LyKw3d0t5--gsUltHkjJm2CiLfI6stIJHDDE-yVYT0vT3FGFgTytQaxPQZIZQxZKDlO7aVcnnuax_ahg42aIxl2iSWF5zUYG5XQIewA3Z28-XXfcUKZXC5wYKrMdpHBOFFhH9z9fPWWJfG-dMWNIcMbxND-9NGa1nYtvXXdd2lRq-I9l1AzBppqkCpJUE7OLnOw3qboN035gRDF0Q6snnaSVjrKlaSwUWXQmN24wY0koE7ABrKg"
                alt="Linen Pillar Lamp"
              />
              <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FavoriteIcon style={muiIconStyle} />
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
                  Linen Pillar Lamp
                </h5>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Lighting
                </p>
              </div>
              <span className="font-label-md text-label-md text-primary">
                $210.00
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden flex items-center justify-center text-center p-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVubVND7K_bZ89rfbPtSOSBZl8dE3PXhx1YDvo4dEO3WwCwKCvpakCLwzVAVKF_2YQn1w7ddm1OMlcGl-oBy6xzYobHdcFDyJzWMWXQWb9h0Q-LQlKBpOMGR08gpUNpV2SIuG_cTQ4Vp4V2XlqCkf9n6D-WgMbXHx3_R1n6FsoEsvb3KhGX2ml44Za7TGqbOpUyGKmdebku5SLZmuwjmQ-FDBGCH7I4h1RkKIVQ1ORmlQgSQ9JlWI')",
            }}
          ></div>
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-2xl text-white">
            <h3 className="font-headline-lg mb-6">
              Built by Hand, Inspired by Earth
            </h3>
            <p className="font-body-lg text-white/90 mb-8">
              We partner with local artisans to bring you pieces that aren't
              just objects, but stories of material, time, and touch.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95">
              Our Philosophy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
