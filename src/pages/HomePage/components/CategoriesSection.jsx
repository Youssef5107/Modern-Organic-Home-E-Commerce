import { Link } from "react-router-dom";
export default function CategoriesSection() {
  return (
    <>
      <div className="flex justify-between items-end mb-stack-md">
        <div>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
            Shop by Room
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Functional beauty for every corner of your life.
          </p>
        </div>
        <Link
          to={"/shop"}
          className="font-label-md text-label-md text-primary underline underline-offset-4 hover:text-primary-container transition-colors"
        >
          View All Categories
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Living Room Card */}
        <Link to={"/shop/living-rooms"} className="group cursor-pointer">
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
            Living Rooms
          </h4>
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            42 Items
          </span>
        </Link>

        {/* Bedroom Card */}
        <Link to={"/shop/bedrooms"} className="group cursor-pointer">
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
            Bedrooms
          </h4>
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            28 Items
          </span>
        </Link>

        {/* Dining Card */}
        <Link to={"/shop/dining-rooms"} className="group cursor-pointer">
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
            Dining rooms
          </h4>
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            15 Items
          </span>
        </Link>
      </div>
    </>
  );
}
