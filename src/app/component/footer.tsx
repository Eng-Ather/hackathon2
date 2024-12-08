// import Link from "next/link"
// import { Facebook, Instagram, Twitter } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// export default function Footer() {
//     return (
//         <footer className="bg-white">
//             <div className=" border border-red-500 w-[1440px] h-[488px]  mx-auto">
//                 {/* ____________ */}
//                 <div>
//                     <div className="border border-red-500 w-[1050px] h-[140px] mx-auto bg-[#FAFAFA] flex justify-between items-center">
//                         <Link href="/" className=" text-xl font-bold text-gray-900">
//                             Bandage
//                         </Link>
//                         <div className="flex items-center mt-4 space-x-4">
//                             <Link href="#" className="text-[#23A6F0] hover:opacity-80">
//                                 <Facebook className="h-5 w-5" />
//                                 <span className="sr-only">Facebook</span>
//                             </Link>
//                             <Link href="#" className="text-[#23A6F0] hover:opacity-80">
//                                 <Instagram className="h-5 w-5" />
//                                 <span className="sr-only">Instagram</span>
//                             </Link>
//                             <Link href="#" className="text-[#23A6F0] hover:opacity-80">
//                                 <Twitter className="h-5 w-5" />
//                                 <span className="sr-only">Twitter</span>
//                             </Link>
//                         </div>


//                     </div>

//                     <div className="w-[1050px] h-[270px] pt-[50px] mx-auto border border-red-500 flex flex-col md:flex-row justify-between items-start">

//                         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full md:w-auto">
//                             <div className="space-y-4">
//                                 <h3 className="font-bold text-gray-900">Company Info</h3>
//                                 <ul className="space-y-3">
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             About Us
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Carrier
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             We are hiring
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Blog
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="space-y-4">
//                                 <h3 className="font-bold text-gray-900">Legal</h3>
//                                 <ul className="space-y-3">
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             About Us
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Carrier
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             We are hiring
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Blog
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="space-y-4">
//                                 <h3 className="font-bold text-gray-900">Features</h3>
//                                 <ul className="space-y-3">
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Business Marketing
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             User Analytic
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Live Chat
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Unlimited Support
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="space-y-4">
//                                 <h3 className="font-bold text-gray-900">Resources</h3>
//                                 <ul className="space-y-3">
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             iOS & Android
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Watch a Demo
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             Customers
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#" className="text-gray-600 hover:text-gray-900">
//                                             API
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className=" border border-red-500 flex flex-col md:flex-row justify-between items-center pt-8 border-t">
//                             <div className="mb-4 md:mb-0">
//                                 <h3 className="font-bold text-gray-900">Get In Touch</h3>
//                                 <div className="flex mt-4 space-x-2">
//                                     <Input
//                                         type="email"
//                                         placeholder="Your Email"
//                                         className="max-w-[204px]"
//                                     />
//                                     <Button variant={"secondary"}>Subscribe</Button>
//                                 </div>

//                                 <p className="mt-2 text-sm text-gray-600">
//                                     Lore imp sum dolor Amit
//                                 </p>
//                             </div>

//                         </div>
//                     </div>

//                     <p className="border border-red-500 w-[1440px] h-[74px] flex justify-center items-center  bg-[#FAFAFA] text-sm text-gray-600">
//                     Made With Love By Finland All Right Reserved
//                 </p>
//                 </div>
//                 {/* ________ */}
               
                
//             </div>
//         </footer>
//     )
// }

// ______________

import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="w-full mx-auto max-w-screen-xl">
                {/* Header section */}
                <div className="bg-[#FAFAFA] flex justify-between items-center p-6 md:p-10">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                        Bandage
                    </Link>
                    <div className="flex items-center space-x-4">
                        <Link href="#" className="text-[#23A6F0] hover:opacity-80">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-[#23A6F0] hover:opacity-80">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-[#23A6F0] hover:opacity-80">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>

                {/* Footer links section */}
                <div className="w-full md:flex md:justify-between md:items-start space-y-8 md:space-y-0 p-6 md:p-10">
                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-900">Company Info</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Carrier
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    We are hiring
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-900">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Carrier
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    We are hiring
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-900">Features</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Business Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    User Analytic
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Live Chat
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Unlimited Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-gray-900">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    iOS & Android
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Watch a Demo
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    Customers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    API
                                </Link>
                            </li>
                        </ul>
                    </div>

                           {/* Newsletter section */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t pt-8 px-6 md:px-10 space-y-6 md:space-y-0">
                    <div className="mb-4 md:mb-0">
                        <h3 className="font-bold text-gray-900">Get In Touch</h3>
                        <div className="flex mt-4 space-x-2">
                            <Input
                                type="email"
                                placeholder="Your Email"
                                className="max-w-[204px]"
                            />
                            <Button variant={"secondary"}>Subscribe</Button>
                        </div>

                        <p className="mt-2 text-sm text-gray-600">
                            Lore imp sum dolor Amit
                        </p>
                    </div>
                </div>
                </div>

         

                {/* Footer bottom section */}
                <p className="bg-[#FAFAFA] text-center text-sm text-gray-600 py-4">
                    Made With Love By Finland All Right Reserved
                </p>
            </div>
        </footer>
    )
}
