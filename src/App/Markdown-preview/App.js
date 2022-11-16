import React, { useState } from 'react';

// style css
import './index.css';

// package
import ReactMarkdown from 'react-markdown';

const App = () => {
  // state
  const [markdown, setMarkdown] = useState('# markdown preview')

  // return function
  return (
    <main>
      <section className='markdown'>
        {/* input text */}
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
