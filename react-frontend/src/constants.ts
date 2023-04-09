/// <reference types="node" />

const PROD_BACKEND_API_URL = "http://ec2-13-48-196-131.eu-north-1.compute.amazonaws.com/restapi";
const DEV_BACKEND_API_URL = "http://127.0.0.1:8000/restapi";

export const BACKEND_API_URL =
	process.env.NODE_ENV === "development" ? DEV_BACKEND_API_URL : PROD_BACKEND_API_URL;