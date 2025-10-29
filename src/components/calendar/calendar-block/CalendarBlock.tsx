import { useEffect, useState } from "react";
import { COLORMAP } from "../../../data/colorMap.data";
import type { CalendarDay } from "../../../types/calendar.type";
import CalendarDayInfo from "../calendar-day-info/CalendarDayInfo";
import { isCurrentMonth } from "../../../utils/checkCurrentMonth";
import { NAMESSERVICES } from "../../../data/namesServices.data";

function CalendarBlock() {
  const namesDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [calendar, setCalendar] = useState<CalendarDay[]>([]);

  useEffect(() => {
    async function fetchCalendar(month?: string): Promise<CalendarDay[]> {
      let url = "/off/calendar";
      if (month) {
        url += `?month=${encodeURIComponent(month)}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }

      const data = await response.json();

      return Array.isArray(data) ? data : data?.calendar ?? [];
    }
    
    fetchCalendar("2019-10")
      .then((data) => {
        console.log("Данные календаря:", data);
        setCalendar(data);
      })
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  const handleDayClick = (day: CalendarDay) => {
    setSelectedDay(prev => (prev?.date === day.date ? null : day));
  };

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex flex-col gap-[15px] max-w-[372px] p-5 bg-black/1 border border-line rounded-[10px]">
        <ul className="flex justify-between text-[18px] font-bold px-3">
          {namesDays.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="flex w-[332px] flex-wrap gap-1">
          {calendar.map((day, index) => {
            const isCurrentMonthDay = isCurrentMonth(day.date);
            const isCurrentMonthSelectedDay = isCurrentMonth(selectedDay?.date || "");

            return (
              <li key={index}>
                <button
                  onClick={() => handleDayClick(day)}
                  className={`flex flex-col items-center w-11 h-[63px] text-[25px] font-bold rounded-[10px] justify-center cursor-pointer hover:bg-[#FFCBBB] hover:border hover:border-primary hover:text-[#FF5E2C]
      ${selectedDay?.date === day.date && isCurrentMonthSelectedDay === isCurrentMonthDay
                      ? "border border-primary text-[#FF5E2C] bg-[#FFCBBB]"
                      : `${isCurrentMonthDay ? "text-black" : "text-black/30"} bg-line`}`}
                >
                  <span>{Number(day.date.split("-")[2])}</span>

                  <div className="flex gap-1 mt-1">
                    {(day.services.length > 0 ? day.services : [null]).map((service, i) => (
                      <span
                        key={i}
                        className="block w-1.5 h-1.5"
                        style={{
                          backgroundColor: service
                            ? isCurrentMonthDay
                              ? COLORMAP[NAMESSERVICES[service]]
                              : "rgba(0,0,0,0.3)"
                            : "transparent",
                        }}
                      ></span>
                    ))}
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <CalendarDayInfo day={selectedDay} />
    </div>
  );
}

export default CalendarBlock;