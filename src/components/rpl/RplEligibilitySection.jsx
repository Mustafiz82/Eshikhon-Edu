import React from 'react';
import { 
  FiBriefcase, 
  FiAward, 
  FiCheckCircle, 
  FiUserCheck, 
  FiAlertTriangle 
} from 'react-icons/fi';

export default function RplEligibilitySection() {
  const eligibilityCriteria = [
    {
      id: 1,
      title: "বাস্তব কাজের অভিজ্ঞতা",
      desc: "সংশ্লিষ্ট কাজে আপনার পূর্বের বাস্তব কাজের প্রত্যক্ষ অভিজ্ঞতা থাকে।",
      icon: <FiBriefcase className="w-6 h-6 text-teal-600" />,
      bgIcon: "bg-teal-50 text-teal-600 border-teal-100",
    },
    {
      id: 2,
      title: "স্বশিক্ষিত বা অপ্রাতিষ্ঠানিক দক্ষতা",
      desc: "কাজের মাধ্যমে বা নিজে নিজে প্র্যাকটিস করে প্রয়োজনীয় দক্ষতা অর্জন করে থাকেন।",
      icon: <FiAward className="w-6 h-6 text-cyan-600" />,
      bgIcon: "bg-cyan-50 text-cyan-600 border-cyan-100",
    },
    {
      id: 3,
      title: "স্ট্যান্ডার্ড অনুযায়ী যোগ্যতা",
      desc: "আপনার দক্ষতা সংশ্লিষ্ট Occupation ও Level-এর Competency Standard-এর সঙ্গে মেলে।",
      icon: <FiCheckCircle className="w-6 h-6 text-emerald-600" />,
      bgIcon: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: 4,
      title: "মূল্যায়নে অংশ নেওয়ার প্রস্তুতি",
      desc: "নির্ধারিত Assessment-এ অংশ নিয়ে নিজের দক্ষতা সরাসরি প্রদর্শন করতে প্রস্তুত থাকেন।",
      icon: <FiUserCheck className="w-6 h-6 text-orange-600" />,
      bgIcon: "bg-orange-50 text-orange-600 border-orange-100",
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/70 mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
            যোগ্যতা ও মানদণ্ড
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold  tracking-tight  md:text-4xl  font-HindSiliguri pt-4 text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
            কারা <span >RPL Assessment-</span>এর জন্য আবেদন করবেন?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            আপনি আবেদন করার বিষয়টি বিবেচনা করতে পারেন, যদি আপনার নিচের যোগ্যতাগুলো থাকে:
          </p>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {eligibilityCriteria.map((item) => (
            <div
              key={item.id}
              className="bg-white hover:border-teal-200 rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${item.bgIcon}`}
                >
                  {item.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-base font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent line */}
             
            </div>
          ))}
        </div>

        {/* Warning / Important Notice Box */}
        <div className="mt-8 max-w-3xl mx-auto bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start sm:items-center gap-3.5 shadow-xs">
          <div className="p-2 bg-amber-100 text-amber-700 rounded-xl shrink-0">
            <FiAlertTriangle className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="font-bold text-amber-900 block sm:inline mr-1">
              মনে রাখবেন:
            </strong>
            শুধু কাজের অভিজ্ঞতা থাকলেই Assessment-এ উত্তীর্ণ হওয়া বা সার্টিফিকেট পাওয়া নিশ্চিত নয়। 
            সংশ্লিষ্ট Occupation ও Level-এর শর্ত এবং Assessment-এর মানদণ্ড পূরণ করতে হবে।
          </div>
        </div>

      </div>
    </section>
  );
}