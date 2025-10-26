import JobsItem from "./jobs-item/JobsItem";

interface Job {
  id: number;
  name: string;
  salary: string;
}

function JobsList() {
  const dataJobsList: Job[] = [
    { id: 1, name: "Сантехник (монтажник труб и канализаций)", salary: "250 000 – 300 000 ₽" },
    { id: 2, name: "Оператор коммунальных систем", salary: "200 000 – 350 000 ₽" },
    { id: 3, name: "Монтажник уличного освещения", salary: "400 000 – 500 000 ₽" },
  ];

  return (
    <div className="flex flex-col gap-[25px] px-[15px] py-[25px] max-w-[372px] border border-line rounded-[10px] mr-4 xl:mr-25 overflow-hidden">
      <h3 className="px-[15px] text-[14px] font-bold underline text-btn hover:text-btn-hover"><a href="#">Работа с высоким доходом</a></h3>
      <ul className="flex flex-col gap-3">
        {dataJobsList.map((item) => (
          <JobsItem key={item.id} jobName={item.name} salary={item.salary} />
        ))}
      </ul>
    </div>
  );
}

export default JobsList;