// import { useEffect, useState } from 'react';
// import usaAllState from '../../Utils/useState';

// function UsaState({ name, register, required }) {
//   const [state, setState] = useState([]);
//   useEffect(() => {
//     setState(usaAllState);
//   }, []);
//   return (
//     <div>
//       <select
//         id={name}
//         name={name}
//         {...register(name, {
//           required: required,
//         })}
//         className="select select-bordered w-full max-w-lg text-black"
//       >
//         <option disabled selected>
//           <span className="text-black"> --- State ---</span>
//         </option>
//         {state.map((state, index) => {
//           return (
//             <option className="text-black" key={index}>
//               {state.name}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// }

// export default UsaState;

import React from 'react';
import Select from 'react-select';
import usaAllState from '../../Utils/useState';

function UsaState({ name, register, required }) {
  const options = usaAllState?.map(state => ({
    value: state?.abbreviation,
    label: state?.name,
  }));

  return (
    <div>
      <Select
        id={name}
        name={name}
        {...register(name)}
        options={options}
        className="select-bordered w-full max-w-lg text-black"
        placeholder="--- State ---"
      />
    </div>
  );
}

export default UsaState;
