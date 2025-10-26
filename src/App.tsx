import JobsList from "./components/jobs-list/JobsList"
import SummaryToday from "./components/summary-today/SummaryToday"

function App() {
  return (
    <div className="flex justify-between">
      <SummaryToday />
      <JobsList />
    </div>
  )
}

export default App
