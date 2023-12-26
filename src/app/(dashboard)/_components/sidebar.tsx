"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SidebarItem from "@/app/(dashboard)/_components/sidebarItem";

// TODO: Add orgs from API
const Sidebar = () => {
  const orgs: {
    name: string;
    id: string;
    members?: string[];
  }[] = [
    { name: "Org 1", id: "org-1" },
    { name: "Org 2", id: "org-2" },
  ];

  return (
    <>
      <Accordion type="single" collapsible>
        {orgs.map((org) => (
          <AccordionItem value={org.id} key={org.id}>
            <AccordionTrigger>{org.name}</AccordionTrigger>
            <SidebarItem org={org} />
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;
