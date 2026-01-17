import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 ">
      <div className="md:mx-4 lg:mx-20 py-16">
        <div className="grid grid-cols-4 gap-4">
          {/* LOgo et description */}
          <div>
            <div className="flex flex-col gap-6">
              {/* Logo */}
              <Link to="/" className="flex gap-4 place-items-center">
                <img src={logo} alt="Logo" width={60} height={60} />
                <span className="space-x-1 font-bold text-sm sm:text-lg lg:text-xl">
                  <span className="text-white">SPEAK</span>
                  <span className="text-primary">ENGLISH</span>
                  <span className="text-white">CI</span>
                </span>
              </Link>

              <p className="text-md text-white/30">
                Votre partenaire pour maîtriser l'anglais et obtenir des
                traductions certifiées de qualité professionnelle.
              </p>

              <div className="flex gap-4">
                <button className="bg-gray-600 p-2 hover:bg-[#F97015] rounded-full transition duration-300">
                  <Facebook className="text-white" />
                </button>
                <button className="bg-gray-600 p-2 hover:bg-[#F97015] rounded-full transition duration-300">
                  <Instagram className="text-white" />
                </button>
                <button className="bg-gray-600 p-2 hover:bg-[#F97015] rounded-full transition duration-300">
                  <Twitter className="text-white" />
                </button>
                <button className="bg-gray-600 p-2 hover:bg-[#F97015] rounded-full transition duration-300">
                  <MessageCircle className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Nos Services */}
          <div className="flex flex-col gap-3 text-white">
            <h2 className="font-bold text-xl">Nos Services</h2>

            <div className="flex place-items-center gap-4">
              <div className="bg-primary w-2 h-2 rounded-full"></div>{" "}
              <Link
                to="/"
                className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
              >
                Coaching en Anglais
              </Link>
            </div>

            <div className="flex place-items-center gap-4">
              <div className="bg-secondary w-2 h-2 rounded-full"></div>{" "}
              <Link
                to="/"
                className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
              >
                Traduction Certifiée
              </Link>
            </div>

            <div className="flex place-items-center gap-4">
              <div className="bg-primary w-2 h-2 rounded-full"></div>{" "}
              <Link
                to="/"
                className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
              >
                Test de Niveau
              </Link>
            </div>
          </div>

          {/* LIens utiles */}
          <div className="flex flex-col gap-3 text-white">
            <h2 className="font-bold text-xl">Liens Utiles</h2>

            <Link
              to="/"
              className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
            >
              A propos
            </Link>
            <Link
              to="/"
              className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/"
              className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
            >
              Conditions générales
            </Link>
            <Link
              to="/"
              className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
            >
              Politique de Confidentialité
            </Link>
          </div>

          {/* Nos Services */}
          <div className="flex flex-col gap-3 text-white">
            <h2 className="font-bold text-xl">Contact</h2>

            <div className="flex place-items-center gap-4">
              <Phone size={16} className="text-primary" />
              <Link
                to="/"
                className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
              >
                +225 07 97 72 12 70
              </Link>
            </div>

            <div className="flex place-items-center gap-4">
              <Mail size={16} className="text-secondary" />
              <Link
                to="/"
                className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
              >
                speakenglishciv@gmail.com
              </Link>
            </div>

            <div className="flex place-items-center gap-4">
              <MapPin size={16} className="text-primary" />
              <Link
                to="/"
                className="text-lg text-white/30 hover:text-[#F97015] transition duration-300"
              >
                Abidjan, Côte d'Ivoire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
