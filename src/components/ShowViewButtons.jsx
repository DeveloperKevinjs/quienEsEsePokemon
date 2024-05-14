import { Button } from "./Button";

export const ShowViewButtons = ({ urlImage, option, comparar, resp }) => {
    function getRandomSequence() {
        const numbers = [
            urlImage?.species?.name,
            option?.[0]?.species?.name,
            option?.[1]?.species?.name,
        ];
        const sequence = [];
        while (sequence.length < 3) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            const [selectedNumber] = numbers.splice(randomIndex, 1);
            sequence.push(selectedNumber);
        }

        return sequence;
    }

    const randomSequence = getRandomSequence();

    const functionComparar = (valueButton) => {
        comparar(valueButton, urlImage?.species?.name);
    };

    return (
        <div className="w-full  md:w-1/3  ">
            {urlImage && (
                <div className="w-full flex flex-col items-center md:flex-row md:justify-center gap-3 md:flex-wrap ">
                    {randomSequence.map((elemento, index) => (
                        <Button
                            index={index}
                            key={index}
                            valueButton={elemento}
                            clickVerify={functionComparar}
                            resp={resp}
                        >
                            <div className="border-black border-2 rounded-full bg-yellow-400 w-40 h-40  overflow-hidden flex justify-center items-center">
                                <p className="text-xl  text-center text-white bg-red-600 py-1 px-5 rounded-md ">
                                    {elemento}
                                </p>
                            </div>
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
};
