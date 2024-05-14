export const ShowPokemon = ({ urlImage, resp }) => {
    console.log(urlImage);
    return (
        <div
            className="rounded-md  w-full min-h-[260px]  md:w-2/3 md:min-h-[550px] 
                bg-[url('./images/fondo.jpg')] bg-contain  md:bg-cover bg-no-repeat  bg-center relative"
        >
            {urlImage ? (
                <img
                    className={`outline-none border-none w-32 h-32 top-[60px] left-[20px]   md:w-60 md:h-60 absolute md:top-[130px] md:left-[80px] ${
                        !resp && "brightness-0 invert-0"
                    }`}
                    src={urlImage.sprites.other.dream_world.front_default}
                    alt={`Yo soy ${urlImage.species.name}`}
                />
            ) : (
                <p className="text-4xl font-bold absolute top-[220px] left-[80px]">
                    Cargando imagen...
                </p>
            )}
        </div>
    );
};
