'use client';

export const distributors = [
    {
      region: "🇦🇺 AUSTRALIA",
      dealers: [
        {
          name: "TOP GEAR GARAGE",
          contact: "Samsonas Motorsport Transmissions AU",
          email: "samsonas@bigpond.com",
          person: "Jason Wright",
          phone: "0409276469",
          geojson: require('@/components/geojson/AUS.geo.json'), // Path to GeoJSON file for Australia
        },
        {
          name: "ANOTHER GARAGE",
          contact: "Another Contact",
          email: "another@bigpond.com",
          person: "John Doe",
          phone: "0412345678",
          geojson: require('@/components/geojson/AUS.geo.json'), // Path to GeoJSON file for Australia
        }
      ]
    },
    {
      region: "🇧🇪 BELGIUM",
      dealers: [
        {
          name: "QVICK MOTORS",
          contact: "Erik Qvick",
          website: "www.qvickmotors.be",
          email: "erik.qvick@qvickmotors.be",
          geojson: require('@/components/geojson/BEL.geo.json'), // Path to GeoJSON file for Belgium
        }
      ]
    },
    {
      region: "🇨🇦 CANADA",
      dealers: [
        {
          name: "SAMSONAS USA",
          email: "vilius@samsonas.com",
          phone: "+370 637 41366",
          email2: "usa@samsonas.com",
          phone2: "(202) 930-5460",
          geojson: require('@/components/geojson/CAN.geo.json'), // Path to GeoJSON file for Canada
        }
      ]
    }
    // Add other regions and their respective dealers here...
  ];