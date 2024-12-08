import Image from "next/image";
import { Button } from "@/components/ui/button";

import aboutsectionimage from "@/app/images/aboutsectionimage.png";
import parallelimage from "@/app/images/parallelimage2.png";
import row2 from "@/app/images/row2.png";

import carditem1 from "@/app/images/cardtem 1.png";
import carditem2 from "@/app/images/carditem2.png";
import cardtem3 from "@/app/images/cardtem3.png";

import Footer from "../component/footer";

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                ABOUT COMPANY
              </p>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ABOUT US
              </h1>
              <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl">
                We know how large objects will act, but things on a small scale
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Get Quote Now
              </Button>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[500px]">
              <div className="absolute inset-0 bg-pink-100 rounded-full opacity-20" />
              <Image
                alt="pr"
                className="object-cover w-full h-full"
                height={500}
                width={500}
                src={parallelimage}
                priority
              />
              <div className="absolute top-0 right-0 w-4 h-4 bg-purple-400 rounded-full -mr-2" />
              <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-pink-300 rounded-full -ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Section with Flex and Multiple Boxes */}
      <div className="w-full max-w-[1440px] h-auto flex flex-col sm:flex-row justify-around items-center mx-auto gap-6 py-8">
        <div className="w-full sm:w-[394px] h-[96px] flex items-center justify-center">
          <p className="font-montserrat text-lg sm:text-2xl font-bold leading-8 tracking-tight text-left underline decoration-transparent">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>

        <div className="w-full sm:w-[545px] h-[40px] flex items-center justify-center">
          <p className="text-[#737373] text-sm sm:text-[14px] font-normal leading-6 tracking-tight text-left underline decoration-transparent">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* Image Section with Absolute Positioning */}
      <div className=" w-full max-w-[1440px] h-auto mx-auto relative">
        <div className=" w-full sm:w-[989px] h-fit mx-auto gap-[30px] rounded-tl-[20px] ">
          <Image
            src={aboutsectionimage}
            alt="About Section Image"
            width={989}
            height={540}
          />
        </div>
      </div>

      <div className=" w-full max-w-[1440px] h-auto mx-auto relative">
        <div className=" w-full sm:w-[1050px] h-auto mx-auto flex flex-col justify-around gap-6 py-8">
          <div className=" w-full sm:w-[607px] h-[100px] mx-auto">
            <Image src={row2} alt="image" />
          </div>

          {/* Cards Section */}
          <div className="w-full sm:w-[1034px] h-auto mx-auto flex flex-wrap justify-between gap-4 py-6">
            {/* Card 1 */}
            <div className=" w-full sm:w-[316px] lg:w-[316px] xl:w-[316px] h-[383px] mx-auto">
              <Image src={carditem1} alt="Card Item 1" />
            </div>

            {/* Card 2 */}
            <div className=" w-full sm:w-[329px] lg:w-[329px] xl:w-[329px] h-[383px] mx-auto">
              <Image src={carditem2} alt="Card Item 2" width={329} height={383} />
            </div>

            {/* Card 3 */}
            <div className=" w-full sm:w-[329px] lg:w-[329px] xl:w-[329px] h-[383px] mx-auto">
              <Image src={cardtem3} alt="Card Item 3" />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </section>
  );
}
