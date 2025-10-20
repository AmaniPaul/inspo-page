* Developer Log * Inspo Page

## Error 1
** What broke **
When the site retrieved the weather data, the icon was broken

** How I fixed It ** 
added a weatherIcon component that builds the 
correct OpenWeather URL and uses onError to hid the <img> if the icon fails to load

## Error 2
** What broke ** 
When trying to retrieve a quote from the API, an error was being thrown