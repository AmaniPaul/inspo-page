# Inspirational Homepage -- React App
# Author : [Amani Paul]
## Overview
A simple dashboard where users can: 

- [x] Check the current weather (via OpenWeather API)
- [x] Read an inspirational quote [from api.realinspire.live/v1]
- [] View inspirational images
- [x] Create, complete, and delete daily goals (stored locally)

## Tech Stack

* React + Vite for development

* JavaScript (ES2020)

* Plain CSS (no frameworks)

* LocalStorage for persistence

* OpenWeather API for weather data

Unsplash API for images

* realinspire API for quotes

🚀 Setup Instructions
1. Clone the repository
git clone https://github.com/AmaniPaul/inspo-page.git
cd daily-focus
2. Install dependencies
npm install
3. Get API Keys

You need keys for:

OpenWeather — for weather data

Unsplash Developer — for inspirational images

realinspire - for quotes

4. Add environment variables

Create a file named .env in the project root:

VITE_WEATHER_API_KEY=your_openweather_key_here
VITE_IMAGES_API_KEY=your_unsplash_key_here

⚠️ In Vite, all env vars must start with VITE_ to be accessible in your code.

5. Start the dev server
npm run dev

Then open the printed localhost URL (e.g., http://localhost:5173).

## Features
- WeatherCard: auto-detects you location and shows temp and condition
- QuoteCard: shows a random motivational quote (click 'New Quote' to refresh)


## Reflection

##### - Hardest bug I faced


##### - How I fixed it



##### - What I learned
