import { fetchFooter } from "@/lib/contentful";
import Image from "next/image";
import React from "react";

const Footer = async () => {
  const footerData = await fetchFooter();

  return (
    <footer className="w-full border-t border-slate-200 px-4 flex items-center justify-end">
      <p>© 2024 Contentful GmbH. All rights reserved.</p>
      <Image
        src={`https:${footerData.fields.navigationItems[0].fields.image.fields.file.url}`}
        alt="Contentful Logo"
        width={75}
        height={75}
      />
    </footer>
  );
};

export default Footer;
