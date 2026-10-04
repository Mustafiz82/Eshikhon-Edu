// components/WhoIsThisProgramFor.jsx
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBriefcase,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";

export default function WhoIsThisProgramFor() {
  const criteria = [
    {
      label: "Target Audience",
      title: "Polytechnic Students",
      sub: "সকল Technology-এর Diploma Engineering শিক্ষার্থীদের জন্য",
      theme: "teal",
      icon: <HiOutlineAcademicCap className="text-xl" />,
    },
    {
      label: "Eligibility",
      title: "8th Semester",
      sub: "Diploma-এর final year-এর শিক্ষার্থীরা যারা তাদের academic requirements complete করছে",
      theme: "orange",
      icon: <HiOutlineBookOpen className="text-xl" />,
    },
    {
      label: "Curriculum Requirement",
      title: "Mandatory Attachment",
      sub: "যেসব শিক্ষার্থীর Diploma curriculum অনুযায়ী Industrial Attachment সম্পন্ন করা বাধ্যতামূলক",
      theme: "teal",
      icon: <HiOutlineBriefcase className="text-xl" />,
    },
    {
      label: "Career Path",
      title: "IT Career Focus",
      sub: "যারা future-এ IT ও technology-focused career গড়তে চায়",
      theme: "orange",
      icon: <HiOutlineComputerDesktop className="text-xl" />,
    },
  ];

  return (
    <section className="py-14 font-HindSiliguri bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Section Heading & Subtitle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
          Who Is This Program For?
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
          Diploma Engineering শিক্ষার্থীদের জন্য, যারা industry-ready skills
          অর্জন করে career-এর জন্য নিজেকে প্রস্তুত করতে চায়
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-left">
          {criteria.map((item, index) => {
            const isTeal = item.theme === "teal";

            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  isTeal
                    ? "border-teal-100 hover:border-teal-400"
                    : "border-orange-100 hover:border-orange-400"
                }`}
              >
                {/* Icon Box */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    isTeal
                      ? "bg-teal-50 text-teal-600"
                      : "bg-orange-50 text-orange-500"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Subtitle / Role Tag */}
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider block ${
                    isTeal ? "text-teal-600" : "text-orange-500"
                  }`}
                >
                  {item.label}
                </span>

                {/* Main Heading */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 leading-snug">
                  {item.title}
                </h3>

                {/* Subtext */}
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}