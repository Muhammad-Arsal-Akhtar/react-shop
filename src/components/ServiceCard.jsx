
const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
        <div className="mb-6 flex items-center justify-center rounded-xl bg-primary text-red-500 text-3xl">
          {icon}
        </div>
        <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400">{details}</p>
      </div>
    </>
  );
};

export default ServiceCard


