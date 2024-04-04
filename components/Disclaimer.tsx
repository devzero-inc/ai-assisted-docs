const DisclaimerModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg max-w-md w-full text-black">
        <h2 className="font-bold text-xl mb-4">Disclaimer</h2>
        <p>
          Please note: The documentation being used is for testing purposes only
          and does not represent the official documentation for DevZero.
        </p>
        <div className="text-right mt-4">
          <button
            className="bg-custom-gradient-2 text-white rounded-md px-4 py-2 hover:opacity-95"
            onClick={onClose}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
