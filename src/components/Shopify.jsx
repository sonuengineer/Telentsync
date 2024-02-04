import avatar from '../assets/icons/avatar.icon.svg';
import shopify from '../assets/icons/shopify.icon.svg';
import stars from '../assets/icons/stars.icon.svg';
import content from '../assets/icons/content.icon.svg';
import arrowleft from '../assets/icons/arrow-left.icon.svg';
import arrowright from '../assets/icons/arrow-right.icon.svg';

const Shopify = () => {
  return (
    <div className="bg-gray-300">
      <section className="mx-6 py-28 flex">
        <div className="w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-12">
              <img src={shopify} alt="Shopify" className="w-1/4" />
              <img src={stars} alt="stars" className="w-1/4" />
            </div>
            <p className="text-3xl w-5/6">
              ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <img src={avatar} alt="" className="w-12" />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg">Sarah Thompson</p>
                <p className="text-sm text-gray-500">Project Manager, Shopify</p>
              </div>
            </div>

            <div className="flex gap-6">
              <button className="w-12 h-12 rounded-full flex justify-center items-center border border-gray-400 bg-white">
                <img src={arrowleft} alt="" />
              </button>
              <button className="w-12 h-12 rounded-full flex justify-center items-center border border-gray-400 bg-white">
                <img src={arrowright} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img src={content} alt="" className="w-full" />
        </div>
      </section>
    </div>
  );
};

export default Shopify;
