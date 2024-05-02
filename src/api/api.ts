import * as ax from "axios";
export const BASE_URL = "https://abc-limo-server.watemtrade.com/";
const axios = ax.default.create({
  baseURL: BASE_URL,
});
const vehicles = [
  {
    "id": "cltkjmchx000dby1g2y2hj1ft",
    "name": "CHRYSLER 300 S",
    "model": "",
    "img": "https://s3.watemtrade.com/storage/uploads/nPOQkH4xrT5PiRf3ZckAbTcopNB1ERBp6v4l1d5e.png",
    "description": " A nice car with great service.",
    "speed": 1,
    "automatic": 1,
    "heatedSeat": 1,
    "gpsNavigation": 1,
    "pricePerDay": 2,
    "type": "SEDAN",
    "passengerSize": 3,
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:33:32.613Z",
    "updatedAt": "2024-04-14T09:00:24.630Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkji0om000bby1gfmral97v",
    "name": "CADILLAC ESCALADE",
    "model": "",
    "img": "https://s3.watemtrade.com/storage/uploads/ij0tRJcM7kN8Dh8p6FHhu5MFfnt9aIR2btn8WhHY.jpg",
    "description": "Discover the epitome of luxury and sophistication with our Cadillac Escalade fleet. Designed to elevate your travel experience, the Cadillac Escalade seamlessly combines elegant aesthetics with",
    "speed": 1,
    "automatic": 1,
    "heatedSeat": 1,
    "gpsNavigation": 1,
    "pricePerDay": 90,
    "type": "SUV",
    "passengerSize": 6,
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:30:10.678Z",
    "updatedAt": "2024-04-20T01:28:41.034Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkjfeat0009by1gi8jut8xc",
    "name": "FORD F550 BUS",
    "model": "",
    "img": "https://s3.watemtrade.com/storage/uploads/2BWll5fe6vXXiXzcnbdgEruDpQb1ClnrfbCruVSO.jpg",
    "description": "The Ford F550 Bus, a versatile marvel available at Seattle skyline limo. From party extravaganzas to corporate outings, this exceptional vehicle adapts seamlessly to any occasion. With its sp",
    "speed": 1,
    "automatic": 1,
    "heatedSeat": 1,
    "gpsNavigation": 1,
    "pricePerDay": 300,
    "type": "BUS",
    "passengerSize": 26,
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:28:08.357Z",
    "updatedAt": "2024-03-15T13:37:04.928Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkjduf60007by1g20wo983y",
    "name": "MERCEDES SPRINTER",
    "model": "",
    "img": "https://s3.watemtrade.com/storage/uploads/R5zx5jnMwkiHNgIaqpjDsFdWa4qoFBj9UuxJjlew.jpg",
    "description": "Elevate your group travel with the Mercedes Sprinter, proudly offered by Seattle skyline limo. Combining premium comfort with ample space, this versatile vehicle ensures a smooth and stylish ",
    "speed": 1,
    "automatic": 1,
    "heatedSeat": 1,
    "gpsNavigation": 1,
    "pricePerDay": 120,
    "type": "VAN",
    "passengerSize": 14,
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:26:55.938Z",
    "updatedAt": "2024-03-15T13:37:26.891Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkjb7060005by1gbu14mjpq",
    "name": "MERCEDES BENZ S CLASS",
    "model": "",
    "img": "https://s3.watemtrade.com/storage/uploads/k38EJBKxd44De7SN1QcMc1IKWNyojW1LnYX8OM4L.jpg",
    "description": "Discover unparalleled luxury with the Mercedes-Benz S-Class, now a part of [Your Limo Company Name]'s town car service. Glide through the city in style and sophistication, where the timeless ",
    "speed": 1,
    "automatic": 1,
    "heatedSeat": 1,
    "gpsNavigation": 1,
    "pricePerDay": 30,
    "type": "SEDAN",
    "passengerSize": 3,
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:24:52.278Z",
    "updatedAt": "2024-03-15T13:37:47.970Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkiordx0001by1glalz6uhg",
    "name": "Chevrolet Suburban",
    "model": "",
    "img": "https://s3.watemtrade.com/storage/uploads/rZsooGmG86ZkrORI1DpCfBrUn87LCX9tcklciMOm.png",
    "description": "The Chevy Suburban – the epitome of luxury and functionality. With a capacity of up to 7 passengers and storage for 8-10 small bags or 7-8 large suitcases, it seamlessly combines practicality.",
    "speed": 1,
    "automatic": 1,
    "heatedSeat": 1,
    "gpsNavigation": 1,
    "pricePerDay": 90,
    "type": "SUV",
    "passengerSize": 7,
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:07:25.605Z",
    "updatedAt": "2024-03-15T13:35:21.248Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  }
];

const services = [
  {
    "id": "cltzjln5a000bd51gc28kwoqf",
    "title": "Special Events",
    "img": "https://s3.watemtrade.com/storage/uploads/6xxGnbXJdSryL7oC7rQIJXp7Fq5MfcBQYzx89Fav.jpg",
    "content": "Experience luxury transportation like never before with ABC-Limo, serving the Seattle and Bellevue areas. Whether it's a wedding, prom night, social gathering, or high-profile business meeting, our limousine services ensure you travel in style, safety, and comfort. Our professional chauffeurs are dedicated to providing a seamless and elevated experience for you and your guests.\r\n\r\nChoose from our exquisite fleet of vehicles, including stretch limousines for larger groups or luxury cars/SUVs for more intimate occasions. Each vehicle is equipped with modern amenities such as charging stations, entertainment systems, and comfortable leather upholstery. Our commitment to cleanliness and maintenance guarantees a pristine environment for your journey.\r\n\r\nRest assured, our drivers are highly experienced with excellent knowledge of Seattle's traffic patterns and roads. Safety is paramount, as our vehicles undergo regular inspections and our drivers pass thorough background checks. Explore our glowing reviews and contact us today for a personalized quote for your next special event. Let ABC-Limo turn your transportation needs into unforgettable experiences.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-20T08:29:32.398Z",
    "updatedAt": "2024-03-20T08:32:41.498Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltzjbqxm0009d51gmv53auyn",
    "title": "Cruise Transportation",
    "img": "https://s3.watemtrade.com/storage/uploads/ftNsf0UhTGNwSl87Pd2clp37zdi0IcUicRXka4h4.jpg",
    "content": "Experience the epitome of luxury with Seattle's premier Cruise Limousine Service. Enjoy private, personalized transportation to and from the Seattle cruise ship terminals, ensuring a seamless journey from Seattle or Sea-Tac Airport to Pier #66 and Pier #91 Cruise Ship Terminal.\r\n\r\nOur team of expert chauffeurs is dedicated to providing top-tier limousine experiences throughout the Seattle metro area. Whether you're traveling solo or in a group, expect nothing less than first-class treatment with our professional and experienced drivers.\r\n\r\nIndulge in the ultimate pre-cruise experience with our exclusive Pre-Cruise Tour, allowing you to explore the beauty of Seattle in the comfort and opulence of your own private luxury transportation. Say goodbye to airport waits and hello to a delightful tour of Seattle's highlights before embarking on your cruise adventure.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-20T08:21:50.746Z",
    "updatedAt": "2024-03-20T08:21:50.746Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltyfuu2p0003d51g80pssfhw",
    "title": "Meeting & Event",
    "img": "https://s3.watemtrade.com/storage/uploads/Z5LCIKksi7nyyFnrwLGYuuvMwH45TQ1bqNrqsYoy.jpg",
    "content": "Seattle Black Limo provides unparalleled ground transportation services that take the hassle out of planning transportation for meetings and events. If you’re looking to add some sophistication to any particular event and arrive in style, our chauffeurs are committed to giving you a safe and high-quality limousine experience.\r\n\r\nSeattle Black limo is a premium transportation service. We pay attention to the details and strive to do everything we can to make your experience luxurious and enjoyable. No matter the occasion, you can expect a high level of customer service and to be highly satisfied with our premium fleet of luxury vehicles.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-19T13:56:56.641Z",
    "updatedAt": "2024-03-19T13:56:56.641Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltyfk38y0001d51g3boe1pvt",
    "title": "Corporate travels",
    "img": "https://s3.watemtrade.com/storage/uploads/13ebnMBtnarl8IlkCuPhcbaiiq3pTJivAfoRGXil.jpg",
    "content": "Professional Corporate transportation services are great when you have to host conferences, luncheons, or other corporate events in Seattle , Tacoma or Bellevue. You need reliable transportation to get your executives and employees to and from the meeting.? If you have dozens of employees to transport, you might not know which mode is most effective. At A&A Limousine & Bus Service, we specialize in corporate transportation services and bus rental so you can get your employees to any event in the Seattle area. We”ve been in business since 1994, so you can trust us to provide you with convenient services. Whether you need to get around Seattle, Bellevue, Tacoma or anywhere else in the surrounding areas, we”ll get you to your destination in a timely, fashionable manner.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-19T13:48:35.311Z",
    "updatedAt": "2024-03-19T13:48:35.311Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkk9vcn000rby1gk24z2wtn",
    "title": " City Tours",
    "img": "https://s3.watemtrade.com/storage/uploads/l8g1cv5E8ApWLeY4GVRWbhqCF1PRR3gvkApvi4j8.jpg",
    "content": "Since 1999, Seattle Limo Service has been the Pacific Northwest’s premier tour and company. We offer many sightseeing tours including Seattle space needle, Boeing, and Mt. Rainier Tours. Try one of our city tours to learn more about the history and people of Seattle! Make your experience extra special by journeying with a company who knows how to fulfill all of your expectations.\r\n\r\nThere are so many companies who are offering luxurious limo tours, but you need to find someone who specializes your occasion, or specializes in every occasion. This way you will not need to find a new limo service for every new occasion, around the neighborhood there are many big names that offer Seattle city tours and when you are travelling in a limousine every familiar road will seem different. You will enjoy each moment on this amazing ride, but above all these days will live in your memory forever and the night will become a memorable one.\r\n\r\nYou need to find someone that offers you the best service with a well groomed chauffeur driver who will take you anywhere you wish and wait for as long as you wish. You need to go through each and every aspect because this will be your on special night and you do not want anything to ruin it. Seattle Limo tours offer something for everyone, but you need to find the best company that has years of experience and an extensive range of Limousines. You do not want to be stuck in an old Limousine with an aggressive and grumpy driver; if you are spending money then you must get something extra. Find someone who gives you the complete royal treatment, everyone loves wine and this is why many companies also offer wine tours where they take you to some of the most exotic wine tasting places and you enjoy the entire day with a touch of elegance from Limousine. Many entrepreneurs and lawyers from big firms wish to outshine the others in their big meetings; this is where a special class of Limousine is introduced for all these titans of the industry.\r\n\r\nFor all the high school sweethearts there is a special range of Limousines where the love will indeed be in the air, for all the people who are visiting Seattle for the first time there is a special city tour where you will travel all the magnificent places in your luxurious ride. This experience of the city tour is guaranteed to bring you back for more, limo tours Seattle will completely change the way you used to travel. There are so many people who are always trying to find happiness; well nothing makes you happier than a tour around Seattle in the most amazing car.\r\n\r\nEveryone dreams to travel on the Limousine, if you have the same dream then why not make it come true? Next time when you think about doing something special for your loved ones, do consider the option of Limo services because everyone wants to live like a celebrity even it is for one day. Money cannot buy happiness but it can certainly give you a wonderful and unforgettable moment in Limousine which you will remember for the rest of your life.\r\n\r\nTo reserve your Seattle City Tour today give us a call today!  206-972-7000 or email us at info@abclimo.com.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:51:50.135Z",
    "updatedAt": "2024-03-19T13:14:19.034Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkk4cfu000nby1gqheeeyw7",
    "title": "Airport Transportation",
    "img": "https://s3.watemtrade.com/storage/uploads/z0OsgJ6DfDbSwq1lupdNlZtak9b4ORz7FCHNcsq8.jpg",
    "content": "There are many different occasions for using a limo service, and which service you use can make a big difference in the outcome of that occasion. That is why it is so important to put Seattle airport transportation into the hands of Seattle Limo Service because we know there’s a lot more to limo service than simply driving you to your destination.\r\n\r\nOne of the many services we offer at Seattle Limo Service is Seattle airport transportation. We understand how important it is that you arrive in plenty of time for your flight while receiving the high quality service you deserve and that people have come to expect from Seattle Limo Service.\r\n\r\nSeattle Limo Service will pick you up in a clean, well maintained, and late model limousine\r\nBelieve it or not, there are countless limo services that advertise the vehicles they use for Seattle airport Sea Tac Central Terminal 1transportation yet when they arrive on the scene, your transport is an older broken down less than acceptable limousine. This will never be your experience when you use Seattle Limo Service for your Seattle airport transportation.\r\n\r\nYou might save a few dollars by choosing a cut rate limousine service for your Seattle airport transportation needs, but cost won’t be the only thing you are cutting. At Seattle Limo Service, clients can rest easy knowing they will ride in classy style and comfort. Our Seattle airport transportation service doesn’t just stop with the limousine used to get there, either.\r\n\r\nSeattle Limo Service has professional drivers and limos with all the extras\r\nAt Seattle Limo Service, you can always expect attentive, courteous, experienced drivers. We provide Wi-Fi in all of our limousines, which offers a great deal of convenience for the busy business traveler who wants to maximize their time even when in the road.\r\n\r\nAnother standard in all of our cars is the iPad, and our clients have come to greatly appreciate this feature. While en route for Seattle airport transportation, clients can track their flight, make future flight reservations, take notes, and perform many other tasks.\r\n\r\nWhen it comes to your comfort and safety, Seattle Limo Service takes extra care that you are getting only the very best\r\nAt Seattle Limo Service, we take great care in keeping our cars well maintained and at the extraordinary standard of luxury and comfort clients have come to expect from us. Your safety, comfort, and care are never compromised and our drivers all undergo drug testing and full background research before they can join our team.\r\n\r\nWhen you need Seattle airport transportation, call the limo service committed to delivering you the best transportation experience possible in the Seattle area. Remember, also, that Seattle Limo Service also provides many other transport services including proms, weddings, wine tours, corporate excursions, city tours, night out, cruise, and more. Seattle Limo Service is your premier custom service limousine provider in the Seattle area; don’t settle for anything less.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:47:32.346Z",
    "updatedAt": "2024-03-19T13:54:49.055Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  }
];

const blogs = [
  {
    "id": "cltkjtrp7000lby1g1k98e17l",
    "title": "Navigating the Roads: A Comprehensive Guide to Vehicles",
    "img": "https://s3.watemtrade.com/storage/uploads/OGO4CY0HrxbXAap5uLZ1Ypz4Ka06bLEPfRZdVEcN.jpg",
    "content": "Introduction:\r\nVehicles have revolutionized the way we live, work, and explore the world. From the invention of the wheel to the latest advancements in electric and autonomous vehicles, our relationship with transportation has evolved dramatically over time. In this blog, we'll take you on a journey through the fascinating world of vehicles, exploring their history, types, technological innovations, and their impact on society.\r\n\r\n1. The Evolution of Transportation: From Wheels to Hyperloops\r\n\r\nThe story of vehicles begins with the invention of the wheel, a milestone that forever changed the way humans moved goods and themselves. Explore the historical journey of transportation, from ancient chariots to modern high-speed trains and innovative concepts like Elon Musk's Hyperloop.\r\n\r\n2. Types of Vehicles: Beyond Four Wheels\r\n\r\nVehicles come in all shapes and sizes, tailored for various purposes. Discover the diverse range of vehicles, including cars, trucks, motorcycles, bicycles, boats, ships, airplanes, helicopters, and even space shuttles. Each type of vehicle serves a unique role in our daily lives and in different industries.\r\n\r\n3. Fueling the Future: Conventional and Alternative Propulsion\r\n\r\nTraditional internal combustion engines have been the norm for decades, but the world is shifting towards sustainable alternatives. Dive into the differences between gasoline, diesel, hybrid, electric, and hydrogen-powered vehicles. Learn about the benefits, challenges, and environmental impact of each propulsion method.\r\n\r\n4. Driving into Tomorrow: Autonomous and Connected Vehicles\r\n\r\nThe rise of artificial intelligence and advanced sensors has paved the way for self-driving vehicles. Explore the concept of autonomous cars and their potential to reshape urban mobility, reduce accidents, and enhance convenience. Additionally, discover how vehicles are becoming interconnected through the Internet of Things (IoT) for safer and more efficient transportation.\r\n\r\n5. Electrifying the Roads: The Electric Vehicle Revolution\r\n\r\nElectric vehicles (EVs) are at the forefront of the automotive industry's transformation. Uncover the advantages of EVs, including reduced emissions, lower operating costs, and instant torque. Delve into the advancements in battery technology, charging infrastructure, and the growing EV market.\r\n\r\n6. Impact on Society: Environmental, Economic, and Social Factors\r\n\r\nVehicles have a profound impact on society, affecting the environment, economies, and our way of life. Examine the environmental implications of vehicle emissions, the economic significance of the automotive industry, and the social implications of urban planning and transportation.\r\n\r\n7. Innovations on Wheels: From Safety Features to Entertainment\r\n\r\nModern vehicles are equipped with a range of cutting-edge features designed to enhance safety, comfort, and entertainment. Learn about adaptive cruise control, automatic emergency braking, infotainment systems, and other technological marvels that make driving safer and more enjoyable.\r\n\r\n8. The Challenges Ahead: Urbanization and Sustainability\r\n\r\nAs the global population continues to grow and urbanization accelerates, cities are facing challenges related to traffic congestion, pollution, and limited parking spaces. Explore how vehicle-sharing services, smart city initiatives, and sustainable transportation options are being developed to address these challenges.\r\n\r\n9. The Future of Vehicles: What Lies Ahead\r\n\r\nAs technology evolves, so does our relationship with vehicles. Peer into the crystal ball to speculate on the future of transportation, including advancements in AI-driven vehicles, flying cars, sustainable energy solutions, and the potential for reducing our carbon footprint through innovative transportation alternatives.\r\n\r\nConclusion:\r\n\r\nVehicles are more than just machines; they are a reflection of human ingenuity, creativity, and the desire to explore the world. From the early days of horse-drawn carts to the futuristic visions of autonomous and electric vehicles, the evolution of transportation continues to shape our lives and our planet. As we embrace new technologies and strive for sustainability, the road ahead is full of exciting possibilities that will redefine the way we move, connect, and experience the world around us.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:39:18.908Z",
    "updatedAt": "2024-03-15T13:53:11.608Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkjsiyv000jby1gyz2aw1uk",
    "title": " The Art of Car Maintenance: A Guide to Keeping Your Vehicle in Top Shape",
    "img": "https://s3.watemtrade.com/storage/uploads/KqfmFHQsQaUnGI140xbwJmtmH0mSy4P5F80gtLeH.jpg",
    "content": "Owning a vehicle comes with the responsibility of proper maintenance to ensure its longevity, performance, and safety. Car maintenance is not only about keeping your vehicle looking good; it's about ensuring that it runs smoothly and efficiently for years to come. In this blog, we'll explore the essential aspects of car maintenance that every vehicle owner should be familiar with.\r\n\r\n1. The Importance of Regular Maintenance\r\n\r\nRegular maintenance is the key to preventing costly repairs and maintaining the value of your vehicle. Learn why adhering to a consistent maintenance schedule is crucial for avoiding unexpected breakdowns, extending your car's lifespan, and ensuring a safer driving experience.\r\n\r\n2. Understanding Your Vehicle's Owner's Manual\r\n\r\nYour vehicle's owner's manual is a valuable resource that provides detailed information about maintenance schedules, recommended fluids, tire pressure, and more. Discover how to interpret and utilize this manual to effectively care for your vehicle.\r\n\r\n3. Oil Changes: The Lifeblood of Your Engine\r\n\r\nOil changes are one of the most fundamental aspects of car maintenance. Understand the importance of clean oil in preserving engine health, the recommended intervals for oil changes, and the types of oil that best suit your vehicle.\r\n\r\n4. Tire Care and Maintenance\r\n\r\nTires play a critical role in your vehicle's performance, safety, and fuel efficiency. Learn about proper tire maintenance, including checking tire pressure, rotating tires, and performing visual inspections to ensure optimal traction and longevity.\r\n\r\n5. Brake System: Ensuring Safe Stops\r\n\r\nBrake maintenance is essential for your safety and that of others on the road. Explore the signs of worn-out brake pads, rotor issues, and the importance of brake fluid changes to maintain responsive braking.\r\n\r\n6. Fluid Checks and Replacements\r\n\r\nYour vehicle relies on various fluids to operate efficiently. From coolant to transmission fluid, power steering fluid, and windshield washer fluid, understand the roles of these fluids and the importance of regular checks and replacements.\r\n\r\n7. Air Filters and Cabin Air Filters\r\n\r\nAir filters keep the air entering your engine and cabin clean. Discover how to check and replace air filters to maintain engine performance and ensure the air inside your vehicle is free from contaminants.\r\n\r\n8. Battery Health and Electrical System\r\n\r\nA well-functioning battery and electrical system are vital for starting your vehicle and powering various components. Learn how to monitor battery health, identify signs of battery issues, and properly care for the electrical system.\r\n\r\n9. Exterior and Interior Care\r\n\r\nCar maintenance isn't just about what's under the hood. Discover tips for keeping your vehicle's exterior clean, protecting its paint, and maintaining a clutter-free and comfortable interior.\r\n\r\n10. DIY vs. Professional Maintenance\r\n\r\nWhile some maintenance tasks can be tackled by DIY enthusiasts, others require the expertise of professionals. Understand the tasks you can handle yourself and when it's best to seek the services of a qualified mechanic.\r\n\r\n11. Seasonal Maintenance\r\n\r\nDifferent seasons bring specific challenges for your vehicle. Learn about seasonal maintenance practices, including preparing for winter driving conditions, summer heat, and the importance of checking your vehicle before embarking on long road trips.\r\n\r\nConclusion:\r\n\r\nProper car maintenance is not just a task; it's a commitment to ensuring the safety, performance, and longevity of your vehicle. By following a well-defined maintenance schedule, understanding your vehicle's needs, and taking proactive measures, you can enjoy a smoother driving experience and avoid unexpected breakdowns. Remember that a well-maintained vehicle not only serves you better but also contributes to road safety and environmental responsibility. So, roll up your sleeves, get familiar with your vehicle, and embark on a journey of caring for your prized possession like a true car enthusiast.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:38:20.936Z",
    "updatedAt": "2024-03-15T13:55:20.711Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkjrja6000hby1gos1i4zus",
    "title": "Navigating the Future: Trends Shaping the Automotive Industry",
    "img": "https://s3.watemtrade.com/storage/uploads/4FCINImoChVyMRTHxXLwkNNsmru65PgESngOw1UM.jpg",
    "content": "Introduction:\r\n\r\nThe automotive industry, a cornerstone of modern society, is in the midst of a remarkable transformation. Technological innovations, changing consumer preferences, environmental concerns, and the pursuit of sustainability are reshaping the way we think about vehicles. In this blog, we'll delve into the trends that are propelling the automotive industry forward, from electric mobility to connectivity, autonomy, and beyond.\r\n\r\n1. Electric Revolution: The Rise of Electric Vehicles (EVs)\r\n\r\nThe automotive landscape is witnessing a seismic shift towards electric mobility. Explore the reasons behind the surge in electric vehicle adoption, including environmental benefits, advancements in battery technology, government incentives, and the growing network of charging infrastructure. Learn how traditional automakers and new players are racing to develop and market EVs that are both practical and appealing.\r\n\r\n2. Autonomy Takes the Wheel: Self-Driving Vehicles\r\n\r\nThe promise of self-driving cars is no longer confined to science fiction. Autonomous vehicles are a reality that promises safer roads, reduced traffic congestion, and enhanced mobility for individuals with limited mobility. Dive into the levels of autonomy, the technology behind self-driving cars, regulatory challenges, and the potential societal impact of a world with driverless vehicles.\r\n\r\n3. Connectivity and the Internet of Things (IoT)\r\n\r\nVehicles are becoming more connected than ever before. Discover how IoT technology is transforming vehicles into smart, data-driven machines. Explore features like in-car infotainment, real-time navigation, vehicle-to-vehicle communication, and the implications of connected vehicles on convenience, safety, and data security.\r\n\r\n4. Mobility as a Service (MaaS): Redefining Transportation\r\n\r\nThe concept of Mobility as a Service (MaaS) is changing the way we view transportation. Instead of owning vehicles, people are opting for seamless access to a range of transportation options, from ridesharing and public transit to electric scooters and bikes. Learn how MaaS is shaping urban mobility, reducing congestion, and addressing the evolving needs of modern commuters.\r\n\r\n5. Sustainability and Green Initiatives\r\n\r\nThe automotive industry is under increasing pressure to reduce its carbon footprint. Explore the industry's commitment to sustainability, from eco-friendly manufacturing processes to electric and hydrogen-powered vehicles. Learn about carbon-neutral initiatives, recycling efforts, and how automakers are aligning their goals with global sustainability targets.\r\n\r\n6. Challenges and Ethical Considerations\r\n\r\nAs technology accelerates, ethical considerations and challenges arise. Delve into discussions about data privacy, liability in autonomous vehicles, job displacement in the industry due to automation, and the balance between technological progress and human safety.\r\n\r\n7. Innovations in Materials and Design\r\n\r\nBeyond the powertrain, the automotive industry is pushing the boundaries of materials science and design aesthetics. Discover how lightweight materials like carbon fiber and innovative designs are enhancing vehicle efficiency, safety, and aesthetics while responding to consumer demands for style and sustainability.\r\n\r\n8. Cultural Shifts and Consumer Expectations\r\n\r\nConsumers' expectations are evolving rapidly. Explore how changing attitudes toward car ownership, urbanization, and sustainability are influencing the design, features, and services offered by automakers. Learn about the customization options, shared ownership models, and the importance of customer experience in the automotive ecosystem.\r\n\r\n9. Collaboration and Ecosystem Building\r\n\r\nIn the age of innovation, collaboration is key. Witness the partnerships between traditional automakers, tech giants, startups, and research institutions. Explore how these collaborations are accelerating the development of electric and autonomous vehicles, as well as shaping the transportation landscape of the future.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:37:34.686Z",
    "updatedAt": "2024-03-15T13:55:52.606Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  },
  {
    "id": "cltkjqfav000fby1gdcb8xnqm",
    "title": "The Electric Future: Decoding the Evolution of Electric Vehicles",
    "img": "https://s3.watemtrade.com/storage/uploads/OrkPP16Hcg0jK7dGGRQKq7uI2zQams9o9lXKZecB.png",
    "content": "Electric vehicles (EVs) have emerged as a driving force in the automotive industry, promising a cleaner, more sustainable future for transportation. With zero tailpipe emissions and advancements in battery technology, EVs are redefining the way we think about cars. In this blog, we'll delve into the evolution of electric vehicles, exploring their history, benefits, challenges, and the exciting road ahead.\r\n\r\n1. Electric Vehicles Through Time: A Historical Overview\r\n\r\nThe concept of electric vehicles dates back to the 19th century, but their rise was eclipsed by gasoline-powered cars. Uncover the early history of EVs, from the first electric carriages to pioneering electric vehicles in the 20th century and their resurgence in recent years.\r\n\r\n2. The Inner Workings of Electric Vehicles\r\n\r\nUnderstanding the heart of electric vehicles—batteries—is crucial to appreciating their potential. Dive into the anatomy of EVs, from lithium-ion battery packs and electric motors to regenerative braking and onboard charging systems.\r\n\r\n3. Benefits Beyond Emissions: The Advantages of Electric Mobility\r\n\r\nElectric vehicles offer more than just reduced emissions; they promise a range of benefits. Explore the advantages of EVs, including lower operating costs, quieter operation, instant torque, and their role in reducing air pollution and dependence on fossil fuels.\r\n\r\n4. Charging Infrastructure: The Backbone of Electric Mobility\r\n\r\nCharging infrastructure is a key consideration for EV adoption. Examine the different types of charging, from home charging solutions to public charging networks, and understand the challenges and innovations in building a comprehensive charging ecosystem.\r\n\r\n5. Range Anxiety No More: Battery Technology Advancements\r\n\r\nRange anxiety, the fear of running out of battery power, has been a concern for EV owners. Discover how battery technology has advanced, leading to longer ranges, faster charging times, and improved overall battery performance.\r\n\r\n6. Beyond Cars: Electric Mobility in Diverse Sectors\r\n\r\nElectric vehicles are making inroads beyond passenger cars. Explore the application of electric mobility in commercial fleets, public transportation, and even electric aviation. Learn about the electrification of buses, trucks, and other heavy-duty vehicles.\r\n\r\n7. The Transition to Electric: Challenges and Considerations\r\n\r\nWhile the electric revolution is promising, it's not without challenges. Investigate topics such as the environmental impact of battery production, recycling of old batteries, and the energy sources powering electric grids.\r\n\r\n8. EVs and Renewable Energy: A Symbiotic Relationship\r\n\r\nThe growth of electric vehicles aligns with the transition to renewable energy sources. Discover the synergy between EVs and solar panels, wind turbines, and grid innovations that contribute to a greener, more sustainable energy landscape.\r\n\r\n9. The Road Ahead: Electric Vehicles in the Future\r\n\r\nThe future of electric vehicles is bright and dynamic. Explore trends like electrified autonomous vehicles, advancements in solid-state batteries, and the potential for vehicle-to-grid (V2G) technology that allows EVs to contribute to the stability of the electric grid.\r\n\r\nConclusion:\r\n\r\nElectric vehicles are steering the automotive industry toward a more sustainable and environmentally friendly future. As battery technology continues to evolve, charging infrastructure expands, and consumer preferences shift, the electric vehicle landscape is undergoing a transformation that will reshape transportation as we know it. With their promise of reduced emissions, improved efficiency, and innovative technologies, electric vehicles are leading the charge toward a cleaner and more electrifying future on the roads.",
    "userId": "cltk2s1f50000u54ge59pv40g",
    "createdAt": "2024-03-09T20:36:42.872Z",
    "updatedAt": "2024-03-15T13:56:36.020Z",
    "user": {
      "id": "cltk2s1f50000u54ge59pv40g",
      "firstName": "Andualem",
      "lastName": "Andualem",
      "img": "https://s3.watemtrade.com/storage/uploads/zvibi4dTiEodXl47JJcb7uAh5iHGaR5HAPWu2FLh.jpg",
      "email": "abclimo2000@gmail.com",
      "password": "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
      "createdAt": "2024-03-09T12:42:04.722Z",
      "updatedAt": "2024-03-15T13:57:20.597Z"
    }
  }
];
export async function getVehicles(page = 1, limit = 10) {
  const data = vehicles;
  // const { data } = await axios.get(`/vehicle?page=${page}&limit=${limit}`);
  return data;
}

export async function getVehicle(id: any) {
  const data = vehicles.find((vehicle) => vehicle.id === id);
  // const { data } = await axios.get(`/vehicle/${id}`);
  return data;
}
export async function getBlogs(page = 1, limit = 3) {
  const data = blogs;
  // const { data } = await axios.get(`/blog?page=${page}&limit=${limit} `);
  return data;
}
export async function getServices(page = 1, limit = 3) {
  const data = services;
  // const { data } = await axios.get(`/services?page=${page}&limit=${limit} `);
  return data;
}

export async function getBlog(id: any) {
  const data = blogs.find((blog) => blog.id === id);
  // const { data } = await axios.get(`/blogs/${id}`);
  return data;
}
export async function getService(id: any) {
  const data = services.find((service) => service.id === id);
  // const { data } = await axios.get(`/services/${id}`);
  return data;
}

export async function contactFormMail(body: any) {
  const { data } = await axios.post(`/mail`, body);
  return data;
}

export async function postReservation(body: any) {
  const { data } = await axios.post(`/book`, body);
  return data;
}
export async function postComment(body: any) {
  const { data } = await axios.post(`/comment`, body);
  return data;
}
export async function getComments(blogId: any, page = 1, limit = 5) {
  const { data } = await axios.get(
    `/comment/${blogId}?page=${page}&limit=${limit} `
  );
  return data;
}
