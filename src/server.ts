import "dotenv/config";

import app from "./app";
import config from "./config";

const port = config.PORT;

app.listen(port, () => {
    console.log(`[server]: the server started in http://localhost:${port}`);
});
