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
  ChevronDown,
  Icon,
  Menu,
  Eye,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Radial } from "@/components/radial";
import { Abertofechado } from "@/components/aberto-fechado";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

type Notification = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export default function dashboard() {
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
  ];

  return (
    <div className="min-h-screen overflow-y-hidden">
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
          <Button className="md:flex hidden bg-green-600 w-44 hover:bg-[#cc0000]">
            Novo Chamado
          </Button>
          <Button className="md:flex hidden bg-blue-600 w-44 hover:bg-[#cc0000]">
            Abertura de OS
          </Button>
          <div className=" items-center justify-center gap-2 flex">
            <span className="text-xl">Antonio</span>
            <Button className=" bg-gray-300 rounded-full w-10 h-10"></Button>
          </div>
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
        className={`mt-16 bg-[#f8f9fa] lg:h-[calc(100vh-4rem)] overflow-y-scroll flex p-6 transition-all duration-300 ${
          isMobile ? "" : "ml-16"
        }`}
      >
        <div className="mx-auto space-y-6">
          {/* geral */}

          <div className="grid gap-6 lg:grid-cols-12">
            {/* destaque */}
            <div className="lg:col-span-6">
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

            {/* Data */}
            <div className="lg:col-span-3">
              <Card className="h-full">
                <div className="bg-gradient-to-r from-[#612d2d] to-[#960505] p-4 rounded-t-md text-white">
                  <h2 className="text-2xl font-bold text-center">Hoje</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-800">
                      {new Date().toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-xl text-gray-600 capitalize">
                      {new Date().toLocaleDateString("pt-BR", {
                        weekday: "long",
                      })}
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex flex-row items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Evento do Dia
                      </h3>
                      <div className="flex flex-row gap-1">
                        <Badge
                          variant="secondary"
                          className="bg-[#990000]/10 hover:bg-[#990000]/70 h-5 hover:text-white text-[#990000]"
                        >
                          Empresa
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-gray-200 hover:bg-[#990000]/70 h-5 hover:text-white text-[#990000]"
                        >
                          Pessoal
                        </Badge>
                      </div>
                    </div>
                    <div className="bg-[#990000]/10 cursor-pointer p-3 mb-2 rounded-md">
                      <p className="text-[#990000] font-medium over">
                        3º Encontro Semestral da Tecnologia
                      </p>
                      <p className="text-sm text-gray-600">
                        14:00 - Online via Teams
                      </p>
                    </div>
                    <div className="bg-gray-200 cursor-pointer p-3 rounded-md">
                      <p className="text-[#990000] font-medium over">
                        Reunião com Ulisses Ribeiro{" "}
                      </p>
                      <p className="text-sm text-gray-600">
                        16:00 - Sala Arara-azul
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="lg:col-span-3">
              <div className="flex-col flex">
                <Radial></Radial>
              </div>
              <div className="flex-row flex mt-2 gap-3 ">
                <Card className="flex cursor-pointer flex-col h-[150px] transition-all hover:shadow-lg items-center justify-center w-full p-4">
                  <div className="font-bold text-center">Abertos</div>
                  <div className="font-bold text-center">hoje</div>
                  <div className="text-4xl mt-2">9</div>
                </Card>
                <Card className="flex cursor-pointer flex-col gap-2 transition-all hover:shadow-lg items-center justify-center w-full p-4">
                  <div className="font-bold text-center">Encerrados hoje</div>
                  <div className="text-4xl">15</div>
                </Card>
                <Card className="flex cursor-pointer flex-col gap-2 transition-all hover:shadow-lg items-center justify-center w-full p-4">
                  <div className="font-bold text-center">Total em Aberto</div>
                  <div className="text-4xl">115</div>
                </Card>
              </div>
            </div>
          </div>

          {/* Noticias */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Cards */}
            <div className=" col-span-12 lg:col-span-6">
              <div className="h-8 flex flex-row items-center justify-between">
                <h1 className="text-xl font-semibold">Noticias</h1>
                <a href="/" className="hover:underline text-gray-500">
                  Ver Mais...
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className=" col-span-12 lg:col-span-3">
              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-xl font-bold text-gray-800">
                    Acessos Rápidos
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Clock, label: "Ponto" },
                      { icon: BookOpen, label: "UniFlex" },
                      { icon: MessageSquare, label: "Comunicações" },
                      { icon: Bell, label: "Scrum" },
                    ].map(({ icon: Icon, label }) => (
                      <Button
                        key={label}
                        variant="outline"
                        className="flex flex-col items-center justify-center p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        style={{ height: "125px", width: "100%" }}
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
            <div className="col-span-12 lg:col-span-3">
              <div>
                <Abertofechado></Abertofechado>
              </div>
            </div>
          </div>

          {/* notificacao */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="fixed bottom-6 right-6 h-16  w-16 z-10 rounded-full bg-[#990000] p-0 text-white shadow-lg hover:bg-[#cc0000] focus:ring-2 focus:ring-[#990000] focus:ring-offset-2"
              >
                <Bell className="h-8 w-8" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#990000]">
                  {notifications.length}
                </span>
                <span className="absolute -right-2 animate-ping z-0 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-800 text-xs font-bold text-[#990000]"></span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notificações</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border-b pb-2">
                    <h3 className="font-semibold">{notification.title}</h3>
                    <p className="text-sm text-gray-600">
                      {notification.description}
                    </p>
                    <span className="text-xs text-gray-400">
                      {notification.date}
                    </span>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex flex-col">
            <div className="text-gray-400/80 flex flex-row w-full items-center">
              <h1 className="text-2xl text-center w-60">Modulos do Setor</h1>
              <ChevronDown />
              <div className="bg-gray-400/40 w-full ml-2 h-[3px] rounded-full"></div>
            </div>
            <div className="grid gap-6 lg:grid-cols-12 mb-4 mt-4">
              <div className="col-span-4">
                <Card className="p-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12"></TableHead>
                        <TableHead>Obrigações Fiscais</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead className="w-12"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div>
                            <span>DIS</span>
                            <span className="text-sm text-muted-foreground ml-2">
                              (VERIKA OLIVEIRA CALASSA)
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>25/02/2025</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>
              <div className="col-span-8">
                <Card className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Plano de Ação</h2>
                    <Badge className="bg-blue-500 hover:bg-blue-600">
                      Todos
                    </Badge>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50%]">Descrição</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Última Atualização</TableHead>
                        <TableHead>Data Cadastro</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Otimizar HC Estrutura de vendedor com o Tombamento dos
                          clientes definidos em Redir - 4 vendedores
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-red-50 text-red-500 hover:bg-red-100"
                          >
                            20/05/2019
                          </Badge>
                        </TableCell>
                        <TableCell>Andamento</TableCell>
                        <TableCell>04/06/2019</TableCell>
                        <TableCell>28/04/2019</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Atualizar Rotinas de Apuração do CPC 06 do ano de 2023
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-red-50 text-red-500 hover:bg-red-100"
                          >
                            20/05/2019
                          </Badge>
                        </TableCell>
                        <TableCell>Andamento</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>08/08/2023</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>
              <div className="col-span-4"></div>
              <div className="col-span-8">
                <Card className="p-4">
                  <h2 className="text-lg font-semibold mb-4">
                    Processos de Compra Pendentes de Aprovação
                  </h2>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Id Processo</TableHead>
                        <TableHead>Empresa</TableHead>
                        <TableHead>Filial</TableHead>
                        <TableHead>Data Atualização</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>RC01305-02</TableCell>
                        <TableCell>00001 - REDEFLEX</TableCell>
                        <TableCell>
                          00001 - REDEFLEX - CUIABÁ-MT - DDD 65
                        </TableCell>
                        <TableCell>27/11/2023</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>RC01306-02</TableCell>
                        <TableCell>00001 - REDEFLEX</TableCell>
                        <TableCell>
                          00001 - REDEFLEX - CUIABÁ-MT - DDD 65
                        </TableCell>
                        <TableCell>27/11/2023</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>RC01302-02</TableCell>
                        <TableCell>00001 - REDEFLEX</TableCell>
                        <TableCell>
                          00001 - REDEFLEX - CUIABÁ-MT - DDD 65
                        </TableCell>
                        <TableCell>28/11/2023</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
