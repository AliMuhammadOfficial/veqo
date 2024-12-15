import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

// Currency options with their symbols
const CURRENCIES = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'JPY', symbol: '¥' },
  { code: 'CAD', symbol: 'CA$' },
  { code: 'AUD', symbol: 'A$' }
];

interface PriceInputProps {
  form: any;
  label: string;
  name: string;
  initialPrice?: number;
  initialCurrency?: string;
}

const FormPriceInput: React.FC<PriceInputProps> = ({
  form,
  label,
  name,
}) => {
  const { control } = form;

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = e.target.value;
    form.setValue("price", newPrice);
  };

  const handleCurrencyChange = (newCurrency: string) => {
    form.setValue("currency", newCurrency);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full space-y-0 mb-4">
          <FormLabel className="text-[14px] text-[var(--darkBlue-950)] font-[400]">
            {label}
          </FormLabel>
          <div className="flex items-center space-x-2">
            <Select 
              value={form.getValues("currency")} 
              onValueChange={handleCurrencyChange}
            >
              <SelectTrigger className="w-24 h-12">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map((curr) => (
                  <SelectItem key={curr.code} value={curr.code}>
                    {curr.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormControl
              className={`border ${
                field.value ? "border-gray-500" : "border-gray-300"
              } outline-none`}
            >
              <Input
                type="number"
                className="outline-none p-[12px] h-[48px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter price"
                min={0}
                step={0.01}
                value={field.value}
                onChange={handlePriceChange}
                style={{ marginTop: "4px" }}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormPriceInput;