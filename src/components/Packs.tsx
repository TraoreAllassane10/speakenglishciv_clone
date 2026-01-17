import PackCard from "./PackCard";

const Packs = () => {
  const packs = [
    {
      titre: "Starter",
      description: "Idéal pour tester",
      prix: 30000,
      seance: 2,
      avantages: [
        "Durée : 1h par séance",
        "Supports PDF inclus",
        "Suivi par un coach dédié",
        "Certificat de fin de formation",
        "Accès au groupe WhatsApp",
      ],
      populaire: false,
    },
    {
      titre: "Progression",
      description: "Pour progresser",
      prix: 45000,
      seance: 3,
      avantages: [
        "Durée : 1h par séance",
        "Supports PDF inclus",
        "Suivi par un coach dédié",
        "Certificat de fin de formation",
        "Accès au groupe WhatsApp",
        "Séances de conversation",
      ],
      populaire: true,
    },
    {
      titre: "Intensif",
      description: "Résultats rapides",
      prix: 60000,
      seance: 4,
      avantages: [
        "Durée : 1h par séance",
        "Supports PDF inclus",
        "Suivi par un coach dédié",
        "Certificat de fin de formation",
        "Accès au groupe WhatsApp",
        "Séances de conversation",
        "Accompagnement prioritaire",
      ],
      populaire: false,
    },
  ];
  return (
    <div className="py-24">
      {/* Entête */}
      <div className="flex flex-col items-center justify-center">
        <span className="px-4 py-1 text-secondary font-medium bg-blue-100  rounded-full ">
          Nos Packs Coaching
        </span>

        <h1 className="text-3xl md:text-4xl text-center font-bold my-4">
          Choisissez le pack qui{" "}
          <span className="text-gradient">vous convient</span>
        </h1>

        <p className="text-xl text-center text-foreground">
          Tous nos packs incluent un suivi personnalisé par un coach expérimenté
          et un certificat à la fin de votre formation.
        </p>
      </div>

      {/* Packs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-5 md:mx-56">
        {packs.map((pack) => (
          <PackCard
            titre={pack.titre}
            description={pack.description}
            prix={pack.prix}
            seance={pack.seance}
            avantages={pack.avantages}
            populaire={pack.populaire}
          />
        ))}
      </div>
    </div>
  );
};

export default Packs;
