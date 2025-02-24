"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { BarChart, Clock, FileText, Home, Laptop, Mail, Menu, Paperclip, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function TicketForm() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-4">
          <Image src="/logomarca.png" alt="redeFlex Logo" width={80} height={24} className="h-auto w-52" />
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <a href="/dashboard">
            <Button className="md:flex hidden bg-gradient-to-r from-[#612d2d] w-44 hover:bg-[#cc0000]">Login</Button>
          </a>
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

      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="pt-16 pl-16 min-h-screen">
        <div className="p-6">
          <Card className="w-full max-w-10xl mx-auto">
            <CardHeader>
              <CardTitle>Novo Chamado</CardTitle>
              <CardDescription>Crie um novo chamado para o suporte técnico</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Solicitante */}
                  <div className="space-y-2">
                    <Label htmlFor="requester">
                      Solicitante <span className="text-red-500">*</span>
                    </Label>
                    <Input id="requester" placeholder="Nome do solicitante" required />
                  </div>

                  {/* Seguidores */}
                  <div className="space-y-2">
                    <Label htmlFor="followers">Seguidores</Label>
                    <div className="flex gap-2">
                      <Input id="followers" placeholder="Adicionar seguidores" />
                      <Button variant="outline" size="icon">
                        <Users className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">Quem irá acompanhar o chamado</p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Para Filial */}
                  <div className="space-y-2">
                    <Label htmlFor="branch">
                      Para Filial <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma filial" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matriz">Matriz</SelectItem>
                        <SelectItem value="filial1">Filial 1</SelectItem>
                        <SelectItem value="filial2">Filial 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Departamento */}
                  <div className="space-y-2">
                    <Label htmlFor="department">
                      Departamento de Atendimento <span className="text-red-500">*</span>
                    </Label>
                    <Select required onValueChange={setSelectedDepartment}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ti">TI</SelectItem>
                        <SelectItem value="rh">RH</SelectItem>
                        <SelectItem value="financeiro">Financeiro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Sistema - Only shows when TI is selected */}
                {selectedDepartment === "ti" && (
                  <div className="space-y-2">
                    <Label htmlFor="system">
                      Sistema <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o sistema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="erp">ERP</SelectItem>
                        <SelectItem value="crm">CRM</SelectItem>
                        <SelectItem value="bi">BI</SelectItem>
                        <SelectItem value="rh">Sistema RH</SelectItem>
                        <SelectItem value="financeiro">Sistema Financeiro</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Assunto */}
                <div className="space-y-2">
                  <Label htmlFor="subject">
                    Assunto <span className="text-red-500">*</span>
                  </Label>
                  <Input id="subject" placeholder="Título do chamado" required />
                </div>

                {/* Descrição */}
                <div className="space-y-2">
                  <Label htmlFor="description">
                    Descrição <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o problema detalhadamente"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                {/* Passos Anteriores */}
                <div className="space-y-2">
                  <Label htmlFor="previousSteps">
                    Passos Realizados Antes do Problema <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="previousSteps"
                    placeholder="Descreva os passos que foram realizados antes do problema ocorrer"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                {/* Chamados Relacionados */}
                <div className="space-y-2">
                  <Label htmlFor="relatedTickets">Chamados Relacionados</Label>
                  <Input id="relatedTickets" placeholder="Ex: #123, #456 (Separe os números por vírgula)" />
                  <p className="text-sm text-muted-foreground">
                    Se houver outros chamados relacionados a este problema, informe os números
                  </p>
                </div>

                {/* Problema Recorrente */}
                <div className="space-y-3">
                  <Label>
                    O Problema é Recorrente? <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup defaultValue="nao" className="flex flex-row space-x-4" required>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="sim" />
                      <Label htmlFor="sim">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="nao" />
                      <Label htmlFor="nao">Não</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Evidências */}
                <div className="space-y-3">
                  <Label>
                    Evidências <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex items-center gap-4">
                    <Button type="button" variant="outline">
                      <Paperclip className="mr-2 h-4 w-4" />
                      Anexar Arquivos
                    </Button>
                    <p className="text-sm text-muted-foreground">Anexe capturas de tela ou arquivos relevantes</p>
                  </div>
                </div>

                {/* Público */}
                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <Label>Público</Label>
                    <p className="text-sm text-muted-foreground">Qualquer usuário com o link poderá visualizar</p>
                  </div>
                  <Switch />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <Button type="submit">Enviar</Button>
                  <Button type="button" variant="outline">
                    Voltar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

