import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const CREATE_GAME_URL: string =
  process.env.REACT_APP_DOMAIN + "/api/games";
