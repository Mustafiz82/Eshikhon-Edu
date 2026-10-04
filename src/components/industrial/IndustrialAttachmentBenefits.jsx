// components/IndustrialAttachmentBenefits.jsx
import {
  HiOutlineUserGroup,
  HiOutlineWrenchScrewdriver,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBuildingOffice2,
  HiOutlineBriefcase,
  HiOutlineDocumentCheck,
  HiCheck,
} from "react-icons/hi2";

export default function IndustrialAttachmentBenefits() {
  const benefits = [
  {
    num: "01",
    title: "Expert Mentorship & Guidance",
    tag: "Expert Support",
    theme: "teal",
    icon: <HiOutlineUserGroup className="text-2xl" />,
    points: [
      "Experienced software engineers ও tech professionals-এর কাছ থেকে সরাসরি guidance নিন",
      "One-to-one doubt solving, code review এবং individual progress tracking-এর মাধ্যমে skill improve করুন",
    ],
  },
  {
    num: "02",
    title: "Real-World Hands-on Training",
    tag: "Practical Experience",
    theme: "orange",
    icon: <HiOutlineWrenchScrewdriver className="text-2xl" />,
    points: [
      "শুধু theoretical learning নয়, real-world projects-এর মাধ্যমে practical skills develop করুন",
      "Clean coding, modern development practices এবং industry-standard workflow শিখুন",
    ],
  },
  {
    num: "03",
    title: "Industry Exposure & Workshops",
    tag: "Industry Insight",
    theme: "teal",
    icon: <HiOutlineBuildingOffice2 className="text-2xl" />,
    points: [
      "Tech talks, workshops ও masterclasses-এর মাধ্যমে real industry সম্পর্কে practical ধারণা নিন",
      "Agile development, Git teamwork এবং professional workplace culture সম্পর্কে শিখুন",
    ],
  },
  {
    num: "04",
    title: "Career Support & Certification",
    tag: "Career Ready",
    theme: "orange",
    icon: <HiOutlineBriefcase className="text-2xl" />,
    points: [
      "CV, portfolio ও mock interview preparation-এর মাধ্যমে job-এর জন্য নিজেকে প্রস্তুত করুন",
      "Program completion certificate এবং eligible students-এর জন্য career ও interview support পান",
    ],
  },
];

  return (
    <section className="py-16 font-HindSiliguri bg-[#F8FAFC] text-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl py-2 sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
               আপনি কী কী সুবিধা পাবেন?
          </h2>
         
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item, index) => {
            const isTeal = item.theme === "teal";
            return (
              <div
                key={index}
                className={`bg-white p-6 sm:p-7 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md relative overflow-hidden flex flex-col justify-between ${
                  isTeal
                    ? "border-teal-100 hover:border-teal-400"
                    : "border-orange-100 hover:border-orange-400"
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isTeal
                            ? "bg-teal-50 text-teal-600"
                            : "bg-orange-50 text-orange-500"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-xs font-black tracking-widest text-slate-300">
                        {item.num}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        isTeal
                          ? "bg-teal-50 text-teal-700 border border-teal-200"
                          : "bg-orange-50 text-orange-700 border border-orange-200"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {item.points.map((point, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                      >
                        <span
                          className={`mt-0.5 p-0.5 rounded-full shrink-0 ${
                            isTeal
                              ? "bg-teal-100 text-teal-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          <HiCheck className="w-3 h-3" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}