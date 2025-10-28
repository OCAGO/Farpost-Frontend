import { useRef, useState, useEffect } from "react";
import ChevronDownIcon from "../../../assets/icons/chevron-down.svg?react";
import ChevronUpIcon from "../../../assets/icons/chevron-up.svg?react";
import ItemInfo from "./ItemInfo";
import type { Item } from "../../../types/service-orgs.types";

interface Props {
  item: Item;
  activeId: number | null;
  setActiveId: (value: null | number) => void;
}

function ServiceOrgsItem({ item, activeId, setActiveId }: Props) {
  const { id, name, icon, info } = item;
  const isOpen = activeId === id;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight || 0);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={`w-[332px] px-2.5 py-1.5 ${isOpen ? "bg-white rounded-[10px]" : "bg-auto"}`}>
      <button
        className="flex w-full text-left justify-between items-center cursor-pointer"
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

      <div ref={contentRef} className="transition-all duration-500 ease-in-out overflow-hidden" style={{ maxHeight: `${height}px`, opacity: isOpen ? 1 : 0 }}>
        <div className="flex flex-col gap-[15px]">
          <ul className="flex flex-col gap-2.5 px-[7px] py-2.5">
            {info.map((itemInfo) => (
              <ItemInfo itemInfo = {itemInfo} color={item.name}/>
            ))}
          </ul>
          <a className="inline-block self-end text-btn hover:text-btn-hover underline" href="#">Подробнее</a>
        </div>
      </div>
    </li>
  );
}

export default ServiceOrgsItem;
