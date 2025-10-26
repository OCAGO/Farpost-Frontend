import { useState, type ReactNode } from "react";
import HeatingIcon from "../../assets/icons/heating.svg?react";
import HotWaterIcon from "../../assets/icons/hot-water.svg?react";
import ColdWaterIcon from "../../assets/icons/cold-water.svg?react";
import LightingIcon from "../../assets/icons/lighting.svg?react";
import BuildingIcon from "../../assets/icons/building.svg?react";
import ServiceOrgsItem from "./service-orgs-item/ServiceOrgsItem";
import NavbarButton from "./navbar-button/NavbarButton";

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

function ServiceOrgsList() {
  const [activeTab, setActiveTab] = useState<"services" | "orgs">("services");
  const [activeId, setActiveId] = useState<number | null>(null);

  const serviceList: Item[] = [
    { id: 1, name: "отопление", icon: <HeatingIcon />, info: [
      { id: 1, title: "отсутствует", value: "328 домов" },
      { id: 2, title: "охват от всех домов", value: "12 домов" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 2, name: "горячая вода", icon: <HotWaterIcon />, info: [
      { id: 1, title: "отсутствует", value: "328 домов" },
      { id: 2, title: "охват от всех домов", value: "12 домов" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 3, name: "холодная вода", icon: <ColdWaterIcon />, info: [
      { id: 1, title: "отсутствует", value: "328 домов" },
      { id: 2, title: "охват от всех домов", value: "12 домов" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 4, name: "электричество", icon: <LightingIcon />, info: [
      { id: 1, title: "отсутствует", value: "328 домов" },
      { id: 2, title: "охват от всех домов", value: "12 домов" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
  ];

  const orgsList: Item[] = [
    { id: 1, name: "МУПВ ВПЭС", icon: <BuildingIcon />, info: [
      { id: 1, title: "количество аварий", value: "75 домов" },
      { id: 2, title: "адрес последнего отключения", value: "Калинина ул. 253" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 2, name: "УПРАВЛЯЮЩИЕ ОРГАНИЗАЦИИ", icon: <BuildingIcon />, info: [
      { id: 1, title: "количество аварий", value: "75 домов" },
      { id: 2, title: "адрес последнего отключения", value: "Калинина ул. 253" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 3, name: "ООО «Дальневосточные Электрические Сети»", icon: <BuildingIcon />, info: [
      { id: 1, title: "количество аварий", value: "75 домов" },
      { id: 2, title: "адрес последнего отключения", value: "Калинина ул. 253" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 4, name: "АО «Оборонэнерго»", icon: <BuildingIcon />, info: [
      { id: 1, title: "количество аварий", value: "75 домов" },
      { id: 2, title: "адрес последнего отключения", value: "Калинина ул. 253" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
  ];

  const currentList = activeTab === "services" ? serviceList : orgsList;

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex gap-[25px]">
        <NavbarButton
          name="Коммунальные услуги"
          isActive={activeTab === "services"}
          onClick={() => setActiveTab("services")}
        />
        <NavbarButton
          name="Организации"
          isActive={activeTab === "orgs"}
          onClick={() => setActiveTab("orgs")}
        />
      </div>

      <div className="p-5 border border-line rounded-[10px] bg-black/1">
        <ul className="flex flex-col gap-5">
          {currentList.map((item) => (
            <ServiceOrgsItem
              key={item.id}
              item={item}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceOrgsList;
