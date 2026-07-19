export default function Home() {
  return (
    <>
      <div className="grain-overlay"></div>
      {/* <!-- TopAppBar --> */}
      <header className="w-full top-0 sticky z-50 bg-background/80 backdrop-blur-md shadow-sm shadow-primary/5 h-16 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200">
            menu
          </button>
          <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md tracking-tight text-primary dark:text-primary-fixed-dim">
            Modern Organic Home
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="material-symbols-outlined text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200">
            search
          </button>
          <button className="hidden md:flex material-symbols-outlined text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200">
            shopping_bag
          </button>
        </div>
      </header>
      <main className="pb-32">
        {/* <!-- Hero Section: The Autumn Collection --> */}
        <section className="relative w-full h-[618px] md:h-[707px] overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            data-alt="A warm, atmospheric interior shot..."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAi0KHY1XXICMr1mepQy0LAY8b02MiF_Lt7rVqOcwVhmQlKlJI2kBs2VaYZLpWFQJ5g0W4zQvzMqiv1kziIGA9izOukcgMI8JbhQ4UnPLaq-SfTxAXmeeJ6osP9h2sgHMeCDWs2x3He1tBhp1HMcMXScau43YSO80RpiVFD9hn_NgVJZcZvmSTBTtKmW1nCpdP9spKQGw018yDTwhpTXYlRw3swOU9k04w98vwX98CyNNRNopH5pTI')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto">
            <div className="max-w-2xl animate-fade-in-up">
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
        {/* <!-- Categories Section --> */}
        <section className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-stack-md">
            <div>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
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
            {/* <!-- Living Room --> */}
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
            {/* <!-- Bedroom --> */}
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
            {/* <!-- Dining --> */}
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
        {/* <!-- New Arrivals Section --> */}
        <section className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-stack-md">
            New Arrivals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {/* Product Cards... */}
            <div className="group flex flex-col">
              <div className="relative aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-LeWeFJVN_lvrScnwzwCHGEuTCg2nkXj1Pa0H5VnGu-cMWcvJ3O8e_8w-KQI4gsiS5S6VVWWVRs05WiKWq-9ltDuDq6WHP2TwZXJEaBaCd3-1D-qM_-htWmyX5PnkqSW31WSIx_16cnvyd4IKJUTDYdhRWFKdllNeKJ8FtT0lpTR9PDeTGzT_K84Tgxvl3riLEe3TwFAEYt5aEWgoLYxoVPWC0cU_hdwQ_s8qwZ761rfnB0LjNQI"
                  alt="Earthen Pitcher"
                />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  favorite
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
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  favorite
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

            {/* Product Card 3 */}
            <div className="group flex flex-col">
              <div className="relative aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUtrUh55WYLBJDSRWTvgegleS1Z-s0Tt-aIJitwxMH__YT_ME1uCqMK5dLs0BtRolAsYtUK6FsO9VrE7FyqJjxmA-zLL1KpyJlXYECVXhnT0j2uDlay6gokBB5zMfZGbhn-PdhNbaQHfNNZUihtEOBPVCzHskRR-Bq_-vnxrfaqH6QqbxQWVaDZ2QXXQikdORFbUC06i8wJRUFUT4YVBuTuTHky-bEm7qMbvhbl445yDIjOs-J0Vs"
                  alt="Walnut Nesting Bowls"
                />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  favorite
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
                    Walnut Nesting Bowls
                  </h5>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Kitchenware
                  </p>
                </div>
                <span className="font-label-md text-label-md text-primary">
                  $145.00
                </span>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group flex flex-col">
              <div className="relative aspect-square bg-surface-container rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBBxCKMPGcetXEPTAcM1BVdlHV6Zd_G1hPUgXq-4_aeHWJMhAAtWLjK60PrU2OKrpf_KOK-1ER2TwwDdGjP7nokzsoNs10YtELhG2bKA98qxjogGO-8KAGW6A_Nr223wYXsuTV9-Hv5ARm685BqZLg6sOqrR33yVGrrsKmD8HiqiMPUUEhjZb_3Y-sM_aB0mECGYVfHW5j4Czt1X0nzU98gZBjLstDN918iuRilkvw8vAjVL6cA8A"
                  alt="Heavy Knit Throw"
                />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  favorite
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
                    Heavy Knit Throw
                  </h5>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Textiles
                  </p>
                </div>
                <span className="font-label-md text-label-md text-primary">
                  $120.00
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Editorial Section --> */}
        <section className="mt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden flex items-center justify-center text-center p-12">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVubVND7K_bZ89rfbPtSOSBZl8dE3PXhx1YDvo4dEO3WwCwKCvpakCLwzVAVKF_2YQn1w7ddm1OMlcGl-oBy6xzYobHdcFDyJzWMWXQWb9h0Q-LQlKBpOMGR08gpUNpV2SIuG_cTQ4Vp4V2XlqCkf9n6D-WgMbXHx3_R1n6FsoEsvb3KhGX2ml44Za7TGqbOpUyGKmdebku5SLZmuwjmQ-FDBGCH7I4h1RkKIVQ1ORmlQgSQ9JlWI')",
              }}
            ></div>
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="font-headline-lg text-white mb-6">
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
      </main>
      {/* <!-- BottomNavBar (Mobile) --> */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface dark:bg-surface-container-low shadow-[0_-4px_20px_rgba(111,52,41,0.08)] flex justify-around items-center px-4 pt-2 pb-6 rounded-t-xl border-t border-primary/5">
        <a
          className="flex flex-col items-center justify-center bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed rounded-full px-5 py-1 active:scale-90 duration-200"
          href="#"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            home
          </span>
          <span className="font-label-sm text-label-sm">Home</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all px-5 py-1 active:scale-90 duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-label-sm text-label-sm">Shop</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all px-5 py-1 active:scale-90 duration-200 relative"
          href="#"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="font-label-sm text-label-sm">Cart</span>
          <span className="absolute top-0 right-3 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all px-5 py-1 active:scale-90 duration-200"
          href="#"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </a>
      </nav>
      {/* <!-- Navigation (Desktop) --> */}
      <div className="hidden md:block">
        {/* <!-- Floating FAB (Contextual for Home/Shop) --> */}
        <button className="fixed bottom-12 right-12 bg-primary text-on-primary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
          <span className="material-symbols-outlined text-3xl">
            chat_bubble
          </span>
          <span className="absolute right-20 bg-white text-primary font-label-md px-4 py-2 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Concierge Design Support
          </span>
        </button>
      </div>
    </>
  );
}
