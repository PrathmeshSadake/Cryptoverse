import React from 'react';
import Moment from 'react-moment';

function Events({ events }) {
  return (
    <div className='container mx-auto'>
      <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-normal text-gray-800'>
        Events
      </p>
      <div className='bg-white pb-5'>
        <div className='grid grid-cols-4 gap-3 my-6'>
          {events.map((event) => (
            <div
              key={event.etag}
              className='flex flex-col items-center justify-between w-full h-full rounded shadow-md py-4 px-5 bg-white'
            >
              <div className='w-full h-full'>
                <h1 className='text-md font-medium leading-6 text-gray-800 '>
                  {event.summary}
                </h1>
                <p className='pt-4 text-xs leading-4 text-gray-600'>
                  Updated At:{' '}
                  <Moment format='DD/MM/YYYY'>{event.updated}</Moment>
                </p>
              </div>
              {event.items.length > 0 && (
                <button className='focus:outline-none text-indigo-700 hover:opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5'>
                  View Event Details
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
