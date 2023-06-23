import React, { useState, useEffect } from "react";
import {
  IoImagesOutline,
  IoFilmOutline,
  IoHappyOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import News from "./News";
import OtherTweets from "./OtherTweets";

const TweetNow = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWindowLarge, setIsWindowLarge] = useState(true);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsWindowLarge(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChooseProfilePicture = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
  
    fileInput.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement)?.files?.[0];
      if (selectedFile) {
        setProfilePicture(URL.createObjectURL(selectedFile));
      }
    });
  
    fileInput.click();
  };

  const handleChooseImage = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", (event) => {
      const fileInput = event.target as HTMLInputElement;

      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];

        const reader = new FileReader();

        reader.onload = (e) => {
          const imagePreviewUrl = e.target?.result;
          console.log("Selected file:", selectedFile);
          console.log("Image preview URL:", imagePreviewUrl);
          // Here, you can update your component state or do something else with the selected file and preview URL
        };

        reader.readAsDataURL(selectedFile);
      }
    });

    fileInput.click();
  };

  const handleSelectGif = () => {
    // Logic to handle the selection of a gif
    // You can use a library or API to fetch and display the available gifs for selection
  };

  const handleSelectEmoji = () => {
    // Logic to handle the selection of an emoji
    // You can use a library or API to fetch and display the available emojis for selection
  };

  return (
    <div>
      <div className="flex justify-center">
        {/* Mobile Menu */}
        {!isWindowLarge && (
          <div className="md:hidden fixed top-0 right-0 m-4">
            <button className="bg-white" onClick={handleToggleMenu}>
              <IoMenuOutline size={24} />
            </button>
            {isMenuOpen && (
              <div className="bg-blue-100">
                <Link to="/news" onClick={handleToggleMenu}>
                  News
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Main Content */}
        <div
          className={`${
            isWindowLarge ? "w-full md:w-1/2 lg:w-2/3 ml-20" : "w-full"
          } bg-gray-200 p-4 mt-10 mb-10`}
        >
          {/* Part 1 */}
          <div className="text-start">
            <span className="text-xl">Home</span>
          </div>

          {/* Part 2 */}
          <div className="h-85 flex flex-col justify-center items-start mt-5">
            <button
              className="text-blue-500 underline mb-2"
              onClick={handleChooseProfilePicture}
            >
              Choose Profile Picture
            </button>
            {profilePicture && (
              <img
                src={profilePicture}
                alt="Profile Picture Preview"
                className="w-20 h-20 mb-4 rounded-full"
              />
            )}
            <input
              type="text"
              placeholder="Your Name"
              className="border mb-4 p-2"
              style={{ width: "100%" }}
              required
            />
            <textarea
              placeholder="What would you like to fleet about?"
              className="border p-2 resize-none"
              style={{ width: "100%", height: "100px" }}
              required
            />
          </div>

          {/* Part 3 */}
          <div className="h-85 flex flex-col justify-center items-center px-6">
            <div className="flex mb-4 mt-3">
              <IoImagesOutline
                className="text-blue-500 mr-4 cursor-pointer"
                size={24}
                onClick={handleChooseImage}
              />
              {/* <IoFilmOutline
                className="text-blue-500 mr-4 cursor-pointer"
                size={24}
                onClick={handleSelectGif}
              />
              <IoHappyOutline
                className="text-blue-500 cursor-pointer"
                size={24}
                onClick={handleSelectEmoji}
              /> */}
              <div className="">
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-5">
                  Fleet Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Tweets */}
        {isWindowLarge && (
          <div className="md:w-1/2 lg:w-1/3 mr-20 mt-10">
            {/* News section */}
            <div className="bg-gray-200 p-4 ml-5">
              {/* <Link to="/news">News</Link> */}
              <News />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetNow;
