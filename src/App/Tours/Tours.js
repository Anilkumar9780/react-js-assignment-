import React from 'react';

// component
import Tour from './Tour';

const Tours = ({
  // get props
   tours, 
   removeTour
   }) => {

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* mapping tour */}
        {tours.map((tour) => {
          // passing props Tour component 
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
