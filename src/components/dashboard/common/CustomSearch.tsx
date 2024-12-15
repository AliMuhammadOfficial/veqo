import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";

interface CustomSearchProps {
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const CustomSearch = (props: CustomSearchProps) => {
  const { search, handleSearch, placeholder } = props;
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        placeholder={placeholder ?? "Search by order ID, customer name, or email..."}
        className="pl-10"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default CustomSearch;
