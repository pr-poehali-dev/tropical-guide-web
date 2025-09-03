import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      {/* Navigation */}
      <nav className="sticky top-0 bg-black/20 backdrop-blur-md border-b border-purple-600/30 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Mountain" className="text-amber-400" size={32} />
              <div className="font-bold text-2xl text-white">СТУПИЦА</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-white hover:text-amber-400 transition-colors font-medium">Главная</a>
              <a href="/about" className="text-white hover:text-amber-400 transition-colors font-medium">О нас</a>
              <a href="/shop" className="text-white hover:text-amber-400 transition-colors font-medium">Магазин</a>
              <a href="/terms" className="text-white hover:text-amber-400 transition-colors font-medium">Условия</a>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(75, 0, 130, 0.7), rgba(0, 0, 0, 0.8)), url('/img/cd49d7e0-8c55-4604-af57-61d54d0977ad.jpg')`
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-amber-500 text-black font-bold text-lg px-6 py-2">
            🏆 #1 ТРОПИЧЕСКИЕ ТУРЫ
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            ЗАВОЮЙ
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent block">
              ТРОПИЧЕСКИЙ РАЙ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-medium">
            Эксклюзивные приключения с местными гидами. Почувствуй себя покорителем тропиков и живи как легенда.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-4 h-auto">
              <Icon name="Plane" className="mr-2" size={24} />
              ЗАБРОНИРОВАТЬ ТУР
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold text-xl px-8 py-4 h-auto">
              <Icon name="Play" className="mr-2" size={24} />
              СМОТРЕТЬ ВИДЕО
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-black text-amber-400">500+</div>
              <div className="text-sm font-medium">ДОВОЛЬНЫХ КЛИЕНТОВ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-amber-400">15+</div>
              <div className="text-sm font-medium">СТРАН</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-amber-400">10</div>
              <div className="text-sm font-medium">ЛЕТ ОПЫТА</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500 text-black font-bold">ТОП НАПРАВЛЕНИЯ</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              ЛЕГЕНДАРНЫЕ
              <span className="text-amber-400 block">ПРИКЛЮЧЕНИЯ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Выбери свой путь к славе. Каждый тур — это шанс стать героем собственной истории.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "МАЛЬДИВЫ ЭЛИТ",
                price: "₽ 250,000",
                duration: "7 дней",
                image: "/img/cd49d7e0-8c55-4604-af57-61d54d0977ad.jpg",
                features: ["Частный остров", "Подводная охота", "VIP транспорт"]
              },
              {
                title: "БАЛИ ЗАВОЕВАТЕЛЬ",  
                price: "₽ 180,000",
                duration: "10 дней",
                image: "/img/cd49d7e0-8c55-4604-af57-61d54d0977ad.jpg",
                features: ["Вулкан трекинг", "Серфинг", "Местные гиды"]
              },
              {
                title: "ТАИЛАНД ВОИН",
                price: "₽ 120,000", 
                duration: "8 дней",
                image: "/img/cd49d7e0-8c55-4604-af57-61d54d0977ad.jpg",
                features: ["Муай-тай", "Джунгли", "Ночная жизнь"]
              }
            ].map((tour, index) => (
              <Card key={index} className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-500 text-black font-bold">{tour.duration}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-2xl font-black text-white">{tour.title}</h3>
                  <div className="text-3xl font-black text-amber-400">{tour.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tour.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <Icon name="Check" className="text-amber-400 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold">
                    ЗАБРОНИРОВАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500 text-black font-bold">НАША КОМАНДА</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              МЕСТНЫЕ
              <span className="text-amber-400 block">ЛЕГЕНДЫ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Наши гиды — не просто проводники. Это местные герои, которые покажут тебе секретные места и сделают твоё путешествие легендарным.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "КАРЛОС МЕНДЕС",
                role: "Гид по Карибам",
                experience: "12 лет опыта",
                image: "/img/6b084e0a-d702-44bc-ae39-0993148940a3.jpg",
                speciality: "Дайвинг с акулами"
              },
              {
                name: "АЖАН ПУТРА", 
                role: "Мастер Бали",
                experience: "8 лет опыта",
                image: "/img/6b084e0a-d702-44bc-ae39-0993148940a3.jpg",
                speciality: "Вулканы и серфинг"
              },
              {
                name: "СОМЧАЙ ТИГ",
                role: "Воин Таиланда",
                experience: "15 лет опыта", 
                image: "/img/6b084e0a-d702-44bc-ae39-0993148940a3.jpg",
                speciality: "Джунгли и муай-тай"
              }
            ].map((guide, index) => (
              <Card key={index} className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-400">
                    <img 
                      src={guide.image} 
                      alt={guide.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-white">{guide.name}</h3>
                  <p className="text-amber-400 font-bold">{guide.role}</p>
                  <p className="text-gray-300">{guide.experience}</p>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-purple-700 text-white font-bold mb-4">
                    {guide.speciality}
                  </Badge>
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-amber-400 fill-current" size={20} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-amber-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ПРИСОЕДИНЯЙСЯ К
            <span className="text-amber-400 block">ЛЕГЕНДАМ</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Стань частью элитного сообщества путешественников. Делись своими победами и получай эксклюзивные предложения.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: "Instagram", name: "Instagram", followers: "50K" },
              { icon: "Youtube", name: "YouTube", followers: "25K" },
              { icon: "MessageCircle", name: "Telegram", followers: "15K" }
            ].map((social, index) => (
              <Button 
                key={index}
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-4 h-auto"
              >
                <Icon name={social.icon} className="mr-2" size={24} />
                {social.name}
                <span className="ml-2 text-sm bg-black/20 px-2 py-1 rounded">
                  {social.followers}
                </span>
              </Button>
            ))}
          </div>
          
          <Badge className="bg-amber-500 text-black font-bold text-lg px-6 py-2">
            🔥 ЭКСКЛЮЗИВНЫЙ КОНТЕНТ И СКИДКИ
          </Badge>
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

export default Index;