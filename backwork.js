const yearBtn = document.getElementById("yearBtn");
const sixMonthBtn = document.getElementById("sixMonthBtn");
const monthBtn = document.getElementById("monthBtn");
const weekBtn = document.getElementById("weekBtn");

const filmContainer = document.getElementById("filmContainer");
const sectionTitle = document.getElementById("sectionTitle");

const films = {
    year: [
        { title: "One Battle After Another", description: "Metascore of 95, starring Leonardo DiCaprio:"},
        { title: "My Undesirable Friends: Part I", description: "Metascore of 94, a documentary following independent Russian journalists" },
        { title: "BLKNWS: Terms & Conditions", description: "Metascore of 92, an experimental documentary exploring Black history and identity" },
    ],
    sixMonth: [
        { title: "Film B", description: "Description of Film B" },
        { title: "Film B", description: "Description of Film B" },
        { title: "Film B", description: "Description of Film B" },
    ],
    month: [
        { title: "Film C", description: "Description of Film C" },
        { title: "Film C", description: "Description of Film C" },
        { title: "Film C", description: "Description of Film C" },
    ],
    week: [
        { title: "Film D", description: "Description of Film D" },
        { title: "Film D", description: "Description of Film D" },
        { title: "Film D", description: "Description of Film D" },
    ],
};