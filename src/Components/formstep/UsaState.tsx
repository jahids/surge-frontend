import { useEffect, useState } from 'react';
import usaAllState from '../../Utils/useState';

function UsaState({ name, register, required }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(usaAllState);
  }, []);
  return (
    <div>
      <select
        id={name}
        name={name}
        {...register(name, {
          required: required,
        })}
        className="select select-bordered w-full max-w-lg text-black"
      >
        <option disabled selected>
          <span className="text-black"> --- State ---</span>
        </option>
        {state.map((state, index) => {
          return (
            <option className="text-black" key={index}>
              {state.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default UsaState;
