import Image from "next/image";

const partners = [
  { id: 1, name: "Partner One", src: "/partners/asset.png" },
  { id: 2, name: "Partner Two", src: "/partners/bacco.png" },
  { id: 3, name: "Partner Three", src: "/partners/basis.png" },
  { id: 4, name: "Bangladesh Technical Education Board", src: "/partners/bteb.svg" },
  { id: 5, name: "Partner Five", src: "/partners/ecab.png" },
];

export default function Partners() {
  return (
      <section className="relative py-16 md:py-24 bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-orange-100/40 via-blue-50/20 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Sleek Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/50 text-[11px] font-semibold text-[#f25c05] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f25c05]"></span>
            <span>আমাদের পার্টনার্স ও সহযোগী প্রতিষ্ঠান</span>
          </div>

          <h3 className="text-2xl font-bold text-[#0a2540] tracking-tight">
            We Are Partnered With
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-normal">
            জাতীয় ও আন্তর্জাতিক মানের শীর্ষস্থানীয় প্রতিষ্ঠানের সাথে আমাদের
            পার্টনারশিপ
          </p>
        </div>

        {/* 5 Seamless Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 items-stretch">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`group flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 hover:-translate-y-1 ${
                index === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              {/* Fixed height container to equalize all 5 logo sizes */}
              <div className={`relative w-full ${partner?.name == "Bangladesh Technical Education Board" ? "h-17" : "h-14"} flex items-center justify-center`}>
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-contain filter  opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 p-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
