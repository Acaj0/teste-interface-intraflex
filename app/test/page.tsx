"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  BookOpen,
  MessageSquare,
  Bell,
  Home,
  Settings,
  FileText,
  Mail,
  BarChart,
  Laptop,
  Menu,
  User,
  ChartNoAxesColumn,
  Calendar,
  Database,

} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Notification = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export default function LoginPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Nova mensagem",
      description: "Você recebeu uma nova mensagem de João Silva",
      date: "Há 5 minutos",
    },
    {
      id: 2,
      title: "Lembrete de reunião",
      description: "Reunião de equipe às 14h",
      date: "Há 1 hora",
    },
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const news = [
    {
      id: 1,
      title: "Novo projeto em desenvolvimento",
      date: "Hoje",
      category: "Projetos",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Treinamento de liderança disponível",
      date: "Ontem",
      category: "UniFlex",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Resultados do trimestre",
      date: "2 dias atrás",
      category: "Comunicados",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 4,
        title: "Comunicado de instabilidade",
        date: "4 dias atrás",
        category: "Instabilidade",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        id: 5,
        title: "TI-Informa",
        date: "4 dias atrás",
        category: "Comunicados",
        image: "/placeholder.svg?height=200&width=400",
      },{
        id: 6,
        title: "📢 RH INFORMA - Gerência DDD 31",
        date: "5 dias atrás",
        category: "RH",
        image: "/placeholder.svg?height=200&width=400",
      },
  ];

  return (
    <div className="min-h-screen">
      {/* navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-4">
          <Image
            src="logomarca.png"
            alt="redeFlex Logo"
            width={80}
            height={24}
            className="h-auto w-52"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button className="md:flex hidden bg-[#990000] w-44 hover:bg-[#cc0000]">
            Login
          </Button>
          <div className="hidden md:flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>
              {currentTime.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </header>

      {/* barra da esquerda */}
      <aside
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-16 border-r bg-white transition-all duration-300 ease-in-out group ${
          isMobile && !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
        } ${!isMobile ? "lg:hover:w-52" : ""}`}
      >
        <nav className="flex h-full flex-col items-center lg:group-hover:items-start gap-4 py-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <Home className="h-5 w-5 lg:mr-2" />
            <a href="/">
              <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
                Início
              </span>
            </a>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <FileText className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Documentos
            </span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <Mail className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Mensagens
            </span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <BarChart className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Relatórios
            </span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <Laptop className="h-5 w-5 lg:mr-2" />
            <a href="/dashboard">
              <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
                T.I
              </span>
            </a>
          </Button>
          <Button
            variant="ghost"
            className="mt-auto w-full justify-start text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <Settings className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Configurações
            </span>
          </Button>
        </nav>
      </aside>

      <main
        className={`mt-16 bg-[#f8f9fa] min-h-screen p-6 transition-all duration-300 ${
          isMobile ? "" : "ml-16"
        }`}
      >
        <div className="mx-auto space-y-6">
          {/* geral */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* destaque */}
            <div className="col-span-12 lg:col-span-6">
              <Card className="group h-full overflow-hidden">
                <div className="relative h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Featured News"
                    width={800}
                    height={400}
                    className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge className="mb-4 bg-[#990000]">Destaque</Badge>
                      <h2 className="mb-2 text-2xl font-bold text-white">
                        Inauguração do novo centro de inovação
                      </h2>
                      <p className="text-gray-200">
                        Um novo espaço dedicado à inovação e desenvolvimento
                        tecnológico
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className=" col-span-12 lg:col-span-6">
              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-xl font-bold text-gray-800">
                    Acessos Rápidos
                  </h2>
                  <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                    {[
                      { icon: Clock, label: "Ponto" },
                      { icon: BookOpen, label: "UniFlex" },
                      { icon: MessageSquare, label: "Comunicações" },
                      { icon: Bell, label: "Scrum" },
                      { icon: User, label: "Portal do Cliente"},
                      { icon: ChartNoAxesColumn, label: "Reports"},
                      { icon: Calendar, label:"Calendario Corporativo" },
                      { icon: Database, label:"SGV"}
                    ].map(({ icon: Icon, label }) => (
                      <Button
                        key={label}
                        variant="outline"
                        className="flex flex-col items-center justify-center p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{ height: "170px", width: "100%" }}
                      >
                        <Icon
                          style={{ width: "48px", height: "48px" }}
                          className="text-[#990000]"
                        />
                        <span className="mt-2 text-base font-medium">
                          {label}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Noticias */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Cards */}
            <div className=" col-span-12 lg:col-span-12">
              <div className="h-8 flex flex-row items-center justify-between">
                <h1 className="text-xl font-semibold">Noticias</h1>
                <a href="/" className="hover:underline text-gray-500">
                  Ver Mais...
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
                {news.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden transition-all hover:shadow-lg"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="bg-[#990000]/10 hover:bg-[#990000]/70 hover:text-white text-[#990000]"
                        >
                          {item.category}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="line-clamp-2 text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Acessos rapidos */}
          </div>
        </div>
      </main>
    </div>
  );
}
