import check from "../assets/icons/check-circle.svg";
import background from "../assets/icons/background.svg";

const SubFooter = () => {
  return (
    <div className="mt-16 mb-16 flex items-center">
      <div className="w-1/2 mx-6">
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-semibold">
            Ready to clear the path to perfect communication?
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-500">
              <img src={check} alt="check" className="w-5" />
              <p className="text-lg">30 days free trial</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <img src={check} alt="check" className="w-5" />
              <p className="text-lg">Cancel at anytime</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <img src={check} alt="check" className="w-5" />
              <p className="text-lg">Access to all features</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <img src={check} alt="check" className="w-5" />
              <p className="text-lg">Personalized onboarding</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="py-4 px-6 rounded-full border border-gray-300 bg-white">
              Talk to sales
            </button>
            <button className="py-4 px-6 rounded-full bg-blue-500 text-white">
              Start your free trial
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <img src={background} alt="" className="w-full h-500" />
      </div>
    </div>
  );
};

export default SubFooter;
