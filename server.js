import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.error(`🥶 An error occurred while trying to start server on port ${PORT}.`);
        console.error(error);
    }

    console.info(`😆 Server listening on port ${PORT}!`);
});

server.on("error", (err) => {
    console.error(`🙄 Unexpected error in server on port ${PORT}!`);
    console.error(err);
});