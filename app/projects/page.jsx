import Image from "next/image";
import EventApp from "./event_app.png";
import RecipeApp from "./recipe_checker.png";

export default function Projects() {
  return (
    <div className="bg-[#1B0F1C] text-beigelight p-10 rounded-xl text-[15px]">
      <h2 className="lg:sr-only">PROJECTEN</h2>
      <div>
        <div>
          <h3 className="text-midpurple font-bold text-center text-[24px]">Event App</h3>
          <a href="https://react-event-app-2024.netlify.app/" target="blank">
            <Image
              src={EventApp}
              alt="Event App"
              width={550}
              height={273}
              className="border-solid border-8 border-midpurple rounded-lg mx-auto mt-10"
              sizes="(min-width: 1340px) 286px, (min-width: 1040px) calc(27.86vw - 82px), (min-width: 780px) calc(65vw - 130px), calc(65vw - 99px)"
              style={{
                width: "65%",
                height: "auto",
              }}
            />
          </a>
        </div>
        <div>
          <p className="text-beigelight my-8">
            Dit was het finale assessment voor de opleiding in 2024. 
            De React Applicatie is gemaakt met behulp van Vite.js, React Router en Chakra UI. 
            Het is ontworpen met als doel het zoeken van, bewerken, toevoegen of verwijderen
            van evementen uit een database. Deze applicatie is alleen voor demonstratie doeleinden,
            de database is gekoppeld aan My JSON Server.
          </p>
        </div>
      </div>
      <div>
        <div className="mt-12">
        <h3 className="text-midpurple font-bold text-center text-[24px]">Recipe Checker</h3>
          <a href="https://recipe-checker-app-2023.netlify.app/" target="blank">
            <Image
              src={RecipeApp}
              alt="Event App"
              width={550}
              height={264}
              className="border-solid border-8 border-midpurple rounded-lg mx-auto mt-10"
              sizes="(min-width: 1340px) 325px, (min-width: 1040px) calc(30vw - 71px), (min-width: 780px) calc(70vw - 123px), calc(70vw - 90px)"
              style={{
                width: "65%",
                height: "auto",
              }}
            />
          </a>
        </div>
        <div>
          <p className="text-beigelight my-8">
            Deze app was een opdracht voor de opleiding eind 2023. Deze React 
            applicatie is gemaakt met behulp van React en Chakra UI.
            Het biedt gebruikers de mogelijkheid om recepten te zoeken op basis
            van dieet-voorkeuren, gezondheidslabels of de naam van het recept.
            Wanneer de gebruiker een recept selecteert, wordt er gedetailleerde
            informatie met betrekking tot het gekozen recept getoond.
          </p>
        </div>
      </div>
    </div>
  );
}
