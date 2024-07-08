import CreateForm from "./CreateForm"

export default function Contact () {
  return (
    <div className="bg-purplelight p-10 rounded-xl text-[17px]">
      <h2 className="lg:sr-only">CONTACT</h2>
      <p className="text-purpledark">
       Voel je vrij om me een berichtje te sturen. Een vraag, een idee,
       of gewoon even laten weten wat je van mijn portfolio vindt: ik hoor het graag!
      </p>
        <CreateForm/>
    </div>
  )
}
