// components/RequiredDocuments.jsx
import {
  HiOutlineDocumentText,
  HiOutlineIdentification,
  HiOutlineBookOpen,
} from "react-icons/hi2";

export default function RequiredDocuments() {
  const documents = [
    {
      badge: "বাধ্যতামূলক",
      label: "শিক্ষাগত প্রমাণপত্র",
      title: "সনদ বা মার্কশিট",
      theme: "teal",
      icon: <HiOutlineDocumentText className="text-xl" />,
      details: "SSC, HSC, অনার্স, ডিপ্লোমা বা সমমানের যেকোনো একটি শিক্ষাগত সনদ অথবা মার্কশিট।",
    },
    {
      badge: "বাধ্যতামূলক",
      label: "পরিচয় যাচাই",
      title: "প্রার্থী ও পিতা-মাতার NID",
      theme: "teal",
      icon: <HiOutlineIdentification className="text-xl" />,
      details: "আবেদনকারীর নিজস্ব জাতীয় পরিচয়পত্র এবং পিতা ও মাতা উভয়ের NID কার্ডের কপি।",
    },
    {
      badge: "ঐচ্ছিক / বিকল্প",
      label: "বিকল্প সুবিধা",
      title: "পাসপোর্ট (Passport)",
      theme: "orange",
      icon: <HiOutlineBookOpen className="text-xl" />,
      details: "পাসপোর্ট থাকা বাধ্যতামূলক নয়; তবে প্রয়োজন সাপেক্ষে সনদের বিকল্প হিসেবে ব্যবহারযোগ্য।",
    },
  ];

  return (
    <section className="py-14 font-HindSiliguri bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl py-4 md:text-4xl font-extrabold tracking-tight text-[#0C2340] text-transparent bg-clip-text bg-gradient-to-r from-[#005776] to-[#008BB8]">
          প্রয়োজনীয় কাগজপত্র (Documents)
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 text-left">
          {documents.map((item, index) => {
            const isTeal = item.theme === "teal";
            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between ${
                  isTeal
                    ? "border-teal-100 hover:border-teal-400"
                    : "border-orange-100 hover:border-orange-400"
                }`}
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isTeal
                          ? "bg-teal-50 text-teal-600"
                          : "bg-orange-50 text-orange-500"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isTeal
                          ? "bg-teal-50 text-teal-700 border border-teal-200"
                          : "bg-orange-50 text-orange-700 border border-orange-200"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Subtitle / Label */}
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block ${
                      isTeal ? "text-teal-600" : "text-orange-500"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Main Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 leading-snug">
                    {item.title}
                  </h3>

                  {/* Details Description */}
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}