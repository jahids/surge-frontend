function Country({ name, register, required }) {
  return (
    <div>
      <select
        id={name}
        name={name}
        {...register(name, {
          required: required,
        })}
        className="select select-bordered w-full max-w-lg"
      >
        <option disabled selected>
          <span className="text-slate-500">--- COUNTRY ---</span>
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  );
}

export default Country;
