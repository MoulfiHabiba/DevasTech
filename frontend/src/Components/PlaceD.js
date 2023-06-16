import React from "react";
import { useState } from "react";
//import Images from "../Images";
import myImage from "../Images/Casbah.jpg";
import myImage1 from "../Images/Casbah1.jpg";
import myImage2 from "../Images/Casbah2.jpg";
import myImage3 from "../Images/Casbah3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const imageFolder = "../Images";
const PlaceD = () => {
  const [authenticated, setAuthenticated] = useState(false);
  // Placeholder data
  const placePictures = [myImage, myImage1, myImage2, myImage3];
  const placeName = "Alger centre";
  const location = "City, Country";
  const openingHours = "9:00 AM - 6:00 PM";
  const description =
    "Nestled between the Mediterranean and the steep, forested hills that form its backdrop, Algiers is a city whose rich history can be seen in its architecture, from its Moorish mosques, Ottoman-style palaces and the Kasbah, a designated UNESCO World Heritage site, to its Berber fortifications, French colonial houses and modern boulevards. The city is home to numerous attractions, including the Great Mosque, the National Library, Martyrs Square, the Bardo Museum and multiple monuments and forts.";
  const globalReviews = [
    { id: 1, rating: 4.5, comment: "Great place to visit!" },
    { id: 2, rating: 5, comment: "Amazing experience!" },
    { id: 3, rating: 4.8, comment: "Highly recommended!" },
  ];
  const events = [
    {
      image: require("../Images/calendar.png"),
      title: "Event 1",
      date: "June 10, 2023",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      image: require("../Images/new-year.png"),
      title: "Event 2",
      date: "June 12, 2023",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: require("../Images/red-carpet.png"),
      title: "Event 3",
      date: "June 10, 2023",
      description: "Lorem ipsum dolor sit amet.",
    },
  ];
  const news = [
    {
      image: require("../Images/Casbah2.jpg"),
      title: "News 1",
      date: "June 10, 2023",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      image: require("../Images/Casbah3.jpg"),
      title: "News 2",
      date: "June 12, 2023",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: require("../Images/Casbah.jpg"),
      title: "News 1",
      date: "June 10, 2023",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      image: require("../Images/Casbah1.jpg"),
      title: "News 2",
      date: "June 12, 2023",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: require("../Images/ElMakam.png"),
      title: "News 2",
      date: "June 12, 2023",
      description: "Consectetur adipiscing elit.",
    },
  ];
  const reviews = [
    {
      name: "John Doe",
      rating: 4,
      title: "What a time!",
      date: "30-02-2022",
      comment: "Great place to visit!",
    },
    {
      name: "Jane Smith",
      rating: 5,
      title: "Super!",
      date: "10-02-2022",
      comment: "Highly recommended!",
    },
    // Add more reviews as needed
  ];

  const calculateRate = (reviews) => {
    let element = 0;
    for (let index = 0; index < reviews.length; index++) {
      element += reviews[index].rating;
    }
    return element / reviews.length;
  };

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleInputChange = (e) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddReview = () => {
    // Add newReview to the list of reviews
    // ... You can implement the logic to add the review to your data source or update the state
    console.log(newReview);
    setNewReview({ name: "", rating: 0, comment: "" });
  };
  //Events slider generator
  const [currentSlideR, setCurrentSlideR] = useState(0);
  const slidesToShow = 8;
  const handlePrevSlideR = () => {
    setCurrentSlideR((prevSlide) => prevSlide - 1);
  };

  const handleNextSlideR = () => {
    setCurrentSlideR((prevSlide) => prevSlide + 1);
  };

  const startSlideR = currentSlideR * slidesToShow;
  const endSlideR = startSlideR + slidesToShow;
  const displayReviews= reviews.slice(startSlideR, endSlideR);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };
  const averageRating = calculateAverageRating(reviews);
  const startSlide = currentSlide * slidesToShow;
  const endSlide = startSlide + slidesToShow;
  const displayEvents = events.slice(startSlide, endSlide);
  const avRate = calculateRate(reviews);

  return (
    <div>
      <div>
        <div>
          <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="relative ">
              <div className="overflow-hidden ">
                {/*the place full description section*/}
                <Carousel
                  showThumbs={false}
                  autoPlay={true}
                  interval={3000}
                  infiniteLoop={true}
                >
                  {placePictures.map((image, index) => (
                    <div key={index}>
                      <img
                        className='flex  object-fill   h-96 rounded-lg  shadow-xl dark:shadow-gray-800"'
                        src={image}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-0">
            {/* Left section */}
            <div className="col-span-1">
              <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h1 className="text-5xl  font-bold">
                  {placeName + "     "}{" "}
                  <button className="btn-add-favorites">
                    <FontAwesomeIcon icon={faHeart} className="text-red-500" />
                  </button>
                </h1>
                <p className="mt-0 p-4 text-gray-600 text-xl">
                  <i class="fa-solid fa-location-dot"> {location}</i>
                </p>
                <p className="mt-0 p-4 text-gray-600 text-xl">
                  <i class="fa-solid fa-clock">
                    {" "}
                    Opening hours: {openingHours}
                  </i>
                </p>
                <div class="flex items-center mt-0 p-4">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p class="ml-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {avRate}
                  </p>
                  <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <a
                    href="#"
                    class="text-xl font-medium text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    {reviews.length} reviews
                  </a>
                </div>

                <div className=" mt-0 p-4 bg-white rounded-4xl shadow-lg">
                  <p className="text-2xl text-gray-600 ">{description}</p>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="property-details-google-map mb-60 block p-5 bg-purple border border-purple-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <iframe
                  id="map"
                  src="https://maps.google.com/maps?q=36°46'23.7,3°03'30.7&hl=es&z=14&amp;output=embed"
                  width="100%"
                  height="470px"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </div>
          </div>

          {/*the Events related to that place  section*/}

          <div className="mt-0 p-0 relative">
            <h3 className="text-lg font-bold">
              {" "}
              <i class="fa-regular fa-newspaper fa-2xl"> Recommended events</i>
            </h3>{" "}
            <div className="flex space-x-4">
              {currentSlide !== 0 && (
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
                  onClick={handlePrevSlide}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}
              {displayEvents.map((events, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md p-5 max-w-xs shadow max-w-xs md:max-w-lg lg:max-w-xl"
                >
                  <img
                    src={events.image}
                    alt={events.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-lg font-bold">{events.title}</h4>
                  <p className="text-gray-600">{events.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              ))}
              {currentSlide + slidesToShow < events.length && (
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
                  onClick={handleNextSlide}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        {/*the news related to that place  section*/}
        <div className=" px-7 mt-0 relative " >
          <h3 className="text-lg font-bold">
            {" "}
            <i class="fa-regular fa-newspaper fa-2xl"> C</i>
          </h3>
          <div className="flex space-x-4  px-7" >
            {currentSlideR !== 0 && (
              <button
                className=" absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
                onClick={handlePrevSlideR}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {reviews.map((review, indexR) => (
              <div style={{ backgroundColor: "rgba(248, 248, 250, 0.9)" }}
                key={indexR}
                className="bg-white rounded-md px-7 p-5 max-w-xs shadow max-w-xs md:max-w-lg lg:max-w-xl border-y-4 border-indigo-500 "
              >
                      <div class="flex items-center mb-4 space-x-4">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="/docs/images/people/profile-picture-5.jpg"
                          alt=""
                        />
                        <div class="space-y-1 font-medium dark:text-white">
                          <h1 class="mb-2 text-gray-800 dark:text-gray-400 text-4xl">
                            {review.name}{" "}
                            <h1 class="mb-2 text-gray-500 dark:text-gray-400 text-2xl">
                              {review.title}
                            </h1>
                          </h1>
                        </div>
                      </div>

                      <div className="flex">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="h-4 w-4 text-yellow-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
                        <p>
                          {" "}
                          <time datetime="2017-03-03 19:00">{review.date}</time>
                        </p>
                      </footer>
                      <p class="mb-2 text-gray-800 dark:text-gray-400 text-xl">
                        {review.comment}
                      </p>
                      <aside>
                        <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                          <a
                            href="#"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            Helpful
                          </a>
                        </div>
                      </aside>
              </div>
            ))}
            {currentSlideR + slidesToShow < reviews.length && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
                onClick={handleNextSlideR}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/*the reviews + comments related to that place  section*/}
        <section className=" mt-4 p-6 bg-white rounded-4xl shadow-lg">
          <div className="mt-8">
            <div className=" mt-4 p-6 bg-white rounded-4xl shadow-lg">
              <h3 className="text-lg font-bold">
                {" "}
                <i class="fa-sharp fa-solid fa-comment"> Reviews</i>
              </h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white rounded-md p-4">
                    <article>
                      <div class="flex items-center mb-4 space-x-4">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="/docs/images/people/profile-picture-5.jpg"
                          alt=""
                        />
                        <div class="space-y-1 font-medium dark:text-white">
                          <p>
                            {review.name}{" "}
                            <h1 class="mb-2 text-gray-800 dark:text-gray-400 text-4xl">
                              {review.title}
                            </h1>
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="h-4 w-4 text-yellow-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
                        <p>
                          {" "}
                          <time datetime="2017-03-03 19:00">{review.date}</time>
                        </p>
                      </footer>
                      <p class="mb-2 text-gray-800 dark:text-gray-400 text-xl">
                        {review.comment}
                      </p>
                      <aside>
                        <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                          <a
                            href="#"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            Helpful
                          </a>
                        </div>
                      </aside>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            {/* Add Review Form */}
            {/*Works if q-authenticated*/}
            {authenticated && (
              <div className="mt-4 p-6 bg-white rounded-4xl shadow-lg">
                <h4 className="text-lg font-bold">Add Review</h4>
                <form className="space-y-2">
                  <div>
                    <label htmlFor="rating" className="block font-medium">
                      Rating
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      value={newReview.rating}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value={0}>Select Rating</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block font-medium">
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={newReview.comment}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddReview}
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none"
                  >
                    Add Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlaceD;
