import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Terms = () => {
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
              <a href="/" className="text-white hover:text-amber-400 transition-colors font-medium">Главная</a>
              <a href="/about" className="text-white hover:text-amber-400 transition-colors font-medium">О нас</a>
              <a href="/shop" className="text-white hover:text-amber-400 transition-colors font-medium">Магазин</a>
              <a href="/terms" className="text-amber-400 font-bold">Условия</a>
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
            📋 ОФИЦИАЛЬНЫЙ ДОКУМЕНТ
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            УСЛОВИЯ
            <span className="text-amber-400 block">ПРЕДОСТАВЛЕНИЯ УСЛУГ</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Чёткие и понятные правила для комфортного сотрудничества. 
            Мы ценим прозрачность во всех наших отношениях.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* General Terms */}
            <Card className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 mb-8">
              <CardHeader>
                <h2 className="text-3xl font-black text-white flex items-center">
                  <Icon name="FileText" className="text-amber-400 mr-4" size={32} />
                  1. ОБЩИЕ ПОЛОЖЕНИЯ
                </h2>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-white">1.1.</strong> ООО "Ступица" (далее — Исполнитель) предоставляет услуги 
                  организации туристических поездок и экскурсионного обслуживания в тропических регионах.
                </p>
                <p>
                  <strong className="text-white">1.2.</strong> Настоящие условия регулируют отношения между Исполнителем 
                  и Заказчиком при оказании туристических услуг.
                </p>
                <p>
                  <strong className="text-white">1.3.</strong> Заказ услуг означает полное согласие Заказчика 
                  с настоящими условиями предоставления услуг.
                </p>
              </CardContent>
            </Card>

            {/* Booking Terms */}
            <Card className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 mb-8">
              <CardHeader>
                <h2 className="text-3xl font-black text-white flex items-center">
                  <Icon name="Calendar" className="text-amber-400 mr-4" size={32} />
                  2. УСЛОВИЯ БРОНИРОВАНИЯ
                </h2>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-white">2.1.</strong> Для бронирования тура требуется внесение предоплаты 
                  в размере 50% от стоимости услуг.
                </p>
                <p>
                  <strong className="text-white">2.2.</strong> Окончательный расчёт производится не позднее 
                  чем за 14 дней до начала тура.
                </p>
                <p>
                  <strong className="text-white">2.3.</strong> При отмене тура Заказчиком:
                </p>
                <ul className="ml-4 space-y-2">
                  <li>• За 30+ дней до начала — возврат 90% предоплаты</li>
                  <li>• За 14-29 дней — возврат 50% предоплаты</li>
                  <li>• За 7-13 дней — возврат 25% предоплаты</li>
                  <li>• Менее 7 дней — предоплата не возвращается</li>
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 mb-8">
              <CardHeader>
                <h2 className="text-3xl font-black text-white flex items-center">
                  <Icon name="Shield" className="text-amber-400 mr-4" size={32} />
                  3. ОТВЕТСТВЕННОСТЬ СТОРОН
                </h2>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-white">3.1.</strong> Исполнитель обязуется:
                </p>
                <ul className="ml-4 space-y-2">
                  <li>• Предоставить услуги в соответствии с программой тура</li>
                  <li>• Обеспечить безопасность и комфорт клиентов</li>
                  <li>• Предоставить опытных местных гидов</li>
                  <li>• Застраховать всех участников тура</li>
                </ul>
                
                <p className="pt-4">
                  <strong className="text-white">3.2.</strong> Заказчик обязуется:
                </p>
                <ul className="ml-4 space-y-2">
                  <li>• Своевременно производить оплату услуг</li>
                  <li>• Соблюдать правила безопасности и инструкции гидов</li>
                  <li>• Иметь действующие документы для поездки</li>
                  <li>• Уведомлять о состоянии здоровья и ограничениях</li>
                </ul>
              </CardContent>
            </Card>

            {/* Safety Requirements */}
            <Card className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 mb-8">
              <CardHeader>
                <h2 className="text-3xl font-black text-white flex items-center">
                  <Icon name="AlertTriangle" className="text-amber-400 mr-4" size={32} />
                  4. ТРЕБОВАНИЯ БЕЗОПАСНОСТИ
                </h2>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-white">4.1.</strong> Все участники туров должны быть физически 
                  подготовлены к экстремальным условиям тропических регионов.
                </p>
                <p>
                  <strong className="text-white">4.2.</strong> Обязательно наличие медицинской страховки 
                  с покрытием экстремальных видов деятельности.
                </p>
                <p>
                  <strong className="text-white">4.3.</strong> Участники обязаны строго следовать инструкциям 
                  гидов и соблюдать правила безопасности.
                </p>
                <div className="bg-amber-900/20 border border-amber-500 rounded-lg p-4 mt-4">
                  <p className="text-amber-300 font-bold">
                    ⚠️ ВАЖНО: Нарушение правил безопасности может привести к исключению из тура без возврата средств.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Force Majeure */}
            <Card className="bg-gradient-to-b from-purple-800 to-purple-900 border-purple-600 mb-8">
              <CardHeader>
                <h2 className="text-3xl font-black text-white flex items-center">
                  <Icon name="Cloud" className="text-amber-400 mr-4" size={32} />
                  5. ФОРС-МАЖОРНЫЕ ОБСТОЯТЕЛЬСТВА
                </h2>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-white">5.1.</strong> К форс-мажорным обстоятельствам относятся:
                </p>
                <ul className="ml-4 space-y-2">
                  <li>• Стихийные бедствия и неблагоприятные погодные условия</li>
                  <li>• Политическая нестабильность в регионе</li>
                  <li>• Закрытие границ или ограничения на въезд</li>
                  <li>• Эпидемиологические ограничения</li>
                </ul>
                <p>
                  <strong className="text-white">5.2.</strong> При форс-мажоре Исполнитель предлагает 
                  перенос тура или возврат средств за вычетом фактически понесённых расходов.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gradient-to-r from-amber-900 via-purple-900 to-amber-900 border-amber-600">
              <CardHeader>
                <h2 className="text-3xl font-black text-white flex items-center">
                  <Icon name="Phone" className="text-amber-400 mr-4" size={32} />
                  КОНТАКТНАЯ ИНФОРМАЦИЯ
                </h2>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-4">ЮРИДИЧЕСКИЕ ДАННЫЕ</h3>
                    <p><strong className="text-white">Название:</strong> ООО "Ступица"</p>
                    <p><strong className="text-white">ИНН:</strong> 7701234567</p>
                    <p><strong className="text-white">ОГРН:</strong> 1234567890123</p>
                    <p><strong className="text-white">Адрес:</strong> г. Москва, ул. Тропическая, д. 1</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-4">СВЯЗАТЬСЯ С НАМИ</h3>
                    <p className="flex items-center mb-2">
                      <Icon name="Phone" size={16} className="mr-2 text-amber-400" />
                      +7 (999) 123-45-67
                    </p>
                    <p className="flex items-center mb-2">
                      <Icon name="Mail" size={16} className="mr-2 text-amber-400" />
                      legal@stupitsa.ru
                    </p>
                    <p className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-amber-400" />
                      Пн-Пт: 9:00-18:00 МСК
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-amber-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ЕСТЬ ВОПРОСЫ?
            <span className="text-amber-400 block">МЫ ОТВЕТИМ!</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Наша команда юристов и менеджеров готова разъяснить любые моменты. 
            Прозрачность — основа доверия.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-4 h-auto">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              ЗАДАТЬ ВОПРОС
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold text-xl px-8 py-4 h-auto">
              <Icon name="Download" className="mr-2" size={24} />
              СКАЧАТЬ PDF
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

export default Terms;