import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black">
      {/* Navigation */}
      <nav className="sticky top-0 bg-black/20 backdrop-blur-md border-b border-purple-600/30 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <Icon name="Mountain" className="text-amber-400" size={32} />
              <div className="font-bold text-2xl text-white">СТУПИЦА</div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-white hover:text-amber-400 transition-colors font-medium">Главная</Link>
              <Link to="/about" className="text-amber-400 font-bold">О нас</Link>
              <Link to="/shop" className="text-white hover:text-amber-400 transition-colors font-medium">Магазин</Link>
              <Link to="/terms" className="text-white hover:text-amber-400 transition-colors font-medium">Условия</Link>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6">
                Забронировать
              </Button>
            </div>
            <Button variant="ghost" className="md:hidden text-white">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-black text-center">
        <div className="container mx-auto px-4">
          <Badge className="mb-6 bg-amber-500 text-black font-bold text-lg px-6 py-2">
            🏆 НАША ИСТОРИЯ
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            О КОМПАНИИ
            <span className="text-amber-400 block">СТУПИЦА</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Мы превращаем обычных мужчин в легенд тропических приключений. 
            За 10 лет работы создали сообщество элитных путешественников.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-amber-500 text-black font-bold">НАША МИССИЯ</Badge>
              <h2 className="text-4xl font-black text-white mb-6">
                СОЗДАЁМ ГЕРОЕВ
                <span className="text-amber-400 block">ТРОПИКОВ</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Наша цель — дать каждому мужчине возможность почувствовать себя первооткрывателем. 
                Мы не просто организуем туры, мы создаём легенды.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Check" className="text-amber-400 mr-3" size={24} />
                  <span className="text-white font-bold">Элитные приключения</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-amber-400 mr-3" size={24} />
                  <span className="text-white font-bold">Местные эксперты</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-amber-400 mr-3" size={24} />
                  <span className="text-white font-bold">Максимальный комфорт</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg" 
                alt="Тропическое приключение"
                className="w-full h-96 object-cover rounded-lg border-4 border-amber-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-amber-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-12">НАШИ ДОСТИЖЕНИЯ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "ДОВОЛЬНЫХ КЛИЕНТОВ", icon: "Users" },
              { number: "15+", label: "СТРАН", icon: "Globe" },
              { number: "10", label: "ЛЕТ ОПЫТА", icon: "Calendar" },
              { number: "98%", label: "РЕКОМЕНДАЦИЙ", icon: "Star" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <Icon name={stat.icon} className="text-amber-400 mx-auto mb-4" size={48} />
                <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500 text-black font-bold">НАШИ ЦЕННОСТИ</Badge>
            <h2 className="text-4xl font-black text-white mb-4">
              ЧТО НАС
              <span className="text-amber-400 block">ОТЛИЧАЕТ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Crown",
                title: "ЭЛИТНОСТЬ",
                description: "Только лучшие места, лучшие гиды и лучший сервис для наших клиентов."
              },
              {
                icon: "Shield",
                title: "БЕЗОПАСНОСТЬ", 
                description: "Ваша безопасность — наш приоритет. Полная страховка и проверенные маршруты."
              },
              {
                icon: "Heart",
                title: "СТРАСТЬ",
                description: "Мы живём тропиками. Каждый тур создаётся с душой и любовью к приключениям."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 text-center p-8">
                <Icon name={value.icon} className="text-amber-400 mx-auto mb-6" size={64} />
                <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 via-purple-900 to-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ГОТОВ СТАТЬ
            <span className="text-amber-400 block">ЛЕГЕНДОЙ?</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Присоединяйся к элитному клубу путешественников. Твоё приключение начинается здесь.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-4 h-auto">
              <Icon name="Plane" className="mr-2" size={24} />
              ЗАБРОНИРОВАТЬ ТУР
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold text-xl px-8 py-4 h-auto">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              СВЯЗАТЬСЯ С НАМИ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Mountain" className="text-amber-400" size={32} />
                <div className="font-bold text-2xl">СТУПИЦА</div>
              </div>
              <p className="text-gray-400 mb-4">
                Превращаем обычные путешествия в легендарные приключения.
              </p>
              <div className="flex gap-4">
                <Icon name="Instagram" className="text-amber-400 cursor-pointer" size={24} />
                <Icon name="Youtube" className="text-amber-400 cursor-pointer" size={24} />
                <Icon name="MessageCircle" className="text-amber-400 cursor-pointer" size={24} />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-amber-400 mb-4">НАПРАВЛЕНИЯ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Мальдивы</li>
                <li>Бали</li>
                <li>Таиланд</li>
                <li>Филиппины</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-amber-400 mb-4">УСЛУГИ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Элитные туры</li>
                <li>Местные гиды</li>
                <li>VIP сервис</li>
                <li>Снаряжение</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-amber-400 mb-4">КОНТАКТЫ</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@stuipca.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СТУПИЦА. Все права защищены. Стань легендой.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;