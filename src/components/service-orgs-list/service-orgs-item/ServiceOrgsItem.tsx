import type { ReactNode } from "react";
import ChevronDownIcon from "../../../assets/icons/chevron-down.svg?react";
import ChevronUpIcon from "../../../assets/icons/chevron-up.svg?react";
import Circle from "../../../assets/icons/circle.svg?react";

interface Info {
  id: number;
  title: string;
  value: string;
}

interface Item {
  id: number;
  name: string;
  icon: ReactNode;
  info: Info[];
}

interface Props {
  item: Item;
  activeId: number | null;
  setActiveId: (value: null | number) => void;
}

function ServiceOrgsItem({ item, activeId, setActiveId }: Props) {
  const { id, name, icon, info } = item;
  const isOpen = activeId === id;

  return (
    <li className={`w-[332px] px-2.5 py-1.5 ${isOpen ? "bg-white rounded-[10px]" : "bg-auto"}`}>
      <button
        className="flex w-full text-left justify-between items-center"
        onClick={() => setActiveId(isOpen ? null : id)}
      >
        <div className="flex items-center gap-5">
          <div>{icon}</div>
          <p className="uppercase leading-4">{name}</p>
        </div>
        <div className="size-6">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-[15px]">
          <ul className="flex flex-col gap-2.5 px-[7px] py-2.5">
            {info.map((item) => (
              <li key={item.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div><Circle className="size-[15px] fill-primary" /></div>
                    <p className="leading-4">{item.title}</p>
                  </div>
                  <p className="leading-4 text-right font-bold">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <a className="text-right text-btn hover:text-btn-hover underline" href="#">Подробнее</a>
        </div>
      )}
    </li>
  );
}

export default ServiceOrgsItem;
