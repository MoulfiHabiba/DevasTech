import { React, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
function Signing() {
  const [activeTab, setActiveTab] = useState("signin");
  const handleLogin = () => {
    // Handle login logic
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="blurry-background" >
    <div >
      <div
        style={{ backgroundColor: "rgba(248, 248, 255, 0.9)" }}
        className=" mt-24 bg-white-100 w-full rounded-3xl lg:w-3/5 xl:w-3/5 px-14  lg:mb-20 max-w-3xl mx-auto pt-20 pb-24 bg-white rounded-4xl shadow-2xl "
      >
        <div className="flex items-center justify-center mb-8 border-green-900 rounded-4xl">
          <div className="  rounded-2xl bg-purple-900 border-4 border-purple-900">
            <button
              className={`${
                activeTab === "signin"
                  ? "bg-yellow-400 border-purple-900 text-black text-2xl"
                  : "bg-purple-900 border-purple-900 text-white "
              } rounded-2xl font-bold py-4 px-8 rounded-l-md focus:outline-none focus:shadow-outline w-48`}
              type="button"
              onClick={() => handleTabChange("signin")}
            >
              Sign In
            </button>
            <button
              className={`${
                activeTab === "signup"
                  ? "bg-yellow-400 text-black text-2xl"
                  : "bg-purple-900 text-white"
              } rounded-2xl font-bold py-4 px-8 rounded-r-md focus:outline-none focus:shadow-outline w-48`}
              type="button"
              onClick={() => handleTabChange("signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
        {activeTab === "signup" && (
          <form>
            <h2 className="font-heading text-5xl mb-10 text-gray-900 font-semibold ">
              Créer un nouveau compte
            </h2>
            <p className="px-5 text-xl text-gray-500 mb-10">
              Nous vous souhaitons la bienvenue ! Nous vous demandons de bien
              vouloir saisir vos coordonnées.
            </p>
            <div className=" flex justify-center">
              {/* Left section */}
              <div className="w-1/2 p-7">
                <div className="mb-5 rounded border-green-200">
                  <div className="flex items-center justify-center border-green-200">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-2 h-10 text-gray-500"
                    />
                    <input
                      type="text"
                      id="nom"
                      className="w-full h-20 px-2 text-xl border-gray-300 rounded-lg border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      placeholder="Nom"
                    />
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="w-1/2 p-7">
                <div className="rounded border-green-200">
                  <div className="flex items-center justify-center border-green-200">
                    <input
                      type="text"
                      id="prenom"
                      className="w-full h-20 px-2 text-xl border-gray-300 rounded-lg border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      placeholder="Prenom"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 rounded border-green-200">
              <div className="flex items-center  justify-center border-green-200">
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-2 h-10 text-gray-500"
                />
                <input
                  type="text"
                  id="username"
                  className="w-full h-20 px-2 text-xl   border-gray-300 rounded-lg border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="UserName"
                />
              </div>
            </div>
            <div className="mb-10 rounded border-green-200">
              <div className="flex items-center  justify-center border-green-200">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 h-10 text-gray-500"
                />
                <input
                  type="text"
                  id="email"
                  className="w-full h-20 px-2 text-xl   border-gray-300 rounded-lg border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="mb-4 border-green-200">
              <div className="flex items-center flex justify-center border-green-200">
                <FontAwesomeIcon
                  icon={faLock}
                  className="mr-2 h-10 text-gray-500"
                />
                <input
                  type="password"
                  id="password"
                  className=" mb-5 w-full h-20 px-2 text-xl   border-gray-300 rounded-lg border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Mot de passe"
                />
              </div>
            </div>

            <div className="flex justify-center mb-10">
              <button
                className=" rounded-2xl block w-full h-16 py-4 px-6 text-white text-xl leading-6 text-coolGray-50 font-medium text-center bg-purple-900 hover:text-black hover:bg-yellow-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="button"
                onClick={handleLogin}
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-coolGray-500 text-xl mb-6">
                Vous avez déja un compte ?
                <button
                  className=" px-5 text-violet-500 hover:underline hover:text-yellow-600 focus:outline-none"
                  type="button"
                  onClick={() => handleTabChange("signin")}
                >
                  SignIn
                </button>
              </p>
            </div>
          </form>
        )}
        {activeTab === "signin" && (
          <form>
            <h2 className="font-heading text-5xl mb-10 text-gray-900 font-semibold ">
              Connectez-vous{" "}
            </h2>
            <p className="px-5 text-xl text-gray-500 mb-10">
              Nous vous souhaitons un bon retour ! Nous vous demandons de bien
              vouloir saisir vos coordonnées.
            </p>
            <div className="mb-10 rounded border-green-200">
              <div className="flex items-center  justify-center border-green-200">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 h-10 text-gray-500"
                />
                <input
                  type="text"
                  id="email"
                  className="w-full h-20 px-2 text-xl   border-gray-300 rounded-lg border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 border-green-200">
              <div className="flex items-center flex justify-center border-green-200">
                <FontAwesomeIcon
                  icon={faLock}
                  className="mr-2 h-10 text-gray-500"
                />
                <input
                  type="password"
                  id="password"
                  className=" w-full h-20 px-2 text-xl   border-gray-300 rounded-lg border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  placeholder="Mot de passe"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="mb-10 text-mb text-green-500 hover:underline focus:outline-none"
                type="button"
              >
                Mot de passe oublié?
              </button>
            </div>
            <div className="flex justify-center mb-10">
              <button
                className=" rounded-2xl block w-full h-16 py-4 px-6 text-white text-xl leading-6 text-coolGray-50 font-medium text-center bg-purple-900 hover:text-black hover:bg-yellow-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="button"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-coolGray-500 text-xl mb-6">
                Vous n'avez pas de compte ?
                <button
                  className=" px-5 text-violet-500 hover:underline hover:text-yellow-600 focus:outline-none"
                  type="button"
                  onClick={() => handleTabChange("signup")}
                >
                  SignUp
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </div></div>
  );
}

export default Signing;
