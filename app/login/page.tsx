"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  BookOpen,
  MessageSquare,
  Home,
  Settings,
  FileText,
  Mail,
  BarChart,
  Laptop,
  Menu,
  User,
  BarChartIcon as ChartNoAxesColumn,
  Database,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
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
          <a href="/dashboard"><Button className="md:flex hidden bg-gradient-to-r from-[#612d2d] w-44 hover:bg-[#cc0000]">
            Login
          </Button></a>
          <div className="hidden md:flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 ml-2" />
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
              Chamados
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
        className={`pt-16 min-h-screen transition-all duration-300 ${
          isMobile ? "" : "lg:ml-16"
        }`}
      >
        <div className="container mx-auto px-4 py-8 lg:py-12 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <div className="flex flex-col justify-center">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
                  Bem-vindo ao Intraflex
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
                  Acesse nossa plataforma corporativa e conecte-se com todas as
                  ferramentas e recursos necessários para seu trabalho.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/dashboard"><Button className="bg-gradient-to-r from-[#612d2d] to-[#960505]] hover:bg-[#cc0000] w-full sm:w-44 h-12 text-lg">
                    Fazer Login
                  </Button></a>
                  <Button
                    variant="outline"
                    className="w-full sm:w-44 h-12 text-lg"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </div>

            <Card className="group overflow-hidden">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Featured News"
                  width={800}
                  height={400}
                  className="h-[300px] sm:h-[300px] lg:h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="mb-2 sm:mb-4 bg-[#990000]">
                      Destaque
                    </Badge>
                    <h2 className="mb-2 text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      Inauguração do novo centro de inovação
                    </h2>
                    <p className="text-sm sm:text-base lg:text-xl text-gray-200">
                      Um novo espaço dedicado à inovação e desenvolvimento
                      tecnológico
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Acessos Rápidos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {[
                { icon: Clock, label: "Ponto" },
                { icon: BookOpen, label: "UniFlex" },
                { icon: MessageSquare, label: "Comunicações" },
                { icon: User, label: "Portal do Cliente" },
                { icon: ChartNoAxesColumn, label: "Reports" },
                { icon: Database, label: "SGV" },
              ].map(({ icon: Icon, label }) => (
                <Button
                  key={label}
                  variant="outline"
                  className="flex flex-col items-center justify-center p-3 h-28 sm:h-36 lg:h-40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-[#990000]"
                    style={{ height: "50px", width: "100%" }}
                  />
                  <span className="mt-3 text-xs sm:text-sm lg:text-base font-semibold text-black/90 text-center">
                    {label}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
