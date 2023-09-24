const FormCalender = ({ name, register, required = false }) => {
  return (
    <div>
      <input
        className="min-w-full py-3 text-2xl font-bold placeholder:text-2xl placeholder:font-bold placeholder:text-[#DCDCDC] focus:outline-none"
        type="date"
        id={name}
        name={name}
        {...register(name, {
          required: required,
        })}
      />
    </div>
  );
};

export default FormCalender;
