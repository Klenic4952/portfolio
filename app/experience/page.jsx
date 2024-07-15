import Image from "next/image";
import Link from "next/link";


export default function Experience () {
    return (
      <div className="bg-brown p-10 rounded-xl text-[17px]">
        <h2 className="lg:sr-only">WERKERVARING</h2>
        <p className="text-purpledark">
          Mijn werkzame leven begon bij de Rabobank en ik heb daar bijna 25 jaar
          met veel plezier en voldoening gewerkt. Het was een spannende stap 
          om mijn eigen weg te gaan. Check mijn CV voor mijn profiel en
          mijn werkervaring tot nu toe. 
        </p>
        <Link href="/Image/cv.pdf" target="blank" rel="noopener noreferrer">
        <Image
          src="/Image/cv.png"
          alt="CV"
          width={354}
          height={500}
          className="rounded-lg mx-auto mt-10"
          //sizes="(min-width: 1340px) 325px, (min-width: 1040px) calc(30vw - 71px), (min-width: 780px) calc(70vw - 123px), calc(70vw - 90px)"
          style={{
            width: "65%",
            height: "auto",
          }}
        />
        </Link>
        </div>
    )
}