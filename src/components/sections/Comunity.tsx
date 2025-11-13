import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import perfilManuel from "../../../public/assets/img/perfilManuel.png";

import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


const links = [
  { name: 'Instagram', url: 'https://instagram.com/iamigo.mx', logo: IoLogoInstagram },
  { name: 'Facebook', url: 'https://facebook.com/', logo: FaFacebook },
  { name: 'Telegram', url: 'https://t.me/aprenden8nfacil', logo: FaTelegram },
  { name: 'Tiktok', url: 'https://tiktok.com/@manuel_s112', logo: FaTiktok },
];

const Community = () => {
  return (
    <div 
      className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="w-full max-w-md mx-auto px-4">

        <div className="bg-gray-800/70 backdrop-blur-lg rounded-xl p-6 md:p-8">
          <div className="flex flex-col items-center text-center">

            <img
              src={perfilManuel}
              alt="Profile"
              className="rounded-full w-24 h-24 mb-4 border-2 border-stone-500"
            />
            <div className="mb-1">
              <Title>Unete a la comunidad gratis</Title>
            </div>
            <Paragraph className="text-stone-300 mb-8">
              Automatiza tu negocio con IA. Aprende sobre N8N y herramientas No-Code.
            </Paragraph>
          </div>
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800/80 hover:bg-stone-700/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-start"
              >
                {link.logo && <link.logo className="w-6 h-6 mr-4" />}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
