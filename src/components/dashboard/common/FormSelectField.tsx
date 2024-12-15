
  import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  interface FormSelectFieldProps {
    form: any;
    label: string;
    name: string;
    placeholder?: string;
    options: string[];
  }
  
  const FormSelectField = (props: FormSelectFieldProps) => {
    const { form, label, name, placeholder, options } = props;
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="mb-[1rem] w-full space-y-1">
            <FormLabel className="text-[14px] text-[var(--darkBlue-950)] font-[400]">
              {label}
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue=""
              value={field.value}
            >
              <FormControl
                className={`p-[12px] h-[48px] border ${
                  field.value
                    ? "border-gray-500"
                    : "border-gray-300"
                }`}
              >
                <SelectTrigger value={field.value}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option: string) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };
  
  export default FormSelectField;
  