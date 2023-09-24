/* eslint-disable  */
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
function IncomeSource({control} : any) {

  const options = [
    { value: '1', label: 'Apple' },
    { value: '2', label: 'Ball' },
    { value: '3', label: 'Cat' },
  ];
  return (
    <div>
      <select
        id={name}
        name={name}
        {...register(name, {
          required: required,
        })}
        className="select select-bordered w-full max-w-lg"
        placeholder=" --- Income Source ---"
      >
        <option className="text-black" disabled selected>
          --- Income Source ---
        </option>
        <option className="text-black" value="Employment Income">
          Employment Income
        </option>
        <option className="text-black" value="Investments">
          Investments
        </option>
        <option className="text-black" value="Inheritance">
          Inheritance
        </option>
        <option className="text-black" value="Business Income">
          Business Income
        </option>
        <option className="text-black" value="Savings">
          Savings
        </option>
        <option className="text-black" value="Family">
          Family
        </option>
      </select>

      {/* <Controller
        control={control}
        name="AnyName"
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            inputRef={ref}
            classNamePrefix="addl-class"
            options={options}
            value={options.find(c => c.value === value)}
            onChange={val => onChange(val.map(c => c.value))}
            isMulti
          />
        )}
      /> */}
    </div>
  );
}

export default IncomeSource;
