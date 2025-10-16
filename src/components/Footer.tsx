import Image from "next/image";
import Link from "next/link";

const socials = [
  { href: "https://facebook.com", src: "/icons/facebook.svg", alt: "Facebook" },
  {
    href: "https://instagram.com",
    src: "/icons/instagram.svg",
    alt: "Instagram",
  },
  { href: "https://linkedin.com", src: "/icons/linkedin.svg", alt: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="h-24 flex items-center justify-center">
      {socials.map(({ href, src, alt }) => (
        <Link key={alt} href={href} target="_blank">
          <Image
            className="m-2 hover:opacity-80 cursor-pointer"
            aria-hidden
            src={src}
            alt={alt}
            width={26}
            height={26}
          />
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
