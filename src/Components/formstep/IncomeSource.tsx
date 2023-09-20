function IncomeSource({ name, register, required }) {
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
    </div>
  );
}

export default IncomeSource;
