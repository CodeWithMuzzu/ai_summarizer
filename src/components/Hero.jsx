import React from 'react'
import { logo } from '../assets' 

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summz_logo" className="w-28 object-contain" />

        <a href="https://github.com/CodeWithMuzzu/ai_summarizer">
        <button
          className="black_btn"
          type="button"
          // onClick={() => {
          //   window.open("https://ai-summarizer-27egt5p62-codewithmuzzu.vercel.app/");
          // }}
        >
          Github
          </button>
        </a>
        
        
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
          <h2 className='desc'>
            Simplify your reading with Summarize, an open-sourec article summarizer that transforms lengthy articles into clear and consise summaries.
          </h2>
    </header>
  );
}

export default Hero
