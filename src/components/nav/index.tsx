import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DrawerWithNavigation } from "../drawer";
const Nav = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav
      className={`w-[90vw] m-auto my-5 flex items-center justify-between font-bold text-lg text-${
        router.pathname === "/backoffice" ? "secondary" : "primary"
      }`}
    >
      <div className="flex items-center">
        <DrawerWithNavigation />
        <span
          className={`ml-2  text-${
            router.pathname === "/backoffice" ? "secondary" : "primary"
          }`}
        >
          Sanpya Market
        </span>
      </div>
      <span
        className={`text-${
          router.pathname === "/backoffice" ? "secondary" : "primary"
        } cursor-pointer`}
        onClick={() => router.push("/")}
      >
        Yum POS
      </span>
      <div className="flex items-center">
        {session ? (
          <span
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/");
              });
              router.push("/");
            }}
            className={`text-${
              router.pathname === "/backoffice" ? "secondary" : "primary"
            } cursor-pointer`}
          >
            Log out
          </span>
        ) : (
          <Link
            href="/login"
            className={`text-${
              router.pathname === "/backoffice" ? "secondary" : "primary"
            }`}
          >
            Log in
          </Link>
        )}
        <ArrowSmallRightIcon
          className={`h-5 w-5 text-${
            router.pathname === "/backoffice" ? "secondary" : "primary"
          } ml-2 mt-1`}
        />
      </div>
    </nav>
  );
};

export default Nav;
