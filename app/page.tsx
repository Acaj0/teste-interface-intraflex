"use client"
import Image from "next/image"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
} from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Add this type for notifications
type Notification = {
  id: number
  title: string
  description: string
  date: string
}

export default function LoginPage() {
  useEffect(() => {
    console.log("Component rendered")
  }, [])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  // Add state for notifications
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
  ])

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true)
      } else {
        setIsSidebarOpen(false)
      }
    }
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

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
  ]

  return (
    <div className="min-h-screen">
      {/* Top Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logomarca-GqGQTqpeOjQQkB5B8KIVcRrsfcz6vm.png"
            alt="redeFlex Logo"
            width={80}
            height={24}
            className="h-auto w-52"
          />
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button className="md:flex hidden bg-[#990000] w-44 hover:bg-[#cc0000]">Login</Button>
        </div>
      </header>

      {/* Left Sidebar */}
      <aside
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-16 border-r bg-white transition-all duration-300 ease-in-out group ${
          isMobile && !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
        } ${!isMobile ? "lg:hover:w-52" : ""}`}
      >
        <nav className="flex h-full flex-col items-center lg:group-hover:items-start gap-4 py-4">
          <Button
            variant="ghost"
            className="w-full justify-center lg:group-hover:justify-start  text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <Home className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Início
            </span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-center lg:group-hover:justify-start  text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <FileText className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Documentos
            </span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-center lg:group-hover:justify-start  text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <Mail className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Mensagens
            </span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-center lg:group-hover:justify-start  text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <BarChart className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Relatórios
            </span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-center lg:group-hover:justify-start  text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <Laptop className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              T.I
            </span>
          </Button>
          <Button
            variant="ghost"
            className="mt-auto w-full justify-center lg:group-hover:justify-start  text-gray-600 hover:text-[#990000] transition-all duration-300"
          >
            <Settings className="h-5 w-5 lg:mr-2" />
            <span className="hidden overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 delay-150 lg:group-hover:inline lg:group-hover:opacity-100">
              Configurações
            </span>
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`mt-16 bg-[#f8f9fa] min-h-screen p-6 transition-all duration-300 ${isMobile ? "" : "ml-16"}`}>
        <div className="mx-auto max-w-7xl space-y-6">
          {/* Top Grid: Featured News + Calendar */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Featured News */}
            <div className="lg:col-span-8">
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
                      <h2 className="mb-2 text-2xl font-bold text-white">Inauguração do novo centro de inovação</h2>
                      <p className="text-gray-200">Um novo espaço dedicado à inovação e desenvolvimento tecnológico</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Calendar */}
            <div className="lg:col-span-4">
              <Card className="h-full">
                <div className="bg-gradient-to-r from-[#612d2d] to-[#960505] p-4 rounded-t-md text-white text-center">
                  <h2 className="text-xl font-bold">Calendário Corporativo</h2>
                  <p className="text-sm opacity-90">Eventos e datas importantes</p>
                </div>
                <div className="flex justify-center p-4">
                  <Calendar
                    mode="single"
                    className="rounded-md"
                    classNames={{
                      day_selected: "bg-[#990000] text-white hover:bg-[#cc0000]",
                      day_today: "bg-[#990000]/10 text-[#990000]",
                    }}
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* News Cards */}
            <div className="lg:col-span-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {news.map((item) => (
                  <Card key={item.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="bg-[#990000]/10 hover:bg-[#990000]/70 hover:text-white text-[#990000]"
                        >
                          {item.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="line-clamp-2 text-lg font-semibold text-gray-800">{item.title}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Access Icons */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-xl font-bold text-gray-800">Acessos Rápidos</h2>
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
                        className="flex flex-col items-center justify-center p-3"
                        style={{ height: "126px", width: "100%" }}
                      >
                        <Icon style={{ width: "48px", height: "48px" }} className="text-[#990000]" />
                        <span className="mt-2 text-base font-medium">{label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Floating Notifications Icon */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[#990000] p-0 text-white shadow-lg hover:bg-[#cc0000] focus:ring-2 focus:ring-[#990000] focus:ring-offset-2"
              >
                <Bell className="h-8 w-8" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white outline outline-1 text-xs font-bold text-[#990000]">
                  {notifications.length}
                </span>
                <span className="absolute animate-ping -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#990000]">
                </span>
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
                    <p className="text-sm text-gray-600">{notification.description}</p>
                    <span className="text-xs text-gray-400">{notification.date}</span>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </main>
    </div>
  )
}

