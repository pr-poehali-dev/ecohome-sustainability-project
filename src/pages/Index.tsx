import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const services = [
    {
      icon: "Palette",
      title: "Дизайн интерьера",
      description: "Создаем уникальные экологичные интерьеры, гармонирующие с природой и вашим стилем жизни"
    },
    {
      icon: "Armchair",
      title: "Эко-мебель",
      description: "Мебель из натуральных материалов, произведенная с заботой об окружающей среде"
    },
    {
      icon: "Lightbulb",
      title: "Консультации по энергосбережению",
      description: "Помогаем сократить расходы на энергию и создать энергоэффективное пространство"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/6d06e6bd-7a3a-46fd-84be-f579ed29aa59/files/01cee86a-9ca4-4dbd-af66-b82ea34509c1.jpg",
      title: "Современная гостиная",
      category: "Дизайн интерьера"
    },
    {
      image: "https://cdn.poehali.dev/projects/6d06e6bd-7a3a-46fd-84be-f579ed29aa59/files/087f3422-954d-466b-8525-1d4f5e9d5549.jpg",
      title: "Экологичная спальня",
      category: "Дизайн интерьера"
    },
    {
      image: "https://cdn.poehali.dev/projects/6d06e6bd-7a3a-46fd-84be-f579ed29aa59/files/11eb453f-489e-4a76-9a0a-3c074e8f9137.jpg",
      title: "Устойчивая кухня",
      category: "Энергосбережение"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-primary">EcoHome Studio</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Связаться</Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Создаем экологичные пространства для жизни
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Гармония с природой в каждом решении. Дизайн, мебель и консультации для устойчивого будущего.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Leaf" size={20} />
                  Наши проекты
                </Button>
                <Button size="lg" variant="outline">Консультация</Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/30 rounded-full blur-3xl opacity-50"></div>
              <img 
                src="https://cdn.poehali.dev/projects/6d06e6bd-7a3a-46fd-84be-f579ed29aa59/files/01cee86a-9ca4-4dbd-af66-b82ea34509c1.jpg"
                alt="Eco Interior"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексный подход к созданию экологичного дома</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Реализованные проекты экологичных интерьеров</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer animate-scale-in">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-primary-foreground">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                EcoHome Studio — это команда профессионалов, объединенных общей миссией создания экологичных и устойчивых пространств для жизни.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы верим, что дизайн должен быть не только красивым, но и ответственным. Каждый наш проект — это шаг к более устойчивому будущему.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Icon name="Sprout" size={64} className="text-primary" />
              <Icon name="Home" size={64} className="text-secondary" />
              <Icon name="TreePine" size={64} className="text-secondary" />
              <Icon name="Lightbulb" size={64} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Профессионалы, создающие экологичное будущее</p>
          </div>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/6d06e6bd-7a3a-46fd-84be-f579ed29aa59/files/92145c5c-6533-4af1-b145-cc89b9153092.jpg"
                  alt="Анна Волкова"
                  className="relative rounded-2xl w-full h-96 object-cover shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-2">
                  Главный дизайнер
                </div>
                <h3 className="text-3xl font-bold">Анна Волкова</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  15 лет опыта в создании экологичных интерьеров. Эксперт по устойчивому дизайну, лауреат международных премий в области архитектуры и дизайна.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Award" size={20} className="text-primary" />
                    <span>150+ проектов</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Star" size={20} className="text-primary" />
                    <span>Сертификат LEED</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
              <div className="space-y-4 md:order-1">
                <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-2">
                  Специалист по энергосбережению
                </div>
                <h3 className="text-3xl font-bold">Дмитрий Соколов</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Инженер-эколог с опытом внедрения энергоэффективных решений в более чем 200 проектах. Специализируется на умных системах автоматизации зданий.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Zap" size={20} className="text-secondary" />
                    <span>200+ проектов</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="TrendingDown" size={20} className="text-secondary" />
                    <span>-40% энергии</span>
                  </div>
                </div>
              </div>
              <div className="relative group md:order-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/6d06e6bd-7a3a-46fd-84be-f579ed29aa59/files/fe0cb327-9764-4512-bc59-fe157c8ef3f8.jpg"
                  alt="Дмитрий Соколов"
                  className="relative rounded-2xl w-full h-96 object-cover shadow-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/6d06e6bd-7a3a-46fd-84be-f579ed29aa59/files/8976a9da-a68d-4ad3-9adc-9bff03cf7e00.jpg"
                  alt="Мария Петрова"
                  className="relative rounded-2xl w-full h-96 object-cover shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/50 rounded-full text-accent-foreground font-semibold text-sm mb-2">
                  Менеджер проектов
                </div>
                <h3 className="text-3xl font-bold">Мария Петрова</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Координирует все этапы работы, обеспечивая безупречное качество и сроки реализации. MBA в области устойчивого развития, 10+ лет управления крупными проектами.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>98% в срок</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Users" size={20} className="text-primary" />
                    <span>Команда 15 человек</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Как нас найти</h2>
            <p className="text-xl text-muted-foreground">Москва, ул. Остоженка, д. 25</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">119034, Москва, ул. Остоженка, д. 25</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 11:00 - 17:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Контакты</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                      <p className="text-muted-foreground">info@ecohome.studio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="animate-scale-in rounded-xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.586944%2C55.743611&z=17&l=map&pt=37.586944,55.743611,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Готовы начать проект? Напишите нам!</p>
          </div>
          <Card className="animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Icon name="Send" size={20} />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={24} />
                <span className="text-xl font-bold">EcoHome Studio</span>
              </div>
              <p className="text-sm opacity-90">
                Экологичные решения для вашего дома
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Дизайн интерьера</li>
                <li>Эко-мебель</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ecohome.studio
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Twitter" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            © 2024 EcoHome Studio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;