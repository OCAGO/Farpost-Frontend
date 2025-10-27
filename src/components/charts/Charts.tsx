import { useEffect, useState } from "react";
import { DATADAY, DATAHOUR, DATAMONTH, DATAWEEK } from "../../data/charts.data";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import ChartButton from "./nav-button/ChartButton";

function Charts() {
  const [period, setPeriod] = useState("hour");
  const [aspect, setAspect] = useState(2.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setAspect(1.5);
      else setAspect(2.5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartData = {
    hour: DATAHOUR,
    day: DATADAY,
    week: DATAWEEK,
    month: DATAMONTH,
  }[period];

  let xAxisInterval = {
    hour: 0,
    day: 1,
    week: 0,
    month: 1,
  }[period];

  if (period === "day" && window.innerWidth < 768) {
    xAxisInterval = 3;
  };

  if (period === "month" && window.innerWidth < 768) {
    xAxisInterval = 2;
  };

  const buttons = [
    { key: "hour", label: "60 минут" },
    { key: "day", label: "Сутки" },
    { key: "week", label: "Неделя" },
    { key: "month", label: "Месяц" },
  ];

  return (
    <div className="flex flex-col gap-[25px] min-w-[380px] mx-auto w-full max-w-[792px] sm:px-5">
      <h3 className="text-[21px] font-bold px-5 sm:px-0">Аварийность по жалобам</h3>
      <div className="flex flex-col gap-[15px] px-5 sm:px-[30px] pb-5 pt-[15px] border border-line sm:rounded-[10px]">
        <div className="flex gap-[30px]">
          {buttons.map(({ key, label }) => (
            <ChartButton key={key} title={label} active={period === key} onClick={() => setPeriod(key)} />
          ))}
        </div>

        <div className="w-full max-w-200 flex flex-col gap-2.5">
          <ResponsiveContainer width="100%" aspect={aspect}>
            <LineChart data={chartData} margin={{ left: 20, right: 20 }}>
              <XAxis dataKey="name" interval={xAxisInterval} />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Line type="linear" dataKey="electricity" stroke="#9575CD" name="Электричество" activeDot={{ r: 6 }} />
              <Line type="linear" dataKey="cold" stroke="#04A9F4" name="Холодная вода" activeDot={{ r: 6 }} />
              <Line type="linear" dataKey="hot" stroke="#E54412" name="Горячая вода" activeDot={{ r: 6 }} />
              <Line type="linear" dataKey="heating" stroke="#F97D41" name="Отопление" activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
          <a className="inline-block self-end text-btn hover:text-btn-hover underline" href="#">Подробнее</a>
        </div>

      </div>
    </div>
  );
}

export default Charts;