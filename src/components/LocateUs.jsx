import { FiMapPin } from "react-icons/fi";

export default function LocateUs() {
  const landmarks = [
    "Reach Wadala Railway Station within 5 mins",
    "10 mins from Tata Memorial and Kem Hospital",
    "ITC Grand Central - 15 mins",
    "Get to St Joseph High School in 3 min",
    "VJTI College is 4 mins drive away",
    "Reach Five Gardens in 5 mins",
  ];

  return (
    <section id="location" className="scroll-mt-20">
    <div className="w-full md:w-[calc(100%-300px)] p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
        Locate Us
      </h2>

      {/* Map Section */}
      <div className="w-full h-[250px] rounded-xl overflow-hidden shadow-md border mb-6">
        <iframe
          title="Godrej Horizon Wadala Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.915879440835!2d72.87770757502755!3d19.069307252559854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce57d39d3b3b%3A0xe92944290b1f3c9c!2sGodrej%20Horizon%2C%20Wadala!5e0!3m2!1sen!2sin!4v1713421648224!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Landmarks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 text-sm font-semibold">
        {landmarks.map((text, index) => (
          <div key={index} className="flex items-start gap-2 ">
            <FiMapPin className="text-orange-600 mt-1" size={16} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div></section>
  );
}
