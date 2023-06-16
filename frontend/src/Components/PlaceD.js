import React, { useEffect } from "react";
import { useState } from "react";
//import Images from "../Images";
import myImage from "../Images/pic1.jpg";
import myImage1 from "../Images/pic2.jpg";
import myImage2 from "../Images/pic3.jpg";
import myImage3 from "../Images/pic4.jpg";
import myImage4 from "../Images/pic5.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarRating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBus,
  faCalendarDay,
  faClock,
  faCommentAlt,
  faCommentSlash,
  faCommenting,
  faHeart,
  faLocationDot,
  faLongArrowAltDown,
  faNewspaper,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const imageFolder = "../Images";
const PlaceDetails = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isPopupNOpen, setIsPopupNOpen] = useState(false);
  const [selectednews, setSelectednews] = useState(null);

      const [titleC,setTitleC] = useState("");
      const [comment,setComment] = useState("");
      const [dateC,setDateC] = useState({});
      const [rating,setRating] = useState(1);

      function ecrireComment(e) {
        e.preventDefault();
      }
  const openPopupN = (news) => {
    setSelectednews(news);
    setIsPopupNOpen(true);
  };

  const closePopupN = () => {
    setIsPopupNOpen(false);
  };

  const openPopup = (event) => {
    setSelectedEvent(event);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const [authenticated, setAuthenticated] = useState(false);
  // Placeholder data
  const placePictures = [
    require("../Images/pic7.jpg"),
    require("../Images/pic8.jpg"),
    require("../Images/pic9.jpg"),
    require("../Images/pic10.jpg"),
    require("../Images/pic11.jpg"),
  ];
  const placeName = "La Rue Didouche Mourad";
  const location = "Alger, Algerie";
  const openingHours = "08h à 23h ";
  const Transport = "Bus, Metro, Taxi ";
  const description =
    "Une artère importante d'Alger, en Algérie. Elle porte le nom de Didouche Mourad, un héros de la guerre d'indépendance. Cette rue est connue pour son activité commerciale, sa beauté architecturale et son lien symbolique avec l'histoire de l'Algérie. Elle abrite des commerces, des restaurants, des cafés, des institutions gouvernementales et des monuments historiques. La rue Didouche Mourad est un lieu dynamique et animé, fréquenté par les habitants et les visiteurs d'Alger. Elle représente à la fois l'héritage culturel du pays et sa modernité.";
  
  const events = [
    {
      image: myImage,
      title: "Expositions d'art ",
      date: "June 10, 2023",
      descriptionS:
        "Ce festival met en avant les arts de la rue tels que le théâtre de rue, la danse, la musique et les performances artistiques. ",
      descriptionL:
        " Des expositions d'art sont régulièrement organisées dans les galeries et les espaces culturels de la rue Didouche Mourad. Ces expositions mettent en valeur les talents artistiques locaux et présentent diverses formes d'art, allant de la peinture à la sculpture en passant par la photographie. ",
    },
    {
      image: myImage1,
      title: "Journée du Patrimoine",
      date: "Mai 01, 2023",
      descriptionS:
        "La ville d'Alger organise une journée dédiée à la mise en valeur de son patrimoine culturel. Des animations, des expositions et des spectacles ",
      descriptionL:
        "La ville d'Alger organise une journée dédiée à la mise en valeur de son patrimoine culturel. Des animations, des expositions et des spectacles sont organisés dans les rues, offrant aux visiteurs l'occasion de découvrir la richesse historique de la ville.",
    },
    {
      image: myImage2,
      title: "Festival de la Calligraphie ",
      date: "Juin 10, 2023",
      descriptionS:
        "Cet événement met en avant l'art de la calligraphie arabe, offrant aux passants la possibilité de découvrir cette forme d'art traditionnelle.",
      descriptionL:
        "Cet événement met en avant l'art de la calligraphie arabe. Des artistes calligraphes exposent leur travail dans lq rue, offrant aux passants la possibilité de découvrir cette forme d'art traditionnelle.",
    },
    {
      image: myImage3,
      title: "Célébration de la journée d'enfant",
      date: "Juin 01, 2023",
      descriptionS:
        "Des activités ludiques, des spectacles, des jeux et des expositions sont organisés dans les rues pour divertir les enfants. .",
      descriptionL:
        "La célébration de la journée de l'enfant en Algérie est un événement annuel qui a lieu le 1er juin. Des activités ludiques, des spectacles, des jeux et des expositions sont organisés dans les rues pour divertir les enfants. Des défilés colorés, des spectacles de marionnettes, des jeux interactifs et la distribution de cadeaux et de friandises font partie des événements couramment proposés. Ces célébrations visent à promouvoir le bien-être des enfants et à sensibiliser à leurs droits.",
    },
    {
      image: myImage4,
      title: "Festival de la Musique ",
      date: "juillet 03, 2023",
      descriptionS:
        "Cet événement célèbre la musique de rue en Algérie. Des musiciens de différents genres musicaux se produisent dans les rues d'Alger, créant une atmosphère animée et festive.",
      descriptionL:
        "Cet événement célèbre la musique de rue en Algérie. Des musiciens de différents genres musicaux se produisent dans les rues d'Alger, créant une atmosphère animée et festive.",
    },
  ];
  const news = [
    {
      image: require("../Images/Casbah2.jpg"),
      title: "Initiatives environnementales",
      date: "June 10, 2023",
      descriptionS:
        "le théâtre d'initiatives environnementales. Des campagnes, des actions de nettoyage des espaces publics, des plantations d'arbres et d'autres projets écologiques ",
      descriptionL:
        " Les rues algériennes sont également le théâtre d'initiatives environnementales. Des campagnes de sensibilisation à la protection de l'environnement, des actions de nettoyage des espaces publics, des plantations d'arbres et d'autres projets écologiques sont menés pour promouvoir la durabilité et la préservation de l'environnement.",
    },
    {
      image: require("../Images/Casbah3.jpg"),
      title: "Événements culturels et festivals",
      date: "June 12, 2023",
      descriptionS:
        " Des festivals de musique, de danse, de théâtre, d'arts visuels et d'autres formes d'expression artistique sont organisés dans diverses villes du pays. ",
      descriptionL:
        " Des festivals de musique, de danse, de théâtre, d'arts visuels et d'autres formes d'expression artistique sont organisés dans diverses villes du pays. Ces événements offrent aux habitants l'occasion de célébrer la diversité culturelle et de profiter d'activités divertissantes.",
    },
    {
      image: require("../Images/pic6.jpg"),
      title: "Développement des infrastructures urbaines",
      date: "June 10, 2023",
      descriptionS:
        " Des travaux de rénovation des routes, de construction de nouvelles artères, de modernisation des transports en commun et d'amélioration des espaces publics sont en cours ",
      descriptionL:
        " Des travaux de rénovation des routes, de construction de nouvelles artères, de modernisation des transports en commun et d'amélioration des espaces publics sont en cours dans différentes villes du pays. Ces initiatives visent à améliorer la qualité de vie des citoyens et à favoriser le développement urbain.",
    },
    {
      image: require("../Images/Casbah1.jpg"),
      title: "Initiatives citoyennes",
      date: "June 12, 2023",
      descriptionS:
        "Des groupes de bénévoles se mobilisent pour venir en aide aux personnes démunies, distribuer de la nourriture et des vêtements...",
      descriptionL:
        "Des groupes de bénévoles se mobilisent pour venir en aide aux personnes démunies, distribuer de la nourriture et des vêtements, et soutenir les plus vulnérables de la société. Ces actions solidaires se déroulent souvent dans les rues et apportent un soutien précieux à ceux qui en ont besoin..",
    },
  ];
  const reviews = [
    {
      name: "John Doe",
      rating: 4,
      date: "03-05-2022",
      img: require("../Images/man1.png"),
      title: "super!",
      comment:
        "De jour comme de nuit, elle regorge d'activités et de divertissements. Les artistes de rue créent une ambiance festive et joyeuse, et les musiciens locaux ajoutent une bande-son envoûtante. Les nombreux restaurants offrent une variété de cuisines, des plats traditionnels aux spécialités internationales.",
    },
    {
      name: "Jane Smith",
      rating: 5,
      img: require("../Images/woman1.png"),
      title: "What a time!",
      date: "01-02-2023",
      comment:
        "Les vitrines sont magnifiquement décorées, invitant les passants à entrer et à explorer. De plus, les cafés et les terrasses sont parfaits pour faire une pause et se ressourcer tout en admirant la beauté de l'architecture environnante.",
    },
    {
      name: "Maxine theo",
      rating: 3.5,
      img: require("../Images/woman.png"),
      title: "Pretty cool",
      date: "15-10-2022",
      comment:
        " Les façades colorées des bâtiments historiques captent immédiatement votre regard, créant une atmosphère joyeuse et animée. Les trottoirs sont remplis de boutiques de souvenirs, de restaurants et de cafés, offrant une multitude d'options pour se détendre et se restaurer. Les artistes de rue ajoutent une touche de magie avec leurs performances envoûtantes. ",
    },
    {
      name: "Jack austin",
      rating: 5,
      img: require("../Images/man.png"),
      title: "great place",
      date: "17-04-2023",
      comment:
        "C'est un endroit où l'on peut se perdre pendant des heures, en découvrant de nouvelles surprises à chaque coin de rue.",
    },
    // Add more reviews as needed
  ];
  const [currentSlideR, setCurrentSlideR] = useState(0);
  const slidesToShow = 6;
  const handlePrevSlideR = () => {
    setCurrentSlideR((prevSlide) => prevSlide - 1);
  };

  const handleNextSlideR = () => {
    setCurrentSlideR((prevSlide) => prevSlide + 1);
  };

  const startSlideR = currentSlideR * slidesToShow;
  const endSlideR = startSlideR + slidesToShow;
  const displayReviews = reviews.slice(startSlideR, endSlideR);

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
  //used for maps
  //not this
  const long = "3°03'30.7";
  const latit = "36°46'23.7";
  //but this
  const latitude = "36°46'23.7";
  const longitude = "3°03'32.8";

  const encodedLatitude = encodeURIComponent(latitude);
  const encodedLongitude = encodeURIComponent(longitude);

  const url = `https://maps.google.com/maps?q=${encodedLatitude},${encodedLongitude}&hl=es&z=14&output=embed`;

  const ReviewChanges = (e) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      [e.target.name]: e.target.value,
    }));
  };

  const AddReview = () => {
    // Add newReview to the list of reviews
    // ... You can implement the logic to add the review to your data source or update the state
    console.log(newReview);
    setNewReview({ name: "", rating: 0, comment: "", title:"" });
  };
  let fav = false;
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
  const [currentSlideN, setCurrentSlideN] = useState(0);

  const handlePrevSlideN = () => {
    setCurrentSlideN((prevSlide) => prevSlide - 1);
  };

  const handleNextSlideN = () => {
    setCurrentSlideN((prevSlide) => prevSlide + 1);
  };

  const startSlideN = currentSlideN * slidesToShow;
  const endSlideN = startSlideN + slidesToShow;
  const displayNews = news.slice(startSlideN, endSlideN);

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
  const [Fav, setFav] = useState(false);

  const addToFav = () => {
    setFav(!Fav);
    /* The rest of the logique */
  };

  return (
    //wraps all of them
    <div>
      <div className="px-8 py-2">
        {/*for the pictures and the information */}
        <div>
          <div>
            {/*for the pictures  */}
            <div className="block p-10 bg-white">
              <div>
                <div className="overflow-hidden h-120 relative">
                  
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
                          style={{ width: 2800, height: 800 }}
                          className='flex  object-cover    rounded-lg  shadow-xl dark:shadow-gray-800"'
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
          {/*for the the information*/}
          <div className="px-8 mb-10 ">
            <div className="grid grid-cols-2 gap-0">
              {/* Left section */}
              <div className="col-span-1">
                <div
                  style={{ backgroundColor: "rgba(240, 240, 250, 0.3)" }}
                  className="block p-10  bg-white  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h1 className="text-5xl  font-semibold">
                    {placeName + "     "}
                    {Fav && (
                      <button
                        className="favorite-button on "
                        onClick={addToFav}
                      >
                        <FontAwesomeIcon
                          icon={faHeartRegular}
                          className="text-red-500 fa-regular"
                        />
                      </button>
                    )}
                    {!Fav && (
                      <button
                        className="favorite-button on "
                        onClick={addToFav}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-red-500 "
                        />
                      </button>
                    )}
                  </h1>

                  <p className="mt-2 p-4 text-gray-600 text-2xl">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className=" fa-regular h-7"
                    />
                    {"  " + location}
                  </p>
                  <p className="mt-0 p-4 text-gray-600 text-2xl">
                    <FontAwesomeIcon
                      icon={faClock}
                      className=" fa-regular h-7"
                    />
                    ' Ouvert de: {openingHours}
                  </p>
                  <p className="mt-0 p-4 text-gray-600 text-2xl">
                    <FontAwesomeIcon
                      icon={faBus}
                      className=" fa-regular h-7"
                    />
                    Moyens de transport possibles : {Transport}
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
                    <p class="ml-2 text-3xl font-semibold text-gray-900 dark:text-white">
                      {avRate}
                    </p>
                    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a
                      href="#rev"
                      class="text-xl font-medium text-gray-900 underline hover:no-underline dark:text-white"
                    >
                      {reviews.length} reviews
                    </a>
                  </div>

                  <div className=" mt-0 p-8 bg-white rounded-3xl shadow-lg">
                    <p className="text-2xl text-gray-600  ">{description}</p>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div
                  style={{ backgroundColor: "rgba(240, 240, 250, 0.1)" }}
                  className=" py-15 property-details-google-map  mb-16 block  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <iframe
                    id="map"
                    src={url}
                    //src="https://maps.google.com/maps?q=36°46'23.7,3°03'30.7&hl=es&z=14&amp;output=embed"
                    width="100%"
                    height="580px"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 mb-16"></div>
        <div className="px-12">
          {/*for the Events */}
          <div className="mb-16">
            <div className="mt-0 p-0 ">
              <h1 className="text-6xl font-semibold mb-10">
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  className=" fa-regular h-16"
                />
                Evénements à proximité
              </h1>
              <div className="flex space-x-11 ">
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
                    className="bg-opacity-10 bg-white rounded-2xl p-4 space-y-2 w-90 h-90  border border-grey-400 rounded-lg shadow hover:bg-gray-100"
                    style={{
                      backgroundImage: `url(${events.image})`,
                      backgroundSize: "cover",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex justify-center rounded-3xl  py-15 bg-yellow-500 rounded-2xl w-14 mb-10">
                      <h1 className="flex  text-semibold text-lg text-center">
                        {events.date}
                      </h1>
                    </div>
                    <div
                         style={{ backgroundColor: "rgba(0, 1, 11, 0.35)" }}
                         className="flex justify-center rounded-3xl bg-opacity-0 "  >
                      <h4 className="text-3xl text-white font-semibold px-4 py-2 text-center">
                        {events.title}
                      </h4>{" "}
                    </div>
                    <div
                         style={{ backgroundColor: "rgba(0, 1, 11, 0.35)" }}
                         className="flex justify-center rounded-3xl bg-opacity-0 "   >
                      <p className="text-xl text-white text-center mt-4 px-3 py-2">
                        {events.descriptionS}
                      </p>
                     
                    </div> <a
                        href="#"
                        className="mt-5 h-15  inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => openPopup(events)}
                      >
                        Afficher plus
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

          <div className="w-full h-px bg-gray-300 mb-16"></div>
          {/*for the News */}
          <div className="mb-16">
            <div className="mt-0 p-0 ">
              <h1 className="text-6xl font-semibold mb-10">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className=" fa-regular h-16"
                />
                Actualités
              </h1>
              <div className="flex space-x-11 ">
                {currentSlideN !== 0 && (
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
                    onClick={handlePrevSlideN}
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
                {displayNews.map((news, indexN) => (
                  <div
                    key={indexN}
                    className="bg-opacity-10 bg-white rounded-2xl p-4 space-y-2 w-90 h-90  border border-grey-400 rounded-lg shadow hover:bg-gray-100"
                    style={{
                      backgroundImage: `url(${news.image})`,

                      backgroundSize: "cover",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex justify-center rounded-3xl  py-15 bg-yellow-500 rounded-2xl w-14 mb-10">
                      <h1 className="flex justify-center text-semibold text-center">
                        {news.date}
                      </h1>
                    </div>
                    <div
                      style={{ backgroundColor: "rgba(0, 1, 11, 0.35)" }}
                      className="flex justify-center rounded-3xl bg-opacity-0 "
                    >
                      <h4 className="text-3xl text-white font-semibold px-4 py-2 text-center ">
                        {news.title}
                      </h4>{" "}
                    </div>
                    <div
                      style={{ backgroundColor: "rgba(0, 1, 11, 0.35)" }}
                      className="flex justify-center rounded-3xl bg-opacity-0 "
                     >
                      <p className="text-xl text-white text-center mt-4 py-4 px-5">
                        {news.descriptionS}
                      </p>
                     
                    </div> <a
                        href="#"
                        className="mt-5 h-15  inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-yellow-600 rounded-lg hover:hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => openPopupN(news)}
                      >
                        Afficher plus
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
                {currentSlideN + slidesToShow < news.length && (
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 focus:outline-none"
                    onClick={handleNextSlideN}
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

            {isPopupNOpen && selectednews && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div
                  style={{ backgroundColor: "rgba(248, 248, 255, 0.8)" }}
                  className="bg-white rounded-3xl p-8 max-w-5xl "
                >
                  <h1 className="text-7xl font-semibold mb-2">
                    {selectednews.title}
                  </h1>
                  <p className="text-gray-500 mb-4 text-2xl">
                    {selectednews.date}
                  </p>
                  <p className="text-gray-800 mb-4 text-3xl">
                    {selectednews.descriptionL}
                  </p>
                  <div className="flex justify-center">
                    <img
                      src={selectednews.image}
                      alt="Image"
                      className="mt-4 flex justify-center  object-cover  rounded-3xl"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="bg-yellow-700 rounded-2xl hover:bg-gray-800 text-3xl text-white font-semibold py-2 px-4 h-20 w-40 rounded mt-7"
                      onClick={closePopupN}
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            )}

            {isPopupOpen && selectedEvent && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div
                  style={{ backgroundColor: "rgba(248, 248, 255, 0.8)" }}
                  className="bg-white rounded-3xl p-8 max-w-5xl"
                >
                  <h1 className="text-7xl font-semibold mb-2">
                    {selectedEvent.title}
                  </h1>
                  <p className="text-gray-500 mb-4 text-2xl">
                    {selectedEvent.date}
                  </p>
                  <div className="flex justify-center">
                    <img
                      src={selectedEvent.image}
                      alt="Image"
                      className="mt-4 w-full max-h-96 object-cover rounded-3xl"
                    />
                  </div>
                  <p className="text-gray-800 mb-4 text-3xl mt-5">
                    {selectedEvent.descriptionL}
                  </p>

                  <div className="flex justify-center">
                    <button
                      className="bg-yellow-700 rounded-2xl hover:bg-gray-800 text-3xl text-white font-semibold py-2 px-4 h-20 w-40 rounded mt-7"
                      onClick={closePopup}
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full h-px bg-gray-300 mb-16"></div>
          {/*for the Reviews and comments*/}
          <div>
            {/*for the Reviews */}

            <div id="rev">
              <div className="ma-15 ">
                <h1 className="text-6xl font-semibold mb-10">
                  <FontAwesomeIcon
                    icon={faCommenting}
                    className=" fa-regular h-16"
                  />
                  Commentaires
                </h1>
                <div className="flex mb-8 justify-normal relative  rounded-lg">
                  <div className="flex space-x-4">
                    {reviews.map((review, indexR) => (
                      <div
                        key={indexR}
                        className="bg-opacity-10 bg-white rounded-2xl p-4 space-y-2 w-90 h-90  border border-grey-400 rounded-lg shadow hover:bg-gray-100"
                      >
                        <div class="flex items-center mb-4 space-x-4">
                          <img
                            class="w-22 h-20 rounded-full"
                            src={review.img}
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
                              className="h-10 w-10 text-yellow-500"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                        <footer class="mb-5 text-2xl text-gray-500 dark:text-gray-400">
                          <p>
                            {" "}
                            <time datetime="2017-03-03 19:00">
                              {review.date}
                            </time>
                          </p>
                        </footer>
                        <p class="mb-2 text-gray-800 dark:text-gray-400 text-xl">
                          {review.comment}
                        </p>
                        {/*<aside>
                        <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                          <a
                            href="#"
                            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            Helpful
                          </a>
                        </div>
                        </aside>*/}
                      </div>
                    ))}{" "}
                  </div>
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
            </div>
            {/*for the  comments*/}
            <div>
              {/*Works if q-authenticated*/}
              {!authenticated && (
                <div>

                  <h4 className="text-6xl font-semibold mb-10">   <FontAwesomeIcon
                  icon={faAdd}
                  className=" fa-regular h-16"
                />Ajouter un commentaire</h4>
                    <div className="bg-opacity-10 bg-white rounded-2xl p-4 space-y-2 w-90 h-90  border border-grey-400 rounded-lg shadow">
            
                  <form className="space-y-2">
                    <div className=" flex justify-start">
                      <label htmlFor="rating" className="block font-medium text-3xl py-2">
                      <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-500 "
                        />  Rating
                        </label>
                      <select
                        id="rating"
                        name="rating"
                        value={newReview.rating}
                        onChange= {(e) => setRating(e.target.value)}
                        className="w-20 border border-gray-300 rounded-md px-5 py-2"
                        required   
                      >
                        <option  value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div>
                    <label htmlFor="title" className="block font-medium text-3xl py-3">
                        Titre
                      </label>
                      <textarea
                        id="title"
                        name="title"
                        placeholder="Ajouter un titre"
                        value={newReview.title}
                        onChange={(e) => setTitleC(e.target.value)}
                        className="block text-3xl  w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 placeholder-coolGray-200 resize-none"
                      ></textarea>
                      <label htmlFor="comment" className="block font-medium text-3xl py-3">
                        Commentaire
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        value={newReview.comment}
                        placeholder="Ajouter un commmentaire"
                      onChange={(e) => setComment(e.target.value)}
                        className="block h-32 text-2xl md:h-52 w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 placeholder-coolGray-200 resize-none"
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={ecrireComment}
                      className=" inline-block py-4 px-6 w-full md:w-auto text-lg leading-6 font-medium text-center text-white bg-yellow-600 border border-coolGray-200 hover:bg-gray-100 hover:text-black hover:border-coolGray-300 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    >
                      Ajouter commentaire
                    </button></div>
                  </form>
                  </div> </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
