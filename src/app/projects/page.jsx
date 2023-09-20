import React from "react";
import Card from "@/components/Project";

function page() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto justify-between py-44 ">
      <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10 min-w-full">
        <h1 className="font-game text-4xl text-center lg:text-5xl p-5">
          Projects
        </h1>
        <div className="flex-col min-w-full">
          <div className="flex-col items-center justify-center bg-gray-100 bg-opacity-80 dark:bg-opacity-80 dark:bg-gray-900 rounded-lg z-10  border-y border-dashed border-gray-500 border-opacity-20 pb-4">
            <div className="flex lg:flex-row flex-col items-center justify-center border-y border-dashed border-gray-500 border-opacity-20 p-4">
              <div className="flex flex-col">
                <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
                  <Card
                    href={"https://spotify-beryl-six.vercel.app/"}
                    image={"/img/spotify.png"}
                    title={"Spotify"}
                    description={"Listen to your favorite music!"}
                  />
                  <Card
                    href={"https://imdb-clone-gleb.vercel.app/"}
                    image={"/img/imdb2.png"}
                    title={"IMDb"}
                    description={"Check new films!"}
                  />
                  <Card
                    href={"https://github.com/Warmetallic/Ninja-Run"}
                    image={"/img/ninja3.gif"}
                    title={"Ninja Run"}
                    description={"Java game project! "}
                  />
                  <Card
                    href={"https://github.com/Warmetallic/Dead-Wood"}
                    image={"/img/wood3.gif"}
                    title={"Dead Woods"}
                    description={"Processing/Java arcade!"}
                  />
                  <Card
                    href={"https://github.com/Warmetallic/Space-Simulator"}
                    image={"/img/space2.gif"}
                    title={"Space Simulator"}
                    description={
                      "C++/OpenGL 2.0 project made to build a solar system"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
