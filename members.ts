import axios from "axios";
//import hubspot from '@hubspot/api-client'

//const hubspotClient = new hubspot.Client({ accessToken: process.env.Huntr_HubSpot_Integration });


//console.log(hubspotClient)

export async function members() {
  //console.log(hubspotClient)
  const response = await axios.get(`https://api.huntr.co/org/members`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  });

  return response.data
}
