import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Shop = () => {
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
              <Link to="/about" className="text-white hover:text-amber-400 transition-colors font-medium">О нас</Link>
              <Link to="/shop" className="text-amber-400 font-bold">Магазин</Link>
              <Link to="/terms" className="text-white hover:text-amber-400 transition-colors font-medium">Условия</Link>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6">
                Корзина (0)
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
            🛍️ ЭКИПИРОВКА ГЕРОЕВ
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            МАГАЗИН
            <span className="text-amber-400 block">СТУПИЦА</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Эксклюзивное снаряжение и мерч для настоящих покорителей тропиков. 
            Только лучшее качество для легендарных приключений.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500 text-black font-bold">КАТЕГОРИИ</Badge>
            <h2 className="text-4xl font-black text-white mb-4">
              ВЫБЕРИ СВОЁ
              <span className="text-amber-400 block">СНАРЯЖЕНИЕ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { name: "ОДЕЖДА", icon: "Shirt", count: "12 товаров" },
              { name: "СНАРЯЖЕНИЕ", icon: "Compass", count: "8 товаров" },
              { name: "АКСЕССУАРЫ", icon: "Watch", count: "15 товаров" },
              { name: "МЕРЧ", icon: "Gift", count: "6 товаров" }
            ].map((category, index) => (
              <Card key={index} className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 text-center cursor-pointer hover:scale-105 transition-all duration-300">
                <CardContent className="py-8">
                  <Icon name={category.icon} className="text-amber-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-black text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-500 text-black font-bold">ХИТЫ ПРОДАЖ</Badge>
            <h2 className="text-4xl font-black text-white mb-4">
              ЭКИПИРОВКА
              <span className="text-amber-400 block">ЛЕГЕНД</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "ТАКТИЧЕСКИЕ ШОРТЫ СТУПИЦА",
                price: "₽ 4,500",
                originalPrice: "₽ 6,000",
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                badge: "ХИТ",
                rating: 5,
                description: "Водоотталкивающие шорты для экстремальных условий"
              },
              {
                name: "КОМПАС ПРОФЕССИОНАЛЬНЫЙ",
                price: "₽ 8,900",
                originalPrice: "₽ 12,000",
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                badge: "НОВИНКА",
                rating: 5,
                description: "Точная навигация в любых условиях тропиков"
              },
              {
                name: "РЮКЗАК ЭКСПЕДИЦИОННЫЙ 60L",
                price: "₽ 15,900",
                originalPrice: "₽ 20,000",
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                badge: "СКИДКА",
                rating: 4,
                description: "Надёжный спутник для длительных походов"
              },
              {
                name: "ФУТБОЛКА СТУПИЦА ЭЛИТ",
                price: "₽ 2,900",
                originalPrice: null,
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                badge: "МЕРЧ",
                rating: 5,
                description: "Премиальный хлопок с логотипом компании"
              },
              {
                name: "ОЧКИ ТРОПИЧЕСКИЕ UV400",
                price: "₽ 6,500",
                originalPrice: "₽ 8,500",
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                badge: "ЗАЩИТА",
                rating: 5,
                description: "Максимальная защита от солнца и ветра"
              },
              {
                name: "НОЖ ВЫЖИВАНИЯ TITANIUM",
                price: "₽ 12,500",
                originalPrice: null,
                image: "/img/21153970-c162-4896-a75c-c746d4dc73cd.jpg",
                badge: "PREMIUM",
                rating: 5,
                description: "Титановый клинок для экстремальных ситуаций"
              }
            ].map((product, index) => (
              <Card key={index} className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-amber-500 text-black font-bold">
                    {product.badge}
                  </Badge>
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`${i < product.rating ? 'text-amber-400 fill-current' : 'text-gray-400'}`} 
                        size={16} 
                      />
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-black text-white">{product.name}</h3>
                  <p className="text-gray-300 text-sm">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-black text-amber-400">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      В КОРЗИНУ
                    </Button>
                    <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-amber-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-6">
              ПОЧЕМУ ВЫБИРАЮТ
              <span className="text-amber-400 block">НАШ МАГАЗИН?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "Truck",
                title: "БЫСТРАЯ ДОСТАВКА",
                description: "Доставка по всей России за 2-5 дней"
              },
              {
                icon: "Shield",
                title: "ГАРАНТИЯ КАЧЕСТВА",
                description: "30 дней на возврат, пожизненная поддержка"
              },
              {
                icon: "Award",
                title: "ПРОВЕРЕНО ГИДАМИ",
                description: "Каждый товар протестирован в экстремальных условиях"
              },
              {
                icon: "Users",
                title: "КЛУБ ПОКУПАТЕЛЕЙ",
                description: "Эксклюзивные скидки и ранний доступ к новинкам"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <Icon name={benefit.icon} className="text-amber-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-black text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 via-purple-900 to-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ГОТОВ К
            <span className="text-amber-400 block">ПОКУПКАМ?</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Подпишись на рассылку и получи скидку 15% на первую покупку. 
            Эксклюзивные предложения только для подписчиков.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Введи свой email"
              className="flex-1 px-4 py-3 rounded-lg bg-black/20 text-white placeholder-gray-400 border border-purple-600"
            />
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6">
              ПОЛУЧИТЬ СКИДКУ
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
              <h4 className="font-bold text-amber-400 mb-4">МАГАЗИН</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Одежда</li>
                <li>Снаряжение</li>
                <li>Аксессуары</li>
                <li>Мерч</li>
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

export default Shop;