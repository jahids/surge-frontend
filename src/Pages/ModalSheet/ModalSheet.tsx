import Sheet from 'react-modal-sheet';
import { useState } from 'react';

const ModalSheet = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className="bg-indigo-300 p-5 rounded-full mx-5 my-5"
        onClick={() => setOpen(true)}
      >
        Open sheet
      </button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              facilis, quis tenetur ullam earum eaque sed aut ea tempore magni.
            </p>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default ModalSheet;
