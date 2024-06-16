"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-22 bg-gray-800 p-4 text-white fixed bottom-0 text-center flex justify-around items-center  flex-wrap text-xs">
      <p>© 2024 - Quiz Naruto - Tous droits réservés</p>
      <Link href="https://www.instagram.com/catyu_coding/">
        <div className="flex gap-2 items-center">
          <Instagram />
          <p className="hover:text-gray-300">/catyu_coding</p>
        </div>
      </Link>
      <p>Développé par Catyu Coding</p>
    </footer>
  );
}
