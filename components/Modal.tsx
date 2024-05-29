type ModalProps = {
  handleModal: () => void;
};

const Modal = ({ handleModal }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleModal}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4" onClick={(e) => e.stopPropagation()}>
        <input placeholder="Search..." className="w-full p-4" />
        <p className="mb-4">Show search results</p>
        
      </div>
    </div>
  );
};

export default Modal;
