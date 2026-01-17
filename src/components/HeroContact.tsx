const HeroContact = () => {
  return (
    <div className="bg-gradient flex flex-col gap-4 items-center justify-center py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Prêt à améliorer votre anglais ?
      </h1>
      <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto text-center">
        Rejoignez des centaines d'apprenants satisfaits et commencez votre
        transformation linguistique dès aujourd'hui.
      </p>

      <div className="flex gap-4">
        <button className="border-2 border-white hover:bg-white/5 text-white font-bold text-xl rounded-2xl px-10 py-3 transition duration-300">
          Tester mon niveau gratuitement
        </button>
        <button className="bg-white shadow-orange-200 text-primary hover:-translate-y-0.5 font-bold text-xl rounded-2xl px-10 py-3 transition duration-300">
          Nous contacter sur whatsapp
        </button>
      </div>
    </div>
  );
};

export default HeroContact;
