import React, { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Features from "../components/Features";
import { featuresData } from "../featuresData";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import axios from "axios";

const HomePage = () => {
  const [time, setTime] = useState({
    day: "",
    hours: "",
    minutes: "",
    ampm: "",
    seconds: "",
    currDate: "",
    currMonth: "",
    curYear: "",
  });
  const [weather, setWeather] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  // getting current city
  const getcurrentCity = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lan = position.coords.longitude;

      try {
        const resp = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lan}&format=json&apiKey=${
            import.meta.env.VITE_GEO_API_KEY
          }`
        );
        const place =
          resp.data?.results[0]?.city ||
          resp.data?.results[0]?.town ||
          resp.data?.results[0]?.village ||
          resp.data?.results[0]?.state;
        setCurrentCity(place || "delhi");
      } catch (error) {
        console.log("error white getting location", error);
      }
    });
  };

  const getWeather = async () => {
    if(!currentCity) return;
    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API
        }&q=${currentCity}`
      );
      setWeather(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcurrentCity();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let hours = date.getHours();
      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12 || 12;

      setTime({
        day: days[date.getDay()],
        hours,
        minutes: date.getMinutes().toString().padStart(2, "0"),
        ampm,
        seconds: date.getSeconds().toString().padStart(2, "0"),
        currDate: date.getDate(),
        currMonth: months[date.getMonth()],
        curYear: date.getFullYear(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getWeather();
  }, [currentCity]);

  return (
    <div className="max-w-7xl  mx-auto bg-gray-50 dark:bg-gray-900 rounded-xl">
      {/* top section */}
      <div className="w-full flex flex-col-reverse py-5 lg:flex-row justify-center">
        {/* left part */}
        <div className="w-full lg:w-1/2 bg-gray-50 flex justify-center items-start py-10 lg:py-20 dark:bg-gray-900">
          {/* container */}
          <div className="relative max-w-xl w-full bg-white rounded-2xl px-8 py-6 shadow-xl flex flex-col md:flex-row items-center gap-6 dark:bg-gray-300 ">
            {/* text section */}
            <div className="md:w-1/2 flex flex-col justify-center gap-4">
              <h1 className="text-3xl font-bold text-gray-800">Hi, User! 👋</h1>

              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                What are we doing today? Let’s explore the new features of our
                application.
              </p>

              {/* feature list */}
              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  { color: "border-blue-400", label: "Task list" },
                  { color: "border-yellow-400", label: "Day Planner" },
                  { color: "border-pink-400", label: "Pomodomo Timer" },
                  { color: "border-gray-400", label: "Daily Goals" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaChevronRight
                      size={18}
                      className={`border ${item.color} rounded-full p-1 text-gray-100 `}
                    />
                    <span className="text-xs font-semibold text-gray-600">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* image section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./bear.png"
                alt="Bear Illustration"
                className="w-55 md:w-56 object-contain"
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full lg:w-2/5 relative min-h-11 md:min-h-14">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="w-[90%] sm:w-md m-1 backdrop-blur-md absolute top-4 left-1/2 -translate-x-1/2 rounded-xl p-3 lg:mt-20">
            <div className="flex justify-between items-center p-2">
              <div className="flex justify-center gap-1 items-center">
                <MdOutlineAddLocationAlt className="dark:text-gray-900 " />
                <span className="flex justify-center items-center gap-3 dark:text-gray-900">
                  <p className="text-xs font-bold">{weather?.location?.name}{" "}</p>
                </span>
              </div>
                <span className="text-xs font-bold dark:text-gray-900">
                    {" "}
                    {time.currDate} {time.currMonth} {time.curYear}
                  </span>{" "}
            </div>
            {/* temprature */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-6 dark:text-gray-900">
              {weather?.current?.temp_c} <sup>o</sup>C{" "}
              <span className="text-xs">
                {time.hours}:{time.minutes}:{time.seconds}.{time.ampm}{" "}
                {time.day}
              </span>{" "}
            </h1>
            <p className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-900">
              Cloudy
            </p>

            <div className="flex flex-row sm:flex-row justify-center items-center gap-6 py-5">
              <div className="flex flex-col items-center gap-1">
                <p className="text-sm font-bold tracking-tighter dark:text-gray-900">
                  Humidity
                </p>
                <span className="text-sm font-bold dark:text-gray-900">
                  {weather?.current?.humidity}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-sm font-bold tracking-tighter dark:text-gray-900">
                  Wind
                </p>
                <span className="text-sm font-bold dark:text-gray-900 ">
                  {weather?.current?.wind_kph} km/h
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-sm font-bold tracking-tighter dark:text-gray-900">
                  Feels Like
                </p>
                <span className="text-sm font-bold dark:text-gray-900">
                  {weather?.current?.feelslike_c} <sup>o</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* botton list of features */}

      <div className="w-full flex flex-wrap justify-center lg:justify-start items-center gap-5 p-5 lg:p-5">
        {featuresData?.map((feature, indx) => (
          <Features feature={feature} indx={indx} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
