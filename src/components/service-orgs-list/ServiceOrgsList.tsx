import { useState } from "react";
import NavbarButton from "./navbar-button/NavbarButton";
import ServiceOrgsItem from "./service-orgs-item/ServiceOrgsItem";
import { SERVICES } from "../../data/services.data";
import { ORGS } from "../../data/orgs.data";


function ServiceOrgsList() {
  const [activeTab, setActiveTab] = useState<"services" | "orgs">("services");
  const [activeId, setActiveId] = useState<number | null>(null);

  const currentList = activeTab === "services" ? SERVICES : ORGS;

  return (
    <div className="flex flex-col gap-[25px] max-w-[372px] w-full">
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
