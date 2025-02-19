
const Modal = ({isOpen, setIsOpen}) => {

  return (
    <>

      {/* Main Modal */}
      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow-md">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                Terms of Service
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center hover:cursor-pointer"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 space-y-4">
              <p className="text-base text-gray-500">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base text-gray-500">
                The European Union’s General Data Protection Regulation (G.D.P.R.)
                goes into effect on May 25 and is meant to ensure a common set of
                data rights in the European Union. It requires organizations to notify
                users as soon as possible of high-risk data breaches that could
                personally affect them.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center p-4 border-t">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-lg"
              >
                I accept
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 hover:cursor-pointer"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal