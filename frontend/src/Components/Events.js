import React from 'react';

const events = [
  {
    title: 'Event 1',
    date: '2023-07-15',
    description: 'Description of Event 1',
    image: 'https://example.com/event1.jpg',
  },
  {
    title: 'Event 2',
    date: '2023-08-20',
    description: 'Description of Event 2',
    image: 'https://example.com/event2.jpg',
  },
  // Add more event objects as needed
];

const EventPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow">
            <img
              src={event.image}
              alt={event.title}
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-500 mb-4">{event.date}</p>
              <p className="text-gray-800">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;