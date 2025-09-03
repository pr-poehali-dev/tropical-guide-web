import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black">
      {/* Navigation */}
      <nav className="sticky top-0 bg-black/20 backdrop-blur-md border-b border-purple-600/30 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Mountain" className="text-amber-400" size={32} />
              <div className="font-bold text-2xl text-white">СТУПИЦА</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-amber-400 font-bold">Главная</a>
              <Link to="/about" className="text-white hover:text-amber-400 transition-colors font-medium">О нас</Link>
              <Link to="/shop" className="text-white hover:text-amber-400 transition-colors font-medium">Магазин</Link>
              <Link to="/terms" className="text-white hover:text-amber-400 transition-colors font-medium">Условия</Link>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 text-lg">
                ЗАБРОНИРОВАТЬ ТУР
              </Button>
            </div>
            <Button variant="ghost" className="md:hidden text-white">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-purple-900 via-black to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg')`,
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-8 bg-amber-500 text-black font-bold text-xl px-8 py-3">
              🏝️ ЭКСКЛЮЗИВНЫЕ ТРОПИЧЕСКИЕ ТУРЫ
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              ПОКОРИ
              <span className="text-amber-400 block">ТРОПИКИ</span>
              <span className="text-purple-300">КАК ЛЕГЕНДА</span>
            </h1>
            
            <p className="text-2xl text-gray-200 max-w-3xl mb-12 leading-relaxed">
              Превращаем обычные путешествия в легендарные приключения. 
              Настоящие местные гиды. Элитный сервис. Незабываемые эмоции.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-2xl px-12 py-6 h-auto shadow-2xl">
                <Icon name="MapPin" className="mr-3" size={28} />
                ВЫБРАТЬ НАПРАВЛЕНИЕ
              </Button>
              <Button size="lg" variant="outline" className="border-4 border-white text-white hover:bg-white hover:text-black font-bold text-2xl px-12 py-6 h-auto">
                <Icon name="Play" className="mr-3" size={28} />
                СМОТРЕТЬ ВИДЕО
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-black text-amber-400">500+</div>
                <div className="text-white font-semibold">ДОВОЛЬНЫХ КЛИЕНТОВ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-amber-400">12</div>
                <div className="text-white font-semibold">СТРАН</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-amber-400">5★</div>
                <div className="text-white font-semibold">РЕЙТИНГ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-500 text-black font-bold text-lg px-6 py-2">
              ТОПОВЫЕ НАПРАВЛЕНИЯ
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              ВЫБЕРИ СВОЙ
              <span className="text-amber-400 block">ТРОПИЧЕСКИЙ РАЙ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Каждое направление — это уникальное приключение с местными гидами, 
              которые знают все секретные места.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "МАЛЬДИВЫ",
                subtitle: "Водная стихия",
                price: "от ₽ 250,000",
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                features: ["Дайвинг с акулами", "Частные острова", "VIP сервис"],
                rating: 5,
                reviews: 87
              },
              {
                name: "БАЛИ",
                subtitle: "Духовное путешествие", 
                price: "от ₽ 180,000",
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                features: ["Древние храмы", "Серфинг", "Йога ретриты"],
                rating: 5,
                reviews: 124
              },
              {
                name: "ТАИЛАНД",
                subtitle: "Приключения джунглей",
                price: "от ₽ 150,000",
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                features: ["Экстремальные треки", "Местная кухня", "Тайский бокс"],
                rating: 5,
                reviews: 93
              }
            ].map((destination, index) => (
              <Card key={index} className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-500 text-black font-bold">
                      ТОП ВЫБОР
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-amber-400 fill-current" size={16} />
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-black text-white">{destination.price}</div>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-2xl font-black text-white">{destination.name}</h3>
                  <p className="text-amber-400 font-semibold">{destination.subtitle}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-amber-400 fill-current" size={16} />
                      ))}
                    </div>
                    <span className="text-gray-300">({destination.reviews} отзывов)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {destination.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <Icon name="Check" className="text-amber-400 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg py-3">
                    ВЫБРАТЬ ТУР
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-500 text-black font-bold text-lg px-6 py-2">
              НАША КОМАНДА
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              МЕСТНЫЕ ГИДЫ
              <span className="text-amber-400 block">МИРОВОГО УРОВНЯ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Каждый гид — это легенда своего региона. Они знают секретные места, 
              где не ступала нога обычного туриста.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "РАДЖА СИНГХ",
                title: "Мастер тропиков",
                region: "Бали, Индонезия",
                experience: "15 лет опыта",
                image: "/img/885aa2a6-d4fb-4b27-9d7c-a1c5a40f2108.jpg",
                specialties: ["Экстремальные треки", "Древние храмы", "Серфинг"],
                rating: 5,
                description: "Раджа провел более 1000 туров и знает каждый уголок острова."
              },
              {
                name: "КАРЛОС МЕНДЕС",
                title: "Покоритель океанов",
                region: "Мальдивы",
                experience: "12 лет опыта",
                image: "/img/885aa2a6-d4fb-4b27-9d7c-a1c5a40f2108.jpg",
                specialties: ["Дайвинг", "Водные виды спорта", "Частные острова"],
                rating: 5,
                description: "Карлос — чемпион по фридайвингу и знает лучшие дайв-споты."
              },
              {
                name: "СОМЧАЙ ТАНГ",
                title: "Король джунглей",
                region: "Таиланд",
                experience: "18 лет опыта", 
                image: "/img/885aa2a6-d4fb-4b27-9d7c-a1c5a40f2108.jpg",
                specialties: ["Джунгли", "Тайский бокс", "Местная кухня"],
                rating: 5,
                description: "Сомчай родился в джунглях и знает их как никто другой."
              }
            ].map((guide, index) => (
              <Card key={index} className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 text-center hover:scale-105 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="relative mb-6">
                    <img 
                      src={guide.image} 
                      alt={guide.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-amber-400"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-amber-500 text-black font-bold">
                        {guide.title}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-2">{guide.name}</h3>
                  <p className="text-amber-400 font-semibold mb-1">{guide.region}</p>
                  <p className="text-gray-300 mb-4">{guide.experience}</p>
                  
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-amber-400 fill-current" size={20} />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm">{guide.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">СПЕЦИАЛИЗАЦИЯ:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {guide.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="border-amber-400 text-amber-400 text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold">
                    ВЫБРАТЬ ГИДА
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-amber-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              СТАНЬ ЧАСТЬЮ
              <span className="text-amber-400 block">СООБЩЕСТВА ЛЕГЕНД</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Подписывайся на наши соцсети и получай эксклюзивный контент: 
              секретные места, скидки и истории наших путешественников.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-pink-600 to-purple-800 border-pink-500 text-center cursor-pointer hover:scale-105 transition-all duration-300">
              <CardContent className="py-8">
                <Icon name="Instagram" className="text-white mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-black text-white mb-4">INSTAGRAM</h3>
                <p className="text-pink-200 mb-6">
                  Ежедневные сторис из райских уголков и эксклюзивные фото с наших туров
                </p>
                <div className="text-3xl font-black text-amber-400 mb-2">50K+</div>
                <p className="text-pink-200 mb-6">подписчиков</p>
                <Button className="w-full bg-white text-purple-900 hover:bg-gray-100 font-bold">
                  ПОДПИСАТЬСЯ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-600 to-purple-800 border-red-500 text-center cursor-pointer hover:scale-105 transition-all duration-300">
              <CardContent className="py-8">
                <Icon name="Youtube" className="text-white mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-black text-white mb-4">YOUTUBE</h3>
                <p className="text-red-200 mb-6">
                  Захватывающие влоги, обзоры направлений и секреты путешествий
                </p>
                <div className="text-3xl font-black text-amber-400 mb-2">25K+</div>
                <p className="text-red-200 mb-6">подписчиков</p>
                <Button className="w-full bg-white text-purple-900 hover:bg-gray-100 font-bold">
                  СМОТРЕТЬ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-purple-800 border-blue-500 text-center cursor-pointer hover:scale-105 transition-all duration-300">
              <CardContent className="py-8">
                <Icon name="MessageCircle" className="text-white mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-black text-white mb-4">TELEGRAM</h3>
                <p className="text-blue-200 mb-6">
                  Закрытое сообщество, горящие предложения и персональные консультации
                </p>
                <div className="text-3xl font-black text-amber-400 mb-2">VIP</div>
                <p className="text-blue-200 mb-6">доступ</p>
                <Button className="w-full bg-white text-purple-900 hover:bg-gray-100 font-bold">
                  ПРИСОЕДИНИТЬСЯ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-amber-500 text-black font-bold text-lg px-6 py-2">
              ПОЧЕМУ МЫ?
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              ВОТ ЧТО ДЕЛАЕТ НАС
              <span className="text-amber-400 block">ЛУЧШИМИ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Users",
                title: "МЕСТНЫЕ ГИДЫ",
                description: "Настоящие аборигены, знающие каждый секрет своего региона"
              },
              {
                icon: "Shield",
                title: "100% БЕЗОПАСНОСТЬ",
                description: "Полная страховка и проверенные маршруты от профессионалов"
              },
              {
                icon: "Star",
                title: "VIP СЕРВИС",
                description: "Элитный уровень обслуживания для настоящих ценителей"
              },
              {
                icon: "Trophy",
                title: "УНИКАЛЬНОСТЬ",
                description: "Эксклюзивные места, недоступные обычным туристам"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 text-center hover:scale-105 transition-all duration-300">
                <CardContent className="py-8">
                  <Icon name={feature.icon} className="text-amber-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-black text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 via-purple-900 to-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            ГОТОВ СТАТЬ
            <span className="text-amber-400 block">ЛЕГЕНДОЙ?</span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
            Твоё приключение начинается с одного клика. 
            Присоединяйся к элитному клубу покорителей тропиков.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-3xl px-16 py-8 h-auto shadow-2xl">
              <Icon name="Plane" className="mr-4" size={32} />
              ЗАБРОНИРОВАТЬ ТУР
            </Button>
            <Button size="lg" variant="outline" className="border-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold text-3xl px-16 py-8 h-auto">
              <Icon name="Phone" className="mr-4" size={32} />
              КОНСУЛЬТАЦИЯ
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
                <li>Сейшелы</li>
                <li>Маврикий</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-amber-400 mb-4">УСЛУГИ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Элитные туры</li>
                <li>Местные гиды</li>
                <li>VIP сервис</li>
                <li>Индивидуальные маршруты</li>
                <li>Корпоративные туры</li>
                <li>Свадебные путешествия</li>
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
                  info@stupica.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Россия
                </li>
                <li className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  24/7 поддержка
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

export default Home;