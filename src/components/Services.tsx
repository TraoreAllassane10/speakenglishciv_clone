import {
  Award,
  BookOpen,
  Clock,
  FileText,
  LucideClipboardList,
  Shield,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      titre: "Coaching en Anglais",
      desccription:
        "Progressez rapidement avec un accompagnement personnalisé par des coachs expérimentés.",
      caracteristiques: [
        "Séances individuelles ou en groupe",
        "Supports PDF fournis",
        "Certificat à la fin",
      ],
      Icon: BookOpen,
      bgColor: "bg-orange-100",
      textColor: "text-primary",
    },

    {
      titre: "Traduction Certifiée",
      desccription:
        "Traduction professionnelle de tous vos documents officiels avec certification.",
      caracteristiques: [
        "à partir de 9 000 F par page",
        "Livraison en 24h à 72h",
        "Certification officielle",
      ],
      Icon: FileText,
      bgColor: "bg-blue-100",
      textColor: "text-secondary",
    },

    {
      titre: "Test de Niveau",
      desccription:
        "Évaluez gratuitement votre niveau d'anglais et recevez des recommandations personnalisées.",
      caracteristiques: [
        "Test gratuit en ligne",
        "Résultat immédiat",
        "Conseils personnalisés",
      ],
      Icon: LucideClipboardList,
      bgColor: "bg-orange-100",
      textColor: "text-primary",
    },
  ];

  const avantages = [
    {
      Icon: Clock,
      titre: "Livraison Rapide",
      description: "Traductions livrées en 24h à 72h selon le volume",
      bgColor: "bg-orange-100",
      textColor: "text-primary",
    },
    {
      Icon: Shield,
      titre: "Traduction Certifiée",
      description: "Documents officiellement reconnus",
      bgColor: "bg-blue-100",
      textColor: "text-secondary",
    },
    {
      Icon: Award,
      titre: "Certificat Inclus",
      description: "Certificat de formation pour le coaching",
      bgColor: "bg-orange-100",
      textColor: "text-primary",
    },
  ];
  return (
    <div className="py-24 bg-gray-50">
      <div className="md:mx-4 lg:mx-20 py-14">
        {/* Entête */}
        <div className="flex flex-col items-center justify-center">
          <span className="px-4 py-1 text-primary font-medium bg-orange-100  rounded-full ">
            Nos Services
          </span>

          <h1 className="text-3xl md:text-4xl text-center font-bold my-4">
            Tout ce dont vous avez besoin pour <br />{" "}
            <span className="text-gradient">réussir en anglais</span>
          </h1>

          <p className="text-xl text-center text-foreground">
            Du coaching personnalisé à la traduction certifiée, nous vous
            accompagnons dans toutes vos démarches linguistiques.
          </p>
        </div>

        {/* Nos services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {services.map((service) => (
            <ServiceCard
              titre={service.titre}
              desccription={service.desccription}
              caracteristiques={service.caracteristiques}
              Icon={service.Icon}
              bgColor={service.bgColor}
              textColor={service.textColor}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {avantages.map((av) => (
            <div className="flex flex-col items-center justify-center gap-3 bg-white p-8 rounded-4xl shadow-2xl shadow-gray-50">
              <div
                className={`${av.bgColor} w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300`}
              >
                <av.Icon size={24} className={`${av.textColor}`} />
              </div>

              <h3 className="font-medium text-lg">{av.titre}</h3>

              <p className="text-foreground">{av.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
