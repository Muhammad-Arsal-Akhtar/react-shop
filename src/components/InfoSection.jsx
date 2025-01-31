import ServiceCard from './ServiceCard'
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";

const InfoSection = () => {

  const infoCardData = [

    {
      title: "Refreshing Design",
      details: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
      icon: <FaShippingFast />
    },

    {
      title: "Refreshing Design",
      details: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
      icon: <MdSupportAgent />
    },

    {
      title: "Refreshing Design",
      details: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
      icon: <FaMoneyBillAlt />
    },

    {
      title: "Refreshing Design",
      details: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
      icon: <RiSecurePaymentLine />
    },

    {
      title: "Refreshing Design",
      details: "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
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