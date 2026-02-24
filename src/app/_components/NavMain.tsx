"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const data = ["ldsgn/quiz-app", "ldsgn/quiz-app-2", "ldsgn/quiz-app-3"];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <div className="flex justify-end">
          <p>History</p>
          <div className="w-full flex justify-end ml-20">
            <SidebarTrigger />
          </div>
        </div>

        <Collapsible asChild defaultOpen={true} className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild className="h-full">
              <div className="ml-10 w-60">
                {data.map((item) => (
                  <p className="py-2" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </CollapsibleTrigger>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
