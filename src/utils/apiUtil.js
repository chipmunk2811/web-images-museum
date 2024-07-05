import axios from "axios";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRhaV9raG9hbiI6InJvb3QiLCJob190ZW4iOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwic29fZHQiOiIwNzg0NTQ3MjgyIiwibWF0X2toYXUiOiIkMmIkMTAkUlJhZU11V1F4Q2MxaU9aS1dZS2t6dTlMd01Uai9oMU02NVQ3VjltdkpEbWZpMTh0UHp4cXkiLCJsb2FpX25ndW9pX2R1bmciOiJBZG1pbiJ9LCJpYXQiOjE3MTgyNjY3MTAsImV4cCI6MTc0OTgwMjcxMH0.PdfDB_5m1rIJlowm83Qv9buBlnw4Zgti-ouAuYZIv98";

const api = axios.create({
    baseURL: "http://103.38.236.70:8080"
})

// api.interceptors.request.use((config) => {
//     config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${TOKEN}`,
//     };
//     return config;
// });

export default api;