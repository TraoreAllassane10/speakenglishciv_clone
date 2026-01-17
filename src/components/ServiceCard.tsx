import { ArrowRight } from "lucide-react";

const ServiceCard = ({
  titre,
  desccription,
  caracteristiques,
  Icon,
  bgColor,
  textColor,
}: any) => {
  return (
    <div className="group bg-white p-8 rounded-4xl shadow-2xl shadow-gray-50 space-y-4 flex flex-col">
      <div
        className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300`}
      >
        <Icon size={30} className={`${textColor}`} />
      </div>

      <h3 className="text-xl font-bold">{titre}</h3>

      <p className="text-foreground text-md">{desccription}</p>

      <ul className="text-foreground space-y-1">
        {caracteristiques.map((car: any, index: number) => (
          <div className="flex gap-2 place-items-center">
            <p className="h-1.5 w-1.5 bg-primary rounded-full"></p>
            <li key={index}>{car}</li>
          </div>
        ))}
      </ul>

      <button
        className={`${
          textColor === "text-primary"
            ? "bg-primary shadow-orange-100"
            : "bg-secondary shadow-blue-100"
        } group flex gap-2 items-center justify-center place-items-center bg-primary text-white font-semibold p-2 rounded-xl shadow-lg  hover:-translate-y-0.5 transition duration-300`}
      >
        En savoir plus{" "}
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-all duration-300"
        />
      </button>
    </div>
  );
};

export default ServiceCard;
