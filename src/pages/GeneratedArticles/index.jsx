import React from "react";
import data from "@/app/dashboard/data.json";
import { DataTable } from "@/components/data-table";
import AppTabs from "@/page-components/AppTabs";
import AppHStack from "@/page-components/AppHStack";
import { Input } from "@/components/ui/input";
import AppVStack from "@/page-components/AppVStack";
import AppSelect from "@/page-components/AppSelect";
import { articleFilterDropdown } from "./data";
import { IconMenu2 } from "@tabler/icons-react";
import { useSidebar } from "@/components/ui/sidebar";
const GeneratedArticles = () => {
  const { setOpenMobile, openMobile } = useSidebar();
  return (
    <div className="bg-white py-4 h-full relative ">
      {" "}
      <AppVStack className="items-center gap-4 mt-4">
        <AppHStack className="w-full justify-center">
          <div
            className="absolute block lg:hidden left-[20px] top-[20px] cursor-pointer"
            onClick={() => {
              setOpenMobile(!openMobile);
            }}
          >
            {" "}
            <IconMenu2 size={25} />
          </div>
          <div className="font-bold text-4xl">Articles</div>
        </AppHStack>
        <AppHStack>
          <div>
            <AppSelect
              list={articleFilterDropdown}
              placeholder="Filter..."
              defaultValue="generated_articles"
              className="flex xl:hidden"
            />
          </div>
          <AppTabs className="hidden xl:block" />
        </AppHStack>
        <AppHStack className="mt-4 w-full justify-center px-4">
          <Input
            type="text"
            className={"w-full sm:w-[300px] placeholder:text-sm"}
            placeholder="Search for title & keywords..."
          />{" "}
        </AppHStack>
      </AppVStack>
      <div className="mt-4">
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default GeneratedArticles;
