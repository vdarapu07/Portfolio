import SectionWrapper from "./SectionWrapper"
import Image from "next/image"
import { FaEnvelope, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-4xl font-bold">Get In Touch</h2>

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left side image */}
        <Image
          unoptimized={true}
          quality={100}
          alt="contact"
          src="/contact.png"
          className="w-full md:w-1/2 max-w-[400px] h-auto object-contain"
          width={600}
          height={600}
        />

        {/* Right side cards */}
        <div className="flex-1 flex flex-col sm:flex-row gap-6 justify-center">
          {/* Email */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-gray-800 text-center shadow-md hover:shadow-lg transition w-full sm:w-1/2">
            <FaEnvelope className="text-4xl text-red-500 mb-3" />
            <h3 className="font-semibold text-lg">Email</h3>
            <a
              href="mailto:vinod.darapu11801@gmail.com"
              className="text-blue-600 mt-2 break-words text-sm sm:text-base"
            >
              vinod.darapu11801@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-gray-800 text-center shadow-md hover:shadow-lg transition w-full sm:w-1/2">
            <FaPhone className="text-4xl text-green-500 mb-3" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <a
              href="tel:+15166148919"
              className="text-blue-600 mt-2 text-sm sm:text-base"
            >
              +1 (516) 614-8919
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
