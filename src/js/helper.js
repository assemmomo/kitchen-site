export const getJSON = async function (url) {
    try {
         const correctedUrl = url.replace('/&', '/'); 
        const res = await fetch(correctedUrl);
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
};
