import Link from "next/link";
import { Button } from "./ui/button";
import { FaEnvelope } from "react-icons/fa";

//components
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Jaya<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/*desktop nax & a hire button idiot*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="mailto:gjvardhan992003@gmail.com"   >
                        <Button className="flex items-center gap-2">
                            <FaEnvelope className="text-xl" /> {/* Mail icon */}
                            <span>Hire Me</span>
                        </Button>


                    </Link>
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden"><MobileNav /></div>

            </div>
        </header>
    );
};

export default Header