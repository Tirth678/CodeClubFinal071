import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.2579427875!2d72.43965651666657!3d22.28063210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale contrast-125 brightness-75"
      />
    </div>
  );
};

export default Map;