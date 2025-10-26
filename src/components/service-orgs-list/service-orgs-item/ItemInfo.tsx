import Circle from "../../../assets/icons/circle.svg?react";
import { COLORMAP } from "../../../data/colorMap.data";
import type { Info } from "../../../types/service-orgs.types";

interface Props {
  itemInfo: Info;
  color: string;
}

function ItemInfo({ itemInfo, color }: Props) {
  return (
    <li key={itemInfo.id}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div><Circle className="size-[15px]" style={{ fill: COLORMAP[color] || "#0052CC" }} /></div>
          <p className="leading-4">{itemInfo.title}</p>
        </div>
        <p className="leading-4 text-right font-bold">{itemInfo.value}</p>
      </div>
    </li>
  );
}

export default ItemInfo;