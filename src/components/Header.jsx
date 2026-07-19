import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PublicIcon from "@mui/icons-material/Public";
import ShareIcon from "@mui/icons-material/Share";
import MailIcon from "@mui/icons-material/Mail";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reusable MUI Icon inline styling to override text color parameters smoothly
  const muiIconStyle = { color: "inherit", fontSize: "24px" };

  return (
    <>
      {/* Texture Paper Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
        }}
      />

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Navigation Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[400px] bg-surface z-[70] transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/30">
          <h2 className="font-headline-md text-primary text-xl">
            Modern Organic
          </h2>
          <button
            className="text-primary p-2 hover:bg-surface-container-low rounded-full transition-colors flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon style={muiIconStyle} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 p-6 flex-grow overflow-y-auto">
          <a
            className="font-headline-lg text-primary py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors"
            href="#"
          >
            Shop All
          </a>
          <a
            className="font-headline-lg text-on-surface py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors"
            href="#"
          >
            New Arrivals
          </a>
          <a
            className="font-headline-lg text-on-surface py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors"
            href="#"
          >
            Collections
          </a>
          <a
            className="font-headline-lg text-on-surface py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors"
            href="#"
          >
            Our Story
          </a>
          <a
            className="font-headline-lg text-on-surface py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors"
            href="#"
          >
            Journal
          </a>
          <a
            class="font-headline-lg text-on-surface py-3 px-2 rounded-lg hover:bg-primary/5 transition-colors"
            href="#"
          >
            Account
          </a>
        </nav>

        {/* Brand Details / Footer */}
        <div className="p-8 bg-surface-container-low/50 mt-auto border-t border-outline-variant/20">
          <p class="font-headline-md text-sm text-primary mb-6 italic">
            Built by Hand, Inspired by Earth
          </p>
          <div className="flex gap-6 items-center text-primary">
            <a
              className="hover:scale-110 transition-transform flex items-center"
              href="#"
            >
              <PublicIcon style={muiIconStyle} />
            </a>
            <a
              className="hover:scale-110 transition-transform flex items-center"
              href="#"
            >
              <ShareIcon style={muiIconStyle} />
            </a>
            <a
              className="hover:scale-110 transition-transform flex items-center"
              href="#"
            >
              <MailIcon style={muiIconStyle} />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-label-sm text-on-surface-variant">
              © 2024 Modern Organic Home
            </p>
            <p className="text-label-sm text-on-surface-variant mt-1">
              Ethically sourced, thoughtfully made.
            </p>
          </div>
        </div>
      </aside>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-background/80 backdrop-blur-md shadow-sm shadow-primary/5 h-16 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-4">
          <button
            className="text-primary hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200 flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon style={muiIconStyle} />
          </button>
          <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md tracking-tight text-primary">
            Modern Organic Home
          </h1>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <button className="hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200 flex items-center justify-center">
            <SearchIcon style={muiIconStyle} />
          </button>
          <button className="hidden md:flex hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200 items-center justify-center">
            <ShoppingBagIcon style={muiIconStyle} />
          </button>
        </div>
      </header>
    </>
  );
}
