import Charts from "./components/charts/Charts"
import JobsList from "./components/jobs-list/JobsList"
import ServiceList from "./components/service-orgs-list/ServiceOrgsList"
import SummaryToday from "./components/summary-today/SummaryToday"

function App() {
  return (
    <div className="flex justify-between items-start flex-wrap">
      <SummaryToday />
      <ServiceList />
      <JobsList />
      <Charts />
    </div>
  )
}

export default App
