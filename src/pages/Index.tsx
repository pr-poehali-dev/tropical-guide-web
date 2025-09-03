import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-purple-100 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-heading font-bold text-2xl text-purple-600">TREVEL</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">Главная</a>
            <a href="#destinations" className="text-gray-600 hover:text-purple-600 transition-colors">Направления</a>
            <a href="#tours" className="text-gray-600 hover:text-purple-600 transition-colors">Туры</a>
            <a href="#team" className="text-gray-600 hover:text-purple-600 transition-colors">О нас</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Контакты</a>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
            Забронировать
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-orange-500">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/img/1135a9a1-f5ea-42d8-8bb8-74a821f64bcc.jpg)'
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-lg">
            🏆 #1 Тропические Приключения
          </Badge>
          <h1 className="font-heading font-black text-5xl md:text-7xl mb-6 leading-tight">
            ПОКОРИ<br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              ТРОПИКИ
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Эксклюзивные приключения с местными гидами. 
            Почувствуй себя настоящим исследователем тропических островов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              <Icon name="MapPin" size={20} className="mr-2" />
              Выбрать направление
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section id="tours" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-600 px-4 py-2">
              🌴 Популярные туры
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Приключения, которые<br />изменят твою жизнь
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Отобрали лучшие локации для настоящих мужчин, ищущих адреналин и незабываемые впечатления
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Bali Island Escape",
                subtitle: "14 дней тура",
                price: "$1200",
                image: "/img/1135a9a1-f5ea-42d8-8bb8-74a821f64bcc.jpg",
                features: ["Серфинг", "Вулканы", "Местные гиды"]
              },
              {
                title: "Thailand Adventure",
                subtitle: "10 дней тура",
                price: "$950",
                image: "/img/1135a9a1-f5ea-42d8-8bb8-74a821f64bcc.jpg",
                features: ["Муай Тай", "Джунгли", "Острова"]
              },
              {
                title: "Maldives Expedition",
                subtitle: "7 дней тура",
                price: "$1800",
                image: "/img/1135a9a1-f5ea-42d8-8bb8-74a821f64bcc.jpg",
                features: ["Дайвинг", "Рыбалка", "Люкс"]
              }
            ].map((tour, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-purple-100">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-gray-900">{tour.title}</h3>
                      <p className="text-gray-600">{tour.subtitle}</p>
                    </div>
                    <Badge className="bg-orange-500 text-white font-bold text-lg px-3 py-1">
                      {tour.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-purple-600 border-purple-200">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Забронировать тур
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-600 px-4 py-2">
              🔥 Наша команда
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Местные эксперты<br />в каждом регионе
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши гиды — не просто проводники. Это настоящие легенды, которые знают каждый секрет тропиков
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Мадже Кетут",
                role: "Гид по Бали",
                experience: "12 лет опыта",
                image: "/img/515dcdb8-1d91-4f60-b114-e8a813e8a203.jpg",
                expertise: ["Серфинг", "Вулканы", "История"]
              },
              {
                name: "Сомчай Танг",
                role: "Эксперт по Таиланду",
                experience: "15 лет опыта",
                image: "/img/515dcdb8-1d91-4f60-b114-e8a813e8a203.jpg",
                expertise: ["Муай Тай", "Джунгли", "Кухня"]
              },
              {
                name: "Ахмед Насир",
                role: "Капитан Мальдив",
                experience: "20 лет опыта",
                image: "/img/515dcdb8-1d91-4f60-b114-e8a813e8a203.jpg",
                expertise: ["Дайвинг", "Рыбалка", "Океан"]
              }
            ].map((guide, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-purple-100">
                <CardContent className="pt-6">
                  <div 
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${guide.image})` }}
                  />
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">{guide.name}</h3>
                  <p className="text-purple-600 font-semibold mb-2">{guide.role}</p>
                  <p className="text-gray-600 mb-4">{guide.experience}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {guide.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-orange-600 border-orange-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4">
              <Icon name="Users" size={20} className="mr-2" />
              Познакомиться с командой
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Присоединяйся к<br />легендарному комьюнити
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Более 10,000 путешественников уже делятся своими приключениями. 
              Стань частью элитного клуба исследователей тропиков!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
                <Icon name="Instagram" size={24} className="mr-3" />
                Instagram
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
                <Icon name="Youtube" size={24} className="mr-3" />
                YouTube
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={24} className="mr-3" />
                Telegram
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div>
                <div className="font-heading font-bold text-3xl">10K+</div>
                <div className="text-sm opacity-80">Подписчиков</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl">500+</div>
                <div className="text-sm opacity-80">Видео</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl">95%</div>
                <div className="text-sm opacity-80">Довольных</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quick Links */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-heading font-bold text-2xl text-purple-400 mb-4">TREVEL</div>
              <p className="text-gray-400">Тропические приключения для настоящих мужчин</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Направления</h4>
              <div className="space-y-2 text-gray-400">
                <div>Бали</div>
                <div>Таиланд</div>
                <div>Мальдивы</div>
                <div>Филиппины</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-gray-400">
                <div>О компании</div>
                <div>Условия услуг</div>
                <div>Политика конфиденциальности</div>
                <div>FAQ</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@stupitsa.ru</div>
                <div>Москва, Россия</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ступица. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;