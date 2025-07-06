
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gorila-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gorila-yellow">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-gorila-yellow" />
                <span>Rua: Leopoldina Bairro Jardim União N:12 - Várzea Grande - MT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gorila-yellow" />
                <span>(65) 9.9914-3831</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gorila-yellow" />
                <span>contato@gorilarise.com.br</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gorila-yellow">Horários</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-gorila-yellow" />
                <div>
                  <p>Segunda a Sexta: 05:30 - 21:00</p>
                  <p>Sábado: 16:00 - 19:00</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gorila-yellow">Redes Sociais</h3>
            <div className="space-y-3">
              <a 
                href="https://facebook.com/gorilarise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-gorila-yellow transition-colors"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
              <a 
                href="https://youtube.com/gorilarise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-gorila-yellow transition-colors"
              >
                <Youtube size={18} />
                <span>YouTube</span>
              </a>
              <a 
                href="https://instagram.com/gorilarise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-gorila-yellow transition-colors"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://open.spotify.com/playlist/gorilarise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-gorila-yellow transition-colors"
              >
                <Music size={18} />
                <span>Playlist Spotify</span>
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gorila-yellow">Gorila Rise</h3>
            <p className="text-gray-300 leading-relaxed">Mantenha-se forte!</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Esporte Clube Gorila Rise. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
