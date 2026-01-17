import { Check, Star } from "lucide-react";

const PackCard = ({
  titre,
  description,
  prix,
  seance,
  avantages,
  populaire,
}: any) => {
  return (
    <div
      className={`relative w-full bg-white p-8 rounded-4xl shadow-2xl ${
        populaire ? "shadow-blue-100" : "shadow-orange-100"
      }`}
    >
      {/* Populaire */}
      {populaire && (
        <div className="absolute -top-1 px-4 rounded-2xl bg-secondary text-white left-20">
          Le plus populaire
        </div>
      )}
      <div className="flex flex-col items-center mb-6">
        {/* Icone */}
        <div
          className={`${
            populaire ? "bg-blue-100" : "bg-orange-100"
          } w-16 h-16 rounded-full flex items-center justify-center mb-4`}
        >
          <Star
            size={30}
            className={`${
              populaire ? "text-secondary" : "text-primary"
            } font-bold`}
          />
        </div>

        {/* Titre */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold">{titre}</h2>
          <span className="text-sm text-foreground">{description}</span>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-foreground font-medium">
            <span
              className={`${
                populaire ? "text-secondary" : " text-primary "
              } text-4xl font-bold`}
            >
              {prix}
            </span>{" "}
            F/mois
          </p>
          <p className="text-black font-medium">
            {seance.toLocaleString("fr-FR")} séances/semaine
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {avantages.map((av: any) => (
          <div className="flex gap-4">
            <div
              className={`${
                populaire ? "bg-blue-100" : "bg-orange-100 "
              } rounded-full p-1`}
            >
              <Check
                size={14}
                className={`${populaire ? "text-secondary" : "text-primary"}`}
              />
            </div>
            <div>{av}</div>
          </div>
        ))}

        {/* Bouton */}
        <div className="mt-4">
          <button
            className={`${
              populaire
                ? "bg-secondary hover:bg-blue-700 text-white hover:-translate-y-0.5 shadow-2xl shadow-blue-200"
                : "border-2 border-primary hover:bg-[#F97015] hover:text-white"
            } w-full p-3 rounded-4xl text-xl text-primary font-bold transition duration-300`}
          >
            Choisir ce pack
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackCard;
