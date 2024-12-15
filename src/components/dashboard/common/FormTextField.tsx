import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


interface FormTextFieldProps {
  form: any;
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  [key: string]: any;
}

const FormTextField = (props: FormTextFieldProps) => {
  const { form, label, name, placeholder, type, maxLength, ...rest } = props;

  const getMaxLength = (name: string, maxLength: number | undefined) => {
    if (name === "zipcode" || name === "mailing_zipcode") {
      return 5;
    }
    return maxLength ?? 500;
  };

  const maxLengthValue = getMaxLength(name, maxLength);

  return (
    <FormField
      control={form.control}
      name={name}
      {...rest}
      render={({ field }) => (
        <FormItem className="mb-[1rem] w-full">
          <FormLabel className="text-[14px] text-[var(--darkBlue-950)] font-[400] mb-[4px]">
            {label}
          </FormLabel>
          <FormControl
            className={`border ${
              field.value ? "border-gray-500" : "border-gray-300"
            } outline-none`}
          >
            <Input
              type={type}
              className="outline-none p-[12px] h-[48px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder={placeholder}
              maxLength={maxLengthValue}
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                  field.onChange(value);
              }}
              style={{ marginTop: "4px" }}
            />
          </FormControl>
          <FormMessage className="pt-1" />
        </FormItem>
      )}
    />
  );
};

export default FormTextField;
