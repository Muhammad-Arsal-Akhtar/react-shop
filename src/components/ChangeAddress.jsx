import { useState } from "react"

const ChangeAddress = ({changeAddress, setIsOpen}) => {

  const [modifyAddress, setModifyAddress] = useState('') 

  const closeAndSaveAddress = () => {
    changeAddress(modifyAddress)
    setIsOpen(false)
  }

  return (
    <>
      <div>
        <input type="text" id="chnage_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:red-blue-500"
          placeholder="write address here" onChange={ (e) => setModifyAddress(e.target.value) }  required /> 
      </div>
      <button onClick={() => closeAndSaveAddress()} className="text-white bg-red-700 hover:bg-red-800 px-5 py-2.5 rounded-lg hover:cursor-pointer">
          Save
      </button>
      <button onClick={() => setIsOpen(false)} className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 hover:cursor-pointer">
          Decline
      </button>
    </>
  )
}

export default ChangeAddress