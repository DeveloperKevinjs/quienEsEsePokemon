import { useEffect, useState } from "react";
import "./App.css";
import { ShowViewButtons } from "./components/ShowViewButtons";
import { ShowPokemon } from "./components/ShowViewPokemon";
import { useImage } from "./hooks/useImage";
import { useOptions } from "./hooks/useOptions";
import confetti from "canvas-confetti";
import Swal from "sweetalert2";
import { Dark } from "./components/DarkAndWhite/Dark";
import { Sun } from "./components/DarkAndWhite/Sun";

function App() {
    const { urlImage, refresh } = useImage();
    const { option } = useOptions({ urlImage });
    const [resp, setResp] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const verifyGetLocalStorage = localStorage.getItem("theme") === "dark";
        return verifyGetLocalStorage;
    });
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "ight");
        }
    }, [darkMode]);

    const compararString = (valueButton, valueUrlImage) => {
        if (valueButton === valueUrlImage) {
            setResp(!resp);
            confetti();
            Swal.fire({
                icon: "success",
                title: "Congratulations...",
                text: "Excellent work",
            }).then((result) => {
                if (result.isConfirmed) {
                    refresh();
                    setResp(false);
                }
            });
        } else {
            const img = urlImage.sprites.other.dream_world.front_default;
            const nameImg = urlImage?.species?.name;
            Swal.fire({
                title: "Ups you missed!",
                text: `Was a ${nameImg}`,
                imageUrl: img,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Play again",
            }).then((result) => {
                if (result.isConfirmed) {
                    refresh();
                }
            });
            refresh();
        }
    };
    return (
        <div className="dark:bg-black transition-all duration-1000 h-screen container m-auto max-w-full ">
            <div className="flex flex-col md:flex-row items-center">
                <h1 className=" w-5/6 font-medium text-center py-7 text-2xl dark:text-white md:text-7xl">
                    ¿Quién es ese Pokémon?
                </h1>
                <div className=" w-1/6 my-3">
                    <div className="w-full flex justify-center ">
                        <button
                            onClick={handleDarkMode}
                            className={` rounded-full border-none cursor-pointer outline-none flex items-center relative  after:block 
                            after:w-10 after:h-10 after:absolute after:bg-gray-300 after:transition-all after:duration-200  ${
                                darkMode
                                    ? "bg-yellow-300 after:left-auto after:right-0 "
                                    : "bg-[#343D5B] after:left-0  after:right-auto  "
                            } 
                            after:rounded-full after:shadow-4xl`}
                        >
                            <span
                                className={`p-0 ml-0 mt-0 mb-0 mr-3 w-10 h-10 leading-8 flex  justify-center items-center  `}
                            >
                                <Sun
                                    fill={"#343D5B"}
                                    wi={"20px"}
                                    he={"20px"}
                                ></Sun>
                            </span>
                            <span className="p-0 m-0 w-10 h-10 leading-8 flex  justify-center items-center text-white ">
                                <Dark
                                    fill={"#fff"}
                                    wi={"20px"}
                                    he={"20px"}
                                ></Dark>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <section className="container m-auto w-[98%] max-w-[1300px] ">
                <div className="flex flex-col md:flex-row md:gap-x-5">
                    <ShowPokemon resp={resp} urlImage={urlImage}></ShowPokemon>
                    <ShowViewButtons
                        urlImage={urlImage}
                        option={option}
                        comparar={compararString}
                        resp={resp}
                    ></ShowViewButtons>
                </div>
            </section>
        </div>
    );
}

export default App;
