import Link from "next/link";
import { Button } from "../ui/button";
import { waitlist_url } from "@/lib/defaults";

const Navbar = () => (
    <nav className="fixed w-full bg-black backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Road to GTV
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#proof" className="text-gray-300 hover:text-white">Success Stories</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
          </div>
          <div className="md:space-x-2">
          <Link href={"https://cal.com/misteryomi"}>
            <Button className="bg-blue-500 hover:from-blue-600 hover:to-purple-600">
                Book a 1:1 Call
            </Button>
          </Link>
          <Link href={waitlist_url}>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Join Waitlist
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;