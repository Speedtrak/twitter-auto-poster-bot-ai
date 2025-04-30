//? It is advisable to use environment variables instead of directly putting secrets in repository file but I have skipped this part as it would become complicated for many.
//? Alternatively you can download the repository instead or forking and upload it from your account and keep it private, in that way, your secrets will not be exposed to the public.

const APP_KEY = "eegXBkQ329hmVXwaCXk3Zj0C5";
const APP_SECRET = "k6XfNkt9YrTSIoL4it3pGUhPV1Cb3eqdlFMquLp8xAp8WWQZLc";
const ACCESS_TOKEN = "1751475225332473857-84OHWI4xyia98JQtKiaVszAbC282bZ";
const ACCESS_SECRET = "REp8nyBlHcIFIuZRsrNChj1R6MxsprzoLgS0hZ8qObAph";
const GEMINI_API_KEY = "AIzaSyD0cGExeK8ZOiDxJXPdTG-P7Eq0Zoi02_4";

const SECRETS = {
  APP_KEY,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  GEMINI_API_KEY,
};

module.exports = SECRETS;
