import { Avatar } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const AppSelect = ({
  defaultValue = "initial",
  list = [],
  placeholder = "placeholder...",
  customDropDown,
  className = "",
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  return (
    <Select
      value={selectedOption}
      onValueChange={(value) => {
        setSelectedOption(value);
      }}
    >
      <SelectTrigger className={`w-full rounded-2xl ${className}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {customDropDown ||
          list.map((item) => {
            return (
              <SelectItem value={item.id} key={item.id}>
                <div>{item.label}</div>
              </SelectItem>
            );
          })}
      </SelectContent>
    </Select>
  );
};

export default AppSelect;
