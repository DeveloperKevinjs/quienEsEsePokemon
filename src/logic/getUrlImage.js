export const getUrlImage = async () => {
    const rand = Math.floor(Math.random() * 648) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
    const data = await res.json();
    return data;
};
