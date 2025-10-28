import { useState } from "react";
import { CALENDAR } from "../../../data/calendar.data";
import { COLORMAP } from "../../../data/colorMap.data";
import type { CalendarDay } from "../../../types/calendar.type";
import CalendarDayInfo from "../calendar-day-info/CalendarDayInfo";

function CalendarBlock() {
  const namesDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);

  const handleDayClick = (day: CalendarDay) => {
    setSelectedDay(day);
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
          {CALENDAR.map((day, index) => (
            <li key={index}>
              <button
                onClick={() => handleDayClick(day)}
                className={`flex flex-col items-center w-11 h-[63px] text-[25px] font-bold rounded-[10px] justify-center cursor-pointer hover:bg-[#FFCBBB] hover:border hover:border-primary hover:text-[#FF5E2C]
      ${selectedDay?.date === day.date && selectedDay?.isCurrentMonth === day.isCurrentMonth
                    ? "border border-primary text-[#FF5E2C] bg-[#FFCBBB]"
                    : `${day.isCurrentMonth ? "text-black" : "text-black/30"} bg-line`}`}
              >
                <span>{day.date}</span>

                <div className="flex gap-1 mt-1">
                  {(day.services.length > 0 ? day.services : [null]).map((service, i) => (
                    <span
                      key={i}
                      className="block w-1.5 h-1.5"
                      style={{
                        backgroundColor: service
                          ? day.isCurrentMonth
                            ? COLORMAP[service.category]
                            : "rgba(0,0,0,0.3)"
                          : "transparent",
                      }}
                    ></span>
                  ))}
                </div>
              </button>

            </li>
          ))}
        </ul>
      </div>
      {selectedDay && selectedDay.services.length > 0 && (
        <CalendarDayInfo day={selectedDay} />
      )}
    </div>
  );
}

export default CalendarBlock;