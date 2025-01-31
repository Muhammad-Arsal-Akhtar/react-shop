import ServiceCard from './ServiceCard'
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";

const InfoSection = () => {

  const infoCardData = [

    {
      title: "Free Shipping",
      details: "Get your Order without costs.",
      icon: <FaShippingFast />
    },

    {
      title: "Support 24/7",
      details: "We are available anytime for you.",
      icon: <MdSupportAgent />
    },

    {
      title: "100% Money Back",
      details: "Full Refund if you are not satisfied",
      icon: <FaMoneyBillAlt />
    },

    {
      title: "Payment Secure",
      details: "YOur Payment info is safe with us.",
      icon: <RiSecurePaymentLine />
    },

    {
      title: "Discount",
      details: "Enjoy the best prices on our product.",
      icon: <MdDiscount />
    },

  ]


  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {infoCardData.map((elem, index) => (
            <ServiceCard
              key={`info-${index}`}
              title={elem.title}
              details={elem.details}
              icon={elem.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection