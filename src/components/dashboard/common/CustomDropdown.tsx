import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const getStatusColor = (status: string) => {
  const colors = {
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    processing: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    completed: "bg-green-100 text-green-800 hover:bg-green-200",
    cancelled: "bg-red-100 text-red-800 hover:bg-red-200",
  };
  return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
};
interface CustomDropdownProps {
  selected: string;
  onChange: (selected: string) => void;
  options: { label: string; value: string }[];
}

const CustomDropdown = (props: CustomDropdownProps) => {
  const { selected, onChange, options } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-2 capitalize">
          <Filter className="h-4 w-4" />
          {selected || "All Status"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onChange("")}>
          All Status
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {options?.map((status) => (
          <DropdownMenuItem
            key={status?.value}
            onClick={() => onChange(status?.value)}
          >
            <Badge className={getStatusColor(status?.value)} variant="outline">
              {status?.value.charAt(0).toUpperCase() + status?.value.slice(1)}
            </Badge>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdown;
