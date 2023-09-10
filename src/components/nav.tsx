import { navigation } from "@/app/models/navigation";
import Logo from "@/components/logo";
import Link from "next/link";

export function NavBar() {
    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            {navigation.map((item) => (
            <Link key={item.name + "nav"} href={item.href} className="mr-5 hover:text-gray-900">
                {item.name}
            </Link>
          ))}
        </nav>
      </div>

    )
}