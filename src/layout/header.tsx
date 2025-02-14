"use client";

import Link from "next/link";
import { useState } from "react";
// import hamburger from "../../public/hamburger.svg";
// import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white bg-red-500">
      HEADER
      {/* <div
        onClick={() => setOpen(!open)}
        className="md:hidden flex justify-end"
      >
        <Image src={hamburger} height={25} width={25} alt="Hamburger Menu" />
      </div> */}
      {open && (
        <div className="fixed top-0 left-0 bottom-0 right-0 h-full w-full bg-white shadow-md z-20">
          <div
            onClick={() => setOpen(!open)}
            className="text-black text-2xl flex justify-end pr-10 pt-5"
          >
            <p>X</p>
          </div>
          <ul className="flex flex-col space-y-10 py-10 px-5">
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_DEXS_URL || "#"}
                target="_blank"
              >
                Discovery
              </Link>
            </li>
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_DEX_URL || "#"}
                target="_blank"
              >
                About $BMoney
              </Link>
            </li>
            <li className="font-normal text-xl text-black">
              <Link
                href={process.env.NEXT_PUBLIC_TELE_URL || "#"}
                target="_blank"
              >
                TELEGRAM
              </Link>
            </li>

            <li className="font-normal text-xl text-black">
              <Link href={process.env.NEXT_PUBLIC_X_URL || "#"} target="_blank">
                TWITTER
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
