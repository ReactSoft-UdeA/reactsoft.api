import conectarBD from "./db/db.js";


const main = async () => {
    await conectarBD();
};

main();