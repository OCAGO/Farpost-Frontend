import Calendar from "./components/calendar/Calendar"
import Charts from "./components/charts/Charts"
import JobsList from "./components/jobs-list/JobsList"
import ServiceList from "./components/service-orgs-list/ServiceOrgsList"
import SummaryToday from "./components/summary-today/SummaryToday"

function App() {
  return (
    <div className="flex flex-wrap gap-5 px-5 xl:px-25 justify-between">
      <SummaryToday />
      <Calendar />
      <ServiceList />
      <Charts />
      <JobsList />
    </div>
  );
}


export default App
