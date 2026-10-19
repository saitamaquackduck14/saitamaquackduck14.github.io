import { Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/Home"
import { ExperimentsPage } from "@/pages/Experiments"
import { NotesPage } from "@/pages/Notes"
import { BassLearningsPage } from "@/pages/Experiments/Bass"
import { AncientHistoryPage } from "@/pages/Experiments/AncientHistory/AncientHistoryPage"
import { AppLayout } from "@/components/layout/AppLayout"

export function AppRoutes() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiments" element={<ExperimentsPage />} />
        <Route path="/experiments/bass" element={<BassLearningsPage />} />
        <Route path="/experiments/ancient-history" element={<AncientHistoryPage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </AppLayout>
  )
}
