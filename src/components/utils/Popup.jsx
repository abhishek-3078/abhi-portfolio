import React, { useEffect } from 'react';

const Popup = ({ onClose }) => {
  useEffect(() => {
    // Add class to body to disable scrolling
    document.body.classList.add('no-scroll');

    return () => {
      // Remove class from body to re-enable scrolling
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div
      className="fixed h-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[300]"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative  max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <h2 className="text-xl font-semibold mb-4 text-black">Popup Title</h2> */}
        <p className='text-gray-500'>This functionality is not working currently. You can still reach out to me via email at abhishekchaurasia0786@gmail.com </p>
        <button
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
