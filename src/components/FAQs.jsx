import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItems = [
    {
      title: 'How many participants can join a ClearLink video conference?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'Can I use ClearLink on multiple devices?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'Is ClearLink compatible with other video conferencing platforms?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'How does ClearLink ensure the security of my video conferences?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'Do I need to download any software to use ClearLink?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
    {
      title: 'What kind of customer support does ClearLink provide?',
      content: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.'
    },
  ];

  return (
    <div className="mx-24 py-16 flex justify-between gap-16">
      <div className="w-1/2 flex flex-col gap-6">
        <p className="text-blue-600 font-semibold">Support</p>
        <p className="text-4xl font-semibold">FAQs</p>
        <p className="text-gray-700">
          Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please{" "}
          <a href="#" className="text-blue-600">
            chat to our friendly team
          </a>
          .
        </p>
      </div>

      <div className="w-1/2">
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
              <div className="accordion-header">
                <p className="font-semibold text-lg">{item.title}</p>
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  {openIndex === index ? '-' : '+'}
                </button>
              </div>
              {openIndex === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
