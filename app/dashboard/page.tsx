import Image from "next/image"
import { Bell } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Fev", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Abr", value: 800 },
  { name: "Mai", value: 500 },
  { name: "Jun", value: 700 },
]

const notifications = [
  {
    id: 1,
    title: "Reunião de Equipe",
    description: "Reunião marcada para amanhã às 14h",
    time: "1h atrás",
  },
  {
    id: 2,
    title: "Novo Projeto",
    description: "Você foi designado para um novo projeto",
    time: "2h atrás",
  },
  {
    id: 3,
    title: "Documento Pendente",
    description: "Há um documento aguardando sua aprovação",
    time: "3h atrás",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#990000] to-[#FF0000] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZcWIMXcnqfGF6FgMjCKSMzfZrwPS6j.png"
              alt="redeFlex Logo"
              width={150}
              height={45}
              className="h-auto w-auto"
            />
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Bell className="h-5 w-5" />
              <span className="ml-2">3</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full lg:col-span-2">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Desempenho do Setor</h2>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#990000" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          <Card className="lg:row-span-2">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Notificações</h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="rounded-lg border p-4 hover:bg-gray-50">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{notification.title}</h3>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{notification.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="col-span-full lg:col-span-2">
            <div className="p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Calendário</h2>
              <Calendar mode="single" className="rounded-md border" />
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

