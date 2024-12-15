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
import { getStatusColor } from "@/app/[locale]/(admin)/admin/products/all-products/page";

interface CustomDropdownProps {
  selected: string;
  onChange: (selected: string) => void;
  options: {label: string; value: string}[]
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
          <DropdownMenuItem key={status?.value} onClick={() => onChange(status?.value)}>
            <Badge
              className={getStatusColor(status?.value)}
              variant="outline"
            >
              {status?.value.charAt(0).toUpperCase() + status?.value.slice(1)}
            </Badge>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdown;
