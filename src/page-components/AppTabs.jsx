import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AppTabs = ({
  data = [
    { label: "Generated Articles", id: "generated_articles" },
    { label: "Published Articles", id: "published_articles" },
    { label: "Scheduled Articles", id: "scheduled_articles" },
    { label: "Archived Articles", id: "archived_articles" },
  ],
  className = "",
}) => {
  return (
    <Tabs defaultValue={data?.[0]?.id} className={className}>
      <TabsList className={"border"}>
        {data?.map((item) => {
          return (
            <TabsTrigger
              value={item.id}
              className={"cursor-pointer"}
              key={item.id}
            >
              {item?.label}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {/* <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  );
};

export default AppTabs;
