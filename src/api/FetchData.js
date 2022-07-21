import { GEO_API_URL } from "./configs";

export async function FetchData(inputValue) {
  const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cd33910752msh653894c6662c1a4p134e99jsne57acef4c813",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  try {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=500000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode} `,
            };
          }),
        };
      });
  } catch (error) {
    console.error(error);
  }
}
