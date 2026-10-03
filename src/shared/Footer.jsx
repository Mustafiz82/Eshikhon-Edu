import Link from 'next/link';
import { FaFacebook, FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

export default function Footer() {
  const assetCourses = [
    { title: 'Digital Marketing', href: '/asset/digital-marketing' },
    { title: 'Web Design for Freelancing (Level 3)', href: '/asset/web-design-level-3' },
    { title: 'Web Design with Python (Level 4)', href: '/asset/web-design-python-level-4' },
    { title: 'Graphic Design', href: '/asset/graphic-design' },
  ];

  const rplCourses = [
    { title: 'Digital Marketing for Freelancing', href: '/rpl/digital-marketing' },
    { title: 'Graphic Design', href: '/rpl/graphic-design' },
    { title: 'Web Design & Development', href: '/rpl/web-design-dev' },
    { title: 'Professional Customer Services', href: '/rpl/customer-service' },
    { title: 'IT Support Service', href: '/rpl/it-support' },
  ];

  const industrialCourses = [
    { title: 'Digital Marketing', href: '/industrial-attachment/digital-marketing' },
    { title: 'Graphic Design', href: '/industrial-attachment/graphic-design' },
    { title: 'Ethical Hacking', href: '/industrial-attachment/ethical-hacking' },
    { title: 'Web Design & Development', href: '/industrial-attachment/web-design-development' },
    { title: 'AutoCAD', href: '/industrial-attachment/autocad' },
    { title: 'UI/UX Design', href: '/industrial-attachment/ui-ux-design' },
  ];

  return (
    <footer className="bg-linear-to-b from-[#0c4d5a] to-[#062c33] text-teal-100/80 font-sans pt-14 text-sm border-t border-teal-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Column 1: Brand & Gov Info (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-white/10 text-[#f06424] group-hover:scale-105 transition-transform duration-200">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                ইশিখন<span className="text-[#f06424]">.কম</span>
              </span>
            </Link>

            <p className="text-xs text-teal-100/70 leading-relaxed">
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত স্কিলস ইনিশিয়েটিভ ও NSDA স্বীকৃত টেকনিক্যাল ও আইটি ট্রেনিং ইনস্টিটিউট।
            </p>

           <div className="flex gap-2 pt-4">
            <FaFacebookF  className='text-3xl bg-white rounded-full min-w-7 min-h-7 text-secondary p-1.5  hover:text-primary hover:-translate-y-1 duration-300 '/>
            <FaLinkedinIn  className='text-3xl bg-white rounded-full min-w-7 min-h-7 text-secondary p-1.5  hover:text-primary hover:-translate-y-1 duration-300 '/> 
            <IoLogoYoutube  className='text-3xl bg-white rounded-full min-w-7 min-h-7 text-secondary p-1.5  hover:text-primary hover:-translate-y-1 duration-300 '/> 
            <FaTiktok  className='text-3xl bg-white rounded-full min-w-7 min-h-7 text-secondary p-1.5  hover:text-primary hover:-translate-y-1 duration-300 '/>
           </div>
          </div>

          {/* Column 2: ASSET Program (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-base font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-[#f06424]">
              <Link href="/asset" className="hover:text-[#f06424] transition-colors">
                ASSET Program
              </Link>
            </h3>
            <ul className="space-y-2.5">
              {assetCourses.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#f06424] transition-colors inline-block duration-200 hover:translate-x-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: RPL Certification (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-base font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-[#f06424]">
              <Link href="/rpl" className="hover:text-[#f06424] transition-colors">
                RPL Certification
              </Link>
            </h3>
            <ul className="space-y-2.5">
              {rplCourses.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#f06424] transition-colors inline-block duration-200 hover:translate-x-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industrial Attachment (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-base font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-[#f06424]">
              <Link href="/industrial-attachment" className="hover:text-[#f06424] transition-colors">
              Industrial  Attachment
              </Link>
            </h3>
            <ul className="space-y-2.5">
              {industrialCourses.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#f06424] transition-colors inline-block duration-200 hover:translate-x-1">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Information (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-base font-semibold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-[#f06424]">
              Address & Contact
            </h3>
            
            <div className="space-y-3.5 text-xs text-teal-100/90">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-[#f06424] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>151/7, Goodluck Center (4th Floor), Panthapath Signal, Green Road, Dhaka-1205</span>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-[#f06424] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Office Hours: <strong>9:30 AM – 9:30 PM</strong>, Everyday</span>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#f06424] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div className="flex gap-2">
                  <a href="tel:01948858258" className="hover:text-[#f06424] transition-colors font-medium">01948858258</a>,
                  <a href="tel:09638388388" className="hover:text-[#f06424] transition-colors font-medium">09638388388</a>
                </div>
              </div>

              {/* WhatsApp / IMO */}
              <div className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-[#f06424] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <div>
                  <span className="text-teal-100/70">WhatsApp / IMO:</span>{' '}
                  <a 
                    href="https://wa.me/8801948858258" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white font-semibold hover:text-[#f06424] transition-colors"
                  >
                    +8801948858258
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#f06424] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:support@eshikhon.com.bd" className="hover:text-[#f06424] transition-colors">
                  support@eshikhon.com.bd
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-teal-900/60 bg-black/20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-100/60">
          <p>© {new Date().getFullYear()} eShikhon. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-[#f06424] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#f06424] transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-[#f06424] transition-colors">Refund Policy</Link>
            <Link href="/verify" className="hover:text-[#f06424] transition-colors">Verify Certificate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}