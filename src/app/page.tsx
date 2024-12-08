import Image from "next/image";
import Homepagebanner from "@/app/images/Homepagebanner.png";
import men from "@/app/images/men.png";
import women from "@/app/images/women.png";
import parallelimage1 from "@/app/images/parallelimage1.png";
import parallelimage2 from "@/app/images/parallelimage2.png";

import card1 from "@/app/images/card1.png";
import card2 from "@/app/images/card2.png";
import card3 from "@/app/images/card3.png";
import card4 from "@/app/images/card4.png";
import card5 from "@/app/images/card5.png";
import card6 from "@/app/images/card6.png";
import card7 from "@/app/images/card7.png";
import card8 from "@/app/images/card8.png";

import bottombox1 from "@/app/images/bottombox1.png";
import bottombox2 from "@/app/images/bottombox2.png";
import bottombox3 from "@/app/images/bottombox3.png";

import Footer from "./component/footer";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <div className="w-full">
        <Image
          src={Homepagebanner}
          alt="banner image"
          layout="intrinsic"
          width={1439}
          height={716}
          className="w-full"
        />
      </div>

      {/* Content Section */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-around px-4 md:px-0">
          {/* Editor's Pick */}
          <div className="w-full mb-8 text-center">
            <p className="text-xl font-bold mb-2">EDITOR’S PICK</p>
            <p className="text-sm text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Image Boxes */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between">

            {/* MEN image box */}
            <div className="w-full md:w-[510px] h-[500px]">
              <div
                className="w-full h-full bg-no-repeat bg-cover rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${men.src})` }}
              >
                <div className="bg-black/40 p-6 w-full h-full">
                  <h3 className="text-3xl font-semibold text-white mb-6">MEN</h3>
                </div>
              </div>
            </div>

            {/* WOMEN image box */}
            <div className="w-full md:w-[240px] h-[500px]">
              <div
                className="w-full h-full bg-no-repeat bg-cover rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${women.src})` }}
              >
                <div className="bg-black/40 p-6 w-full h-full">
                  <h3 className="text-3xl font-semibold text-white mb-6">WOMEN</h3>
                </div>
              </div>
            </div>

            {/* Parallel images */}
            <div className="w-full md:w-[240px] h-[500px] flex flex-row md:flex-col justify-between gap-4">
              <div className="w-full md:w-[240px] h-[242px]">
                <Image
                  src={parallelimage1}
                  alt="image"
                  width={240}
                  height={242}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              <div className="w-full md:w-[240px] h-[242px]">
                <Image
                  src={parallelimage2}
                  alt="image"
                  width={240}
                  height={242}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full bg-white py-8">
        <div className="w-full max-w-screen-xl mx-auto px-4 md:px-0">
          <div className="text-center mb-8">
            <p className="text-[#737373] text-lg font-normal mb-2">Featured Products</p>
            <p className="text-[#252b42] text-2xl font-bold mb-2">BESTSELLER PRODUCTS</p>
            <p className="text-[#737373] text-sm font-normal">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
            {/* First row of cards */}
            {[card1, card2, card3, card4].map((card, index) => (
              <div key={index} className="w-full md:w-[238px] h-[615px]">
                <Image
                  src={card}
                  alt={`card image ${index + 1}`}
                  width={238}
                  height={615}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between mt-8">
            {/* Second row of cards */}
            {[card5, card6, card7, card8].map((card, index) => (
              <div key={index} className="w-full md:w-[238px] h-[615px]">
                <Image
                  src={card}
                  alt={`card image ${index + 5}`}
                  width={238}
                  height={615}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Box Image */}
      <div className="w-full">
        <Image
          src={bottombox1}
          alt="header image"
          layout="responsive"
          width={1440}
          height={709}
          objectFit="cover"
        />
      </div>

      <div className="w-full flex flex-col items-center md:flex-row gap-[30px]">
        <div className="w-full md:w-[704px]">
          <Image
            src={bottombox3}
            alt="header image"
            layout="responsive"
            width={704}
            height={628}
            objectFit="cover"
          />
        </div>

        <div className="w-full md:w-[573px] px-2">
          <Image
            src={bottombox2}
            alt="header image"
            layout="responsive"
            width={573}
            height={326}
            objectFit="cover"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
