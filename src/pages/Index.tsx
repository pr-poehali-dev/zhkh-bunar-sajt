import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('news');

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Вход выполнен",
      description: "Добро пожаловать в личный кабинет",
    });
  };

  const news = [
    {
      id: 1,
      date: '15 ноября 2024',
      title: 'Плановое отключение горячей воды',
      description: 'С 20 по 25 ноября будет проведено плановое отключение горячей воды в связи с ремонтными работами на магистральном трубопроводе.',
      type: 'work'
    },
    {
      id: 2,
      date: '10 ноября 2024',
      title: 'Изменение тарифов с 1 декабря',
      description: 'С 1 декабря 2024 года вступают в силу новые тарифы на коммунальные услуги. Повышение составит 4.5% согласно постановлению правительства.',
      type: 'tariff'
    },
    {
      id: 3,
      date: '5 ноября 2024',
      title: 'Ремонт подъездов в домах 5-10',
      description: 'В течение ноября будет проведен капитальный ремонт подъездов в домах №5-10 по улице Ленина. Просим отнестись с пониманием к временным неудобствам.',
      type: 'work'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-primary-foreground" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">ООО «Бунарский район 1»</h1>
                <p className="text-sm text-muted-foreground">г. Новоуральск</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button 
                variant={activeTab === 'news' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('news')}
                className="gap-2"
              >
                <Icon name="Newspaper" size={18} />
                Новости
              </Button>
              <Button 
                variant={activeTab === 'request' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('request')}
                className="gap-2"
              >
                <Icon name="FileText" size={18} />
                Подать заявку
              </Button>
              <Button 
                variant={activeTab === 'login' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('login')}
                className="gap-2"
              >
                <Icon name="LogIn" size={18} />
                Личный кабинет
              </Button>
              <Button 
                variant={activeTab === 'contacts' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('contacts')}
                className="gap-2"
              >
                <Icon name="Phone" size={18} />
                Контакты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full md:hidden grid-cols-4 mb-8">
            <TabsTrigger value="news">Новости</TabsTrigger>
            <TabsTrigger value="request">Заявка</TabsTrigger>
            <TabsTrigger value="login">Кабинет</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Newspaper" size={32} className="text-primary" />
              <h2 className="text-3xl font-bold">Новости и объявления</h2>
            </div>
            
            <div className="grid gap-6">
              {news.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <Badge variant={item.type === 'work' ? 'default' : 'secondary'}>
                            {item.type === 'work' ? 'Работы' : 'Тарифы'}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                      <Icon 
                        name={item.type === 'work' ? 'Wrench' : 'DollarSign'} 
                        size={24} 
                        className="text-primary"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="request" className="animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="FileText" size={32} className="text-primary" />
                <h2 className="text-3xl font-bold">Подача заявки</h2>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Заявка на выполнение работ</CardTitle>
                  <CardDescription>
                    Заполните форму, и наш специалист свяжется с вами в течение рабочего дня
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRequestSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">ФИО</Label>
                      <Input 
                        id="name" 
                        placeholder="Иванов Иван Иванович" 
                        required 
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Адрес</Label>
                      <Input 
                        id="address" 
                        placeholder="ул. Ленина, д. 10, кв. 25" 
                        required 
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (900) 123-45-67" 
                        required 
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Описание проблемы</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Опишите проблему или необходимые работы..."
                        rows={5}
                        required
                        className="text-base"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Icon name="Send" size={18} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="login" className="animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="LogIn" size={32} className="text-primary" />
                <h2 className="text-3xl font-bold">Личный кабинет</h2>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Вход в систему</CardTitle>
                  <CardDescription>
                    Войдите для оплаты услуг и просмотра заявок
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLoginSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="login">Лицевой счет</Label>
                      <Input 
                        id="login" 
                        placeholder="123456789" 
                        required 
                        className="text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        required 
                        className="text-base"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Icon name="LogIn" size={18} />
                      Войти
                    </Button>
                  </form>

                  <div className="mt-6 space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Возможности личного кабинета
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="CreditCard" size={18} className="text-primary" />
                        <span>Оплата коммунальных услуг онлайн</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="FileCheck" size={18} className="text-primary" />
                        <span>Просмотр истории заявок</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="BarChart3" size={18} className="text-primary" />
                        <span>Показания счетчиков</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Phone" size={32} className="text-primary" />
                <h2 className="text-3xl font-bold">Контактная информация</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MapPin" size={24} className="text-primary" />
                      Адрес офиса
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-base">624130, Свердловская область</p>
                    <p className="text-base">г. Новоуральск, ул. Ленина, д. 12</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Режим работы:</strong><br />
                      Пн-Пт: 8:00 - 17:00<br />
                      Обед: 12:00 - 13:00<br />
                      Сб-Вс: выходной
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Phone" size={24} className="text-primary" />
                      Телефоны
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Приёмная</p>
                      <a href="tel:+73437023809" className="text-lg font-medium hover:text-primary transition-colors">
                        +7 (34370) 2-38-09
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Диспетчерская (круглосуточно)</p>
                      <a href="tel:+73437023810" className="text-lg font-medium hover:text-primary transition-colors">
                        +7 (34370) 2-38-10
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Аварийная служба</p>
                      <a href="tel:+73437023811" className="text-lg font-medium hover:text-primary transition-colors">
                        +7 (34370) 2-38-11
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Важная информация</p>
                      <a href="tel:+73437023812" className="text-lg font-medium hover:text-primary transition-colors">
                        +7 (34370) 2-38-12
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Mail" size={24} className="text-primary" />
                      Электронная почта
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Общие вопросы</p>
                      <a href="mailto:info@bunar1.ru" className="text-base font-medium hover:text-primary transition-colors">
                        info@bunar1.ru
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Бухгалтерия</p>
                      <a href="mailto:buh@bunar1.ru" className="text-base font-medium hover:text-primary transition-colors">
                        buh@bunar1.ru
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="AlertCircle" size={24} className="text-primary" />
                      Важная информация
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      При обнаружении аварийных ситуаций (прорыв труб, отключение электричества, газа) 
                      немедленно звоните в аварийную службу по телефону <strong>+7 (34370) 2-38-11</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t mt-16 py-8 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ООО «Бунарский район 1». Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;