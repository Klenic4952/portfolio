import Image from "next/image";
import Link from "next/link";
import Certificate from "./certificate.png";


export default function Education() {
  return (
    <div className="bg-midpurple p-10 rounded-xl text-[17px]">
      <h2 className="lg:sr-only">OPLEIDING</h2>
      <p className="text-purpledark">
        In mei 2024 slaagde ik voor de opleiding Front-end Development bij
        Winc Academy. Check hieronder mijn Front-end certificaat.
      </p>
      <p className="mt-10">
      <Link href="https://certificates.wincacademy.com/655599e5-d0a0-4c5a-8377-353d4589c4d5#gs.9i91ce" target="blank">
        <Image src={Certificate} alt="Certificate Front-end Development"  />
      </Link>
      </p>
      <h3 className="font-bold mt-10">Vaardigheden/kennis</h3>
    </div>
  );
}
