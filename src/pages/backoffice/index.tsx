import { NaviCard } from "@/components/card";
import Layout from "@/components/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { TagIcon } from "@heroicons/react/24/solid";
import { RectangleStackIcon } from "@heroicons/react/24/solid";
import { WalletIcon } from "@heroicons/react/24/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const Menus = [
  {
    name: "Orders",
    icon: <ClipboardDocumentCheckIcon className="h-10  w-10 my-3" />,
  },
  { name: "Menus", icon: <ShoppingBagIcon className="h-10  w-10 my-3" /> },
  { name: "Menus Categories", icon: <TagIcon className="h-10  w-10 my-3" /> },
  { name: "Addons", icon: <RectangleStackIcon className="h-10  w-10 my-3" /> },
  {
    name: "Addons Categories",
    icon: <WalletIcon className="h-10  w-10 my-3" />,
  },
  {
    name: "Settings",
    icon: <WrenchScrewdriverIcon className="h-10  w-10 my-3" />,
  },
];

export default function Backoffice() {
  return (
    <Layout>
      <main className="w-[90vw] h-[90vh] mx-auto grid gap-2 grid-cols-3 content-center justify-items-center">
        {Menus.map((menu) => (
          <NaviCard name={menu.name} icon={menu.icon} />
        ))}
      </main>
    </Layout>
  );
}
