import type { Item } from "../types/service-orgs.types";
import HeatingIcon from "../assets/icons/heating.svg?react";
import HotWaterIcon from "../assets/icons/hot-water.svg?react";
import ColdWaterIcon from "../assets/icons/cold-water.svg?react";
import LightingIcon from "../assets/icons/lighting.svg?react";

export const SERVICES: Item[] = [
    { id: 1, name: "отопление", icon: <HeatingIcon />, info: [
      { id: 1, title: "отсутствует", value: "328 домов" },
      { id: 2, title: "охват от всех домов", value: "12 %" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 2, name: "горячая вода", icon: <HotWaterIcon />, info: [
      { id: 1, title: "отсутствует", value: "328 домов" },
      { id: 2, title: "охват от всех домов", value: "12 %" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 3, name: "холодная вода", icon: <ColdWaterIcon />, info: [
      { id: 1, title: "отсутствует", value: "328 домов" },
      { id: 2, title: "охват от всех домов", value: "12 %" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
    { id: 4, name: "электричество", icon: <LightingIcon />, info: [
      { id: 1, title: "отсутствует", value: "328 домов" },
      { id: 2, title: "охват от всех домов", value: "12 %" },
      { id: 3, title: "время последнего отключения", value: "2025-10-24 14:30" },
    ] },
  ];