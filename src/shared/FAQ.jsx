// components/FAQSection.jsx
import { HiBolt } from "react-icons/hi2";
import FAQItem from "./FAQItem";

export default function FAQ({ name, faqs }) {
  return (
    <section className="py-16 font-HindSiliguri bg-linear-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9] text-slate-800 [content-visibility:auto] [contain-intrinsic-size:1px_700px]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (Server-rendered) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[#005776] to-[#008BB8]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            {name} সম্পর্কিত সাধারণ প্রশ্ন ও উত্তর
          </p>
        </div>

        {/* Accordion List (Questions & Answers rendered on Server for SEO) */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id ?? index}
              id={faq.id}
              qBn={faq.qBn}
              qEn={faq.qEn}
              defaultOpen={index === 0}
            >
              <p className="text-xs sm:text-sm leading-relaxed sm:pl-10 text-slate-600">
                {faq.ans}
              </p>
            </FAQItem>
          ))}
        </div>

        {/* Bottom Support Banner (Server-rendered, 0 KB client JS) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-slate-700 text-center">
          <span className="font-bold text-orange-600 flex items-center gap-1">
            <HiBolt className="text-base" aria-hidden="true" /> আরও কোনো প্রশ্ন আছে?
          </span>
          <span>
            আমাদের হেল্পলাইন বা ফেসবুক পেজে সরাসরি মেসেজ দিয়ে জেনে নিতে পারেন।
          </span>
        </div>
      </div>
    </section>
  );
}