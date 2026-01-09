import { ArrowRight, FileText } from "lucide-react";
import phone from "../assets/phone.png";

const Acceuil = () => {
  return (
    <section className="bg-hero min-h-125 sm:h-150 lg:h-175">
      <div className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 md:mx-4 lg:mx-20 text-lg">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-18 items-center">
          <div className="flex flex-col gap-8 items-center lg:items-start text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center lg:text-left">
              Maîtrisez l'anglais, progressez vite
            </h1>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-lg text-center lg:text-left">
              Coaching personnalisé et traductions certifiées pour tous vos
              projets professionnels.
            </p>

            <div className="flex gap-4">
              <button className="flex gap-2 items-center justify-center place-items-center text-md bg-white hover:bg-white/90 text-secondary hover:-translate-y-0.5 font-semibold px-8 py-3 rounded-full transition-all shadow-lg duration-300 group">
                Découvrir le Caoching{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-all duration-300"
                />
              </button>
              <button className="flex gap-2 items-center justify-center place-items-center text-md bg-transparent hover:bg-white/10 text-white border-2 border-white/30 font-semibold px-8 py-3 rounded-full">
                <FileText size={16} /> Taduction certifiée
              </button>
            </div>
          </div>

          <div className="lg:ml-56">
            <div className="relative ">
              <div className="absolute -top-2 lg:-top-4 right-4 bg-primary  text-white p-1 rounded-full w-40 flex justify-center items-center animate-bounce transition-all">
                <span className="font-bold">9 000 FCFA</span>/page
              </div>

              <img src={phone} alt="Telephone" width={300} height={300} />

              <div className="absolute -bottom-2 lg:-bottom-4 -left-4 bg-white  text-secondary p-1 rounded-full w-56 flex justify-center items-center animate-bounce transition-all">
                <span className="font-bold">A partir de 30000</span>/mois
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acceuil;
