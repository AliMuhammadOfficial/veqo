import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomSelectProps {
  options: { label: string; value: string }[];
  handleChange: (event: any) => void;
  selected: string;
}

const CustomSelect = (props: CustomSelectProps) => {
  const { options, handleChange, selected } = props;
  return (
    <Select
      defaultValue={selected}
        onValueChange={(value: any) =>
          handleChange(value)
        }
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option) => (
          <SelectItem key={option?.value} value={option?.value}>
            {option?.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
