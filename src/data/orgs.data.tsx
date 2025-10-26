import type { Item } from "../types/service-orgs.types";
import BuildingIcon from "../assets/icons/building.svg?react";

export const ORGS: Item[] = [
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