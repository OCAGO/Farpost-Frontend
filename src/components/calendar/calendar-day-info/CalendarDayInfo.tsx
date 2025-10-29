import type { CalendarDay } from "../../../types/calendar.type";
import CircleIcon from "../../../assets/icons/circle.svg?react"
import { COLORMAP } from "../../../data/colorMap.data";
import { DAYINFO } from "../../../data/calendar.data";
import { formatDateService } from "../../../utils/formatDateService";
import ChevronLeftIcon from "../../../assets/icons/chevron-left.svg?react"
import ChevronRightIcon from "../../../assets/icons/chevron-right.svg?react"
import { useEffect, useState } from "react";

interface Props {
	day: CalendarDay | null;
}

function CalendarDayInfo({ day }: Props) {
	if (!day) return null;

	const blackouts = DAYINFO[day.date]?.blackouts || [];
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		setCurrentIndex(0);
	}, [day.date]);

	const off = blackouts[currentIndex];

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? blackouts.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === blackouts.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="sm:relative w-[372px] sm:h-[150px] ">
			<div className="sm:absolute inset-0 flex flex-col items-center justify-start gap-2.5">
				{blackouts.length === 0 || !off ? (
					<div className="text-center font-bold">Нет данных об отключениях</div>
				) : (
					<>
						<div className="flex flex-col gap-2.5 p-[15px] border border-line rounded-[10px] w-full">
							<h3 className="font-bold text-[16px]">{formatDateService(off.startOff)} – {formatDateService(off.endOff)}</h3>
							<div className="flex justify-between">
								<p>вид отключаемой услуги</p>
								<div className="flex items-center gap-2 w-[130px] justify-end">
									<CircleIcon className="size-[15px]" style={{ fill: COLORMAP[off.service] }} />
									<p className="font-bold">{off.service}</p>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<p className="w-[180px]">количество адресов с отключением</p>
								<p className="font-bold">{off.amountAddresses}</p>
							</div>
							<button className="block self-end text-btn underline hover:text-btn-hover cursor-pointer">Подробнее</button>
						</div>

						{blackouts.length > 1 && (
							<div className="flex items-center gap-4 mt-2">
								<button onClick={handlePrev} className="hover:bg-line hover:rounded-full p-1 cursor-pointer">
									<ChevronLeftIcon />
								</button>
								<p className="font-bold">{currentIndex + 1} / {blackouts.length}</p>
								<button onClick={handleNext} className="hover:bg-line hover:rounded-full p-1 cursor-pointer">
									<ChevronRightIcon />
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}

export default CalendarDayInfo;
