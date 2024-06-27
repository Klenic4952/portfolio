import Image from "next/image";
import EventApp from "./event_app.png";
import RecipeApp from "./recipe_checker.png"

export default function Projects() {
  return (
    <div className="bg-[#1B0F1C] p-10 rounded-xl">
      <h2 className="lg:sr-only">PROJECTEN</h2>
      <div>
        <h3 className="text-beige">Event App</h3>
        <p className="text-purplelight mt-5 mb-5">
          Deze React applicatie is gemaakt met behulp van Vite.js, React Router
          en Chakra UI. Het is ontworpen met als doel het zoeken van, bewerken,
          toevoegen of verwijderen van evementen uit de database. Deze
          applicatie is alleen voor demonstratie doeleinden, de database is
          gekoppeld aan My JSON Server.
        </p>
        <a href="https://react-event-app-2024.netlify.app/" target="blank">
          <Image src={EventApp} alt="Event App" />
        </a>
      </div>
      <div>
        <h3 className="text-beige mt-5">Recipe Checker</h3>
        <p className="text-purplelight mt-5 mb-5">
          Deze React applicatie is gemaakt met behulp van React en Chakra UI. 
          Het biedt gebruikers de mogelijkheid om recepten te zoeken op basis
          van dieet-voorkeuren, gezondheidslabels of de naam van het recept. 
          Wanneer de gebruiker een recept selecteert, wordt er gedetailleerde 
          informatie met betrekking tot het gekozen recept getoond. 
        </p>
        <a href="https://recipe-checker-app-2023.netlify.app/" target="blank">
          <Image src={RecipeApp} alt="Event App" />
        </a>
      </div>
    </div>
  );
}
