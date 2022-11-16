import React, { useState } from 'react';

// dummay data
import data from './data';

// style css
import './index.css';

// component
import SingleQuestion from './Question';

const App = () => {
  // state
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {/* mapping questions */}
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
