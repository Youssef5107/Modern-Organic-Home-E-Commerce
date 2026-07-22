import { Link } from "react-router-dom";
export default function EditorialContentSection() {
  return (
    <>
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
            We partner with local artisans to bring you pieces that aren't just
            objects, but stories of material, time, and touch.
          </p>
          <Link
            to={"/home/our-story"}
            className="bg-white text-primary px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95"
          >
            Our Philosophy
          </Link>
        </div>
      </div>
    </>
  );
}
