import { Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/Home"
import { ExperimentsPage } from "@/pages/Experiments"
import { NotesPage } from "@/pages/Notes"
import { AppLayout } from "@/components/layout/AppLayout"

export function AppRoutes() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiments" element={<ExperimentsPage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </AppLayout>
  )
}
