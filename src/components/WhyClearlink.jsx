import video from "../assets/icons/video.svg";
import recording from "../assets/icons/recording.svg";
import calendar from "../assets/icons/calendar.svg";
import unlock from "../assets/icons/unlock.svg";
import rectangleImage from "../assets/icons/rectangle-image.svg";

const WhyClearlink = () => {
  const data = [
    {
      id: 1,
      image: video,
      title: "Crystal-clear HD video",
      description:
        "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
    },
    {
      id: 2,
      image: recording,
      title: "Noise-cancelling audio",
      description:
        "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
    },
    {
      id: 3,
      image: calendar,
      title: "Scheduling made easy",
      description:
        "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
    },
    {
      id: 4,
      image: unlock,
      title: "Bank-grade security",
      description:
        "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
    },
  ];

  return (
    <div className="my-20 mx-6">
      <div className="text">
        <p className="font-medium text-blue-500 text-lg">The ClearLink Advantage</p>
        <div className="subtext">
          <p className="font-semibold text-2xl">Why choose ClearLink?</p>
          <p className='text-lg text-gray-700'>
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
      </div>

      <div className='flex-items flex'>
        <div className='items-wrapper flex flex-wrap gap-8'>
          {data.map((item) => {
            return (
              <div key={item.id} className='item w-1/2'>
                <div className='circle flex justify-center items-center w-12 h-12 rounded-full border border-gray-300 bg-gray-100'>
                  <img src={item.image} alt="image" />
                </div>

                <p className='font-semibold text-lg mt-4'>{item.title}</p>
                <p className='text-base leading-7'>{item.description}</p>
              </div>
            )
          })}
        </div>
        <div className='image w-3/5 h-30'>
          <img src={rectangleImage} alt="Rectangle Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default WhyClearlink;
