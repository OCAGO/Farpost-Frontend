import type { CalendarDay } from "../../../types/calendar.type";
import CircleIcon from "../../../assets/icons/circle.svg?react"
import { COLORMAP } from "../../../data/colorMap.data";

interface Props {
	day: CalendarDay | null;
}

function CalendarDayInfo({ day }: Props) {
	return (
		<div className="flex flex-col w-[372px]">
			<ul className="flex flex-col gap-2.5">
				{day?.services.map((service, i) => service.offs.map((off, j) => (
					<li key={`${i}-${j}`} className="flex flex-col gap-2.5 p-[15px] border border-line rounded-[10px]">
						<h3 className="font-bold text-[16px]">{off.startOff} – {off.endOff}</h3>
						<div className="flex justify-between">
							<p>вид отключаемой услуги</p>
							<div className="flex items-center gap-2 w-[130px] justify-end">
								<div>
									<CircleIcon className="size-[15px]" style={{fill: COLORMAP[service.category]}}/>
								</div>
								<p className="font-bold">{service.category}</p>
							</div>
						</div>
						<div className="flex justify-between items-center">
							<p className="w-[180px]	">количество адресов с отключением</p>
							<p className="font-bold">{off.amountAddresses}</p>
						</div>
						<button className="block self-end text-btn underline hover:text-btn-hover cursor-pointer">Подробнее</button>
					</li>
				))
				)}
			</ul>
		</div>
	);
}

export default CalendarDayInfo;