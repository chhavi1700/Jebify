import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
    await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" >
          <Image src={"/logo.jpg"} alt = "Jebify logo" height={60} width={200} className="h-12 w-auto object-contain"/>
        </Link>



        <div className="flex items-center space-x-4 ">
          <SignedIn>
            <Link href= {"/dashboard"} className="text-black-600 hover:text-blue-600">
              <Button variant="outline" className=" flex items-center gap-2 ">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href= {"/transaction/create"}>
              <Button className="flex item-center gap-2 bg-black text-white w-30 h-10 rounded-lg">
                <PenBox size={18} />
                <span className="hidden md:inline"> Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
             <Button variant = "outline">Login</Button>
            </SignInButton>
          {/* <SignUpButton /> */}
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements:{
                avatarBox: "w-10 h-10", 
              },
            }}/>
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header;
