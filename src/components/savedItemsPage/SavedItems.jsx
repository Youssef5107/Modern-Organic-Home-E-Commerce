export default function SavedItems() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md bg-surface-bright text-on-surface antialiased">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-bright dark:bg-surface-dim shadow-sm shadow-primary/5 px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim">
            Saved Items
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary dark:text-primary-fixed-dim hover:text-primary transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Grid Header */}
        <div className="mb-stack-md flex items-end justify-between">
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
              Curated Favorites
            </p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Your Sanctuary
            </h2>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant hidden md:block">
            3 Items Saved
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Item 1: Solid Walnut Coffee Table */}
          <div className="group flex flex-col animate-in fade-in duration-700 delay-100">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low product-card-shadow transition-all duration-300">
              <img
                alt="Solid Walnut Coffee Table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuSyOJN0FwZFEOpSle1BrrAm2mXcA_k2amSpCgc_ZWsnI5GfC0R219e01iXjZ7QkC0_PBQbK3TFcRpJYHyC9TkoDeIkTfjqF2fUMDrgt3lRpHmWmlPCeZxht7oPjqsG6HLc5Y02nYhpZm1ligOQdeg2jghEqnf5E2kEZX-Ud2OxIIawrOdrz1JOX4CluF0vEINVuVdz7kNVNnKDoywJyPSb6FWbYfld3dS_diZ3CilFPq4tJXtG1VyrfA"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-surface-bright/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary active:scale-90 duration-150">
                <span
                  className="material-symbols-outlined filled-icon"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
              </button>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                  Heirloom Collection
                </p>
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">
                  Solid Walnut Coffee Table
                </h3>
                <p className="font-label-md text-label-md text-primary mt-1">
                  $840.00
                </p>
              </div>
              <button className="w-10 h-10 rounded-xl border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300 active:scale-95">
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>

          {/* Item 2: Earthen Pitcher */}
          <div className="group flex flex-col animate-in fade-in duration-700 delay-200">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low product-card-shadow transition-all duration-300">
              <img
                alt="Earthen Pitcher"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvgOQGI_Ny3VA9sNwFHd8o26F8_8wWONba1-wMrNLUcfROQoAZSjTK065IPKB49i5gjYOLTcoo3eT-z45gRqJGZvBlGWfMRkfQQxnlMVkNzcoLvyPUGasLyV72S9EuMtMqV7WZIaWrRZ9svd2mw7rUJnONAnyrhrZRL1eEFNSZRrkHcw7tmYHf8jxRAdFl7f3leb0uMMTCIPVYw4o7Js-LJogJj6pgoJkbbjKC7XugxKCgS0UoKxtkj-w"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-surface-bright/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary active:scale-90 duration-150">
                <span
                  className="material-symbols-outlined filled-icon"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
              </button>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                  Daily Rituals
                </p>
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">
                  Earthen Pitcher
                </h3>
                <p className="font-label-md text-label-md text-primary mt-1">
                  $92.00
                </p>
              </div>
              <button className="w-10 h-10 rounded-xl border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300 active:scale-95">
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>

          {/* Item 3: Textured Wool Throw */}
          <div className="group flex flex-col animate-in fade-in duration-700 delay-300">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low product-card-shadow transition-all duration-300">
              <img
                alt="Textured Wool Throw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtZx7Jy-5f6RfYVzGeAuzvjlQnh5wOpSXKtgHP0Xvg0aZXpNzi3Uhx99jN8VV8Sah28MKsSt1mDa9DlHVMUJJuUb5Dfcz3E_JURL4AbKyGHOml7fWuDFaHHUqIhxZ4Sjc_FKAfzEOuUb5o4CWiDlTar90zWtw6bNB4lLbS8ahz0Ynb8tXpfBTbDE95AKSKObONCs6zf1ZjURo34_zgsVdTe1DgAIMuApC2IMzMGkBxCzKoXyLBXmBf9OQ"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-surface-bright/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary active:scale-90 duration-150">
                <span
                  className="material-symbols-outlined filled-icon"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
              </button>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                  Soft Living
                </p>
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">
                  Textured Wool Throw
                </h3>
                <p className="font-label-md text-label-md text-primary mt-1">
                  $125.00
                </p>
              </div>
              <button className="w-10 h-10 rounded-xl border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300 active:scale-95">
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div
          className="hidden flex flex-col items-center justify-center text-center py-stack-lg max-w-md mx-auto"
          id="empty-state"
        >
          <span className="material-symbols-outlined text-outline-variant text-6xl mb-6">
            spa
          </span>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Your sanctuary of favorites is empty. Explore our collections to
            find pieces that speak to you.
          </p>
          <button className="mt-8 px-8 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md transition-all active:scale-95">
            Start Exploring
          </button>
        </div>
      </main>
    </div>
  );
}
