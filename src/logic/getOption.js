export const getOption = async () => {
    let devolver = [];
    for (let i = 0; i < 2; i++) {
        const rand = Math.floor(Math.random() * 648) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
        const data = await res.json();
        devolver.push(data);
    }
    return devolver;
};
