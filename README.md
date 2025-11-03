Inspirational Homepage — React App

A motivational productivity dashboard built with React + Vite, where users can:

🌤️ Check the current weather (via OpenWeather API)

🌅 View inspirational images (via Pexels API)

💬 Read inspirational quotes (via the Real Inspire API)

🎯 Create, complete, and delete daily goals (saved locally in the browser)

🧱 Tech Stack

React + Vite — fast modern frontend setup

JavaScript (ES2020)

Plain CSS — minimal styling for clarity

LocalStorage — simple browser persistence

OpenWeather API — weather data

Pexels API — inspirational images

Real Inspire API — inspirational quotes

🚀 Setup Instructions
1. Clone this repository
git clone https://github.com/AmaniPaul/inspo-page.git
cd inspo-page

2. Install dependencies
npm install

3. Get API keys

You’ll need:

🔑 OpenWeather
 — for weather data

🔑 Pexels
 — for inspirational images

The Real Inspire API does not require an API key.

4. Add environment variables

Create a .env file in your project root:

VITE_WEATHER_API_KEY=your_openweather_key_here
VITE_PEXELS_API_KEY=your_pexels_key_here


⚠️ All environment variables must start with VITE_ in Vite to be exposed to your app.

5. Start the development server
npm run dev


Then open the provided local URL (e.g. http://localhost:5173).

🧩 Project Structure
focus-app/
├─ index.html
├─ vite.config.js
├─ .env
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ styles.css
   ├─ api/
   │  ├─ fetchJson.js
   │  ├─ weather.js
   │  ├─ images.js
   │  └─ quotes.js        
   ├─ hooks/
   │  ├─ useWeather.js
   │  ├─ useImages.js
   │  └─ useQuote.js
   └─ components/
      ├─ WeatherCard.jsx
      ├─ ImageCarousel.jsx
      ├─ QuoteCard.jsx
      └─ goals/
         ├─ GoalsPanel.jsx
         ├─ GoalForm.jsx
         ├─ GoalsList.jsx
         └─ GoalItem.jsx

💬 Quote Setup (Real Inspire API)

The app now uses Real Inspire
 for random quotes.

Endpoint example:

https://real-inspire.vercel.app/api/quotes/random


You can request one random quote like this:

import { fetchJson } from './fetchJson';

export async function getRandomQuote() {
  const data = await fetchJson('https://real-inspire.vercel.app/api/quotes/random');
  return {
    text: data?.quote || 'Keep going.',
    author: data?.author || 'Unknown',
  };
}


✅ No API key needed
✅ Fast response (hosted on Vercel)
✅ Returns clean JSON:

{
  "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "author": "Winston Churchill"
}

🌅 Images (Pexels API)

The app fetches images from Pexels’ /v1/search endpoint.
Change the perPage value to control how many photos are loaded:

getInspirationImages(topic = 'inspiration', perPage = 20);

🌤 Weather (OpenWeather API)
Automatically detects your location

Falls back to New York City if geolocation is blocked

Switch between °C and °F using the dropdown (fully controlled)

Displays temperature, “feels like,” and condition icons

🎯 Goals
Add new daily goals

Mark goals complete or delete them

Goals persist in browser localStorage

Simple reducer pattern (useReducer) for predictable state updates


👨‍💻 Author

Developed by [Amani Paul]
Junior, Computer Science Major 🧠
Last updated: November 2025

## 🤖 Use of AI Assistance

This project was developed by [Your Name] with the support of OpenAI’s ChatGPT (GPT-5 model).  
ChatGPT was used as a **development assistant** to:

- Plan the project structure and React component hierarchy  
- Generate initial boilerplate code for hooks, services, and components  
- Provide code review explanations and debugging suggestions  
- Help write human-readable documentation (including this README)

All generated content was **reviewed, edited, and verified manually** to ensure correctness, code quality, and understanding of the material.
