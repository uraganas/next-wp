// filepath: /c:/CODZING/next-wp/app/dealers/page.tsx
'use client';
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import {distributors} from '@/data/distributors';

// Fix for default icon issue in Next.js
if (typeof window !== 'undefined') {
  const L = require('leaflet');
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

const Distributors = () => {
  const MapComponentClient = dynamic(() => import('@/components/MapComponentClient'), { ssr: false });

  return (
    <Section>
      <Container>
        <main className="space-y-6">
          <Prose>
            <h1>
              <Balancer>Distributors</Balancer>
            </h1>
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributors.map((distributor, index) => (
              <div key={index} className="distributor p-4 border rounded-lg">
                <h2>{distributor.region}</h2>
                {distributor.dealers.map((dealer, dealerIndex) => (
                  <div key={dealerIndex}>
                    <p>{dealer.name}</p>
                    {dealer.contact && <p>{dealer.contact}</p>}
                    {dealer.website && <p><a href={`http://${dealer.website}`}>{dealer.website}</a></p>}
                    {dealer.email && <p>Email: <a href={`mailto:${dealer.email}`}>{dealer.email}</a></p>}
                    {dealer.person && <p>Contact Person: {dealer.person}</p>}
                    {dealer.phone && <p>Phone: {dealer.phone}</p>}
                    {dealer.email && <p>Email: <a href={`mailto:${dealer.email}`}>{dealer.email}</a></p>}
                    {dealer.phone && <p>Phone: {dealer.phone}</p>}
                    {dealer.email2 && <p>Email: <a href={`mailto:${dealer.email2}`}>{dealer.email2}</a></p>}
                    {dealer.phone2 && <p>Phone: {dealer.phone2}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <MapComponentClient distributors={distributors} />
        </main>
      </Container>
    </Section>
  );
};

export default Distributors;


/*
const distributors = [
  {
    country: "🇦🇺 AUSTRALIA",
    name: "TOP GEAR GARAGE",
    contact: "Samsonas Motorsport Transmissions AU",
    email: "samsonas@bigpond.com",
    person: "Jason Wright",
    phone: "0409276469",
    geojson: require('@/components/geojson/AUS.geo.json'), // Path to GeoJSON file for Australia
  },
  {
    country: "🇧🇪 BELGIUM",
    name: "QVICK MOTORS",
    contact: "Erik Qvick",
    website: "www.qvickmotors.be",
    email: "erik.qvick@qvickmotors.be",
    geojson: require('@/components/geojson/BEL.geo.json'), // Path to GeoJSON file for Belgium
  },
  {
    country: "🇨🇦 CANADA",
    name: "SAMSONAS USA",
    email1: "vilius@samsonas.com",
    phone1: "+370 637 41366",
    email2: "usa@samsonas.com",
    phone2: "(202) 930-5460",
    geojson: require('@/components/geojson/CAN.geo.json'), // Path to GeoJSON file for Canada
  },
  // Add other distributors here with their respective GeoJSON paths...
];
*/

/*// filepath: /c:/CODZING/next-wp/app/dealers/page.tsx
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Fix for default icon issue in Next.js
if (typeof window !== 'undefined') {
  const L = require('leaflet');
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

const distributors = [
  {
    country: "🇦🇺 AUSTRALIA",
    name: "TOP GEAR GARAGE",
    contact: "Samsonas Motorsport Transmissions AU",
    email: "samsonas@bigpond.com",
    person: "Jason Wright",
    phone: "0409276469",
    geojson: require('@/components/geojson/AUS.geo.json'), // Path to GeoJSON file for Australia
  },
  {
    country: "🇧🇪 BELGIUM",
    name: "QVICK MOTORS",
    contact: "Erik Qvick",
    website: "www.qvickmotors.be",
    email: "erik.qvick@qvickmotors.be",
    geojson: require('@/components/geojson/BEL.geo.json'), // Path to GeoJSON file for Belgium
  },
  {
    country: "🇨🇦 CANADA",
    name: "SAMSONAS USA",
    email1: "vilius@samsonas.com",
    phone1: "+370 637 41366",
    email2: "usa@samsonas.com",
    phone2: "(202) 930-5460",
    geojson: require('@/components/geojson/CAN.geo.json'), // Path to GeoJSON file for Canada
  },
  // Add other distributors here with their respective GeoJSON paths...
];

const MapComponentClient = dynamic(() => import('@/components/MapComponentClient'), { ssr: false });

const Distributors = () => {
  return (
    <Section>
      <Container>
        <main className="space-y-6">
          <Prose>
            <h1>
              <Balancer>Distributors</Balancer>
            </h1>
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributors.map((distributor, index) => (
              <div key={index} className="distributor p-4 border rounded-lg">
                <h2>{distributor.country}</h2>
                <p>{distributor.name}</p>
                {distributor.contact && <p>{distributor.contact}</p>}
                {distributor.website && <p><a href={`http://${distributor.website}`}>{distributor.website}</a></p>}
                {distributor.email && <p>Email: <a href={`mailto:${distributor.email}`}>{distributor.email}</a></p>}
                {distributor.person && <p>Contact Person: {distributor.person}</p>}
                {distributor.phone && <p>Phone: {distributor.phone}</p>}
                {distributor.email1 && <p>Email: <a href={`mailto:${distributor.email1}`}>{distributor.email1}</a></p>}
                {distributor.phone1 && <p>Phone: {distributor.phone1}</p>}
                {distributor.email2 && <p>Email: <a href={`mailto:${distributor.email2}`}>{distributor.email2}</a></p>}
                {distributor.phone2 && <p>Phone: {distributor.phone2}</p>}
              </div>
            ))}
          </div>
          <MapComponentClient distributors={distributors} />
        </main>
      </Container>
    </Section>
  );
};

export default Distributors;

/*
{
    country: "🇦🇺 AUSTRALIA",
    name: "TOP GEAR GARAGE",
    contact: "Samsonas Motorsport Transmissions AU",
    email: "samsonas@bigpond.com",
    person: "Jason Wright",
    phone: "0409276469",
  },
  {
    country: "🇧🇪 BELGIUM",
    name: "QVICK MOTORS",
    contact: "Erik Qvick",
    website: "www.qvickmotors.be",
    email: "erik.qvick@qvickmotors.be",
  },
  {
    country: "🇨🇦 CANADA",
    name: "SAMSONAS USA",
    email1: "vilius@samsonas.com",
    phone1: "+370 637 41366",
    email2: "usa@samsonas.com",
    phone2: "(202) 930-5460",
  },
  {
    country: "🇨🇳 CHINA",
    name: "TNT DRIFT CLUB",
    email: "hanjiahao@hotmail.com",
    phone: "(86)13439096550",
  },
  {
    country: "🇨🇾 CYPRUS",
    name: "AMC Racing ltd",
    email: "amcracing@cytanet.com.cy",
    phone: "+357-99-447161",
  },
  {
    country: "🇨🇿 CZECH REPUBLIC",
    name: "RALLYE CARS SPOL. S.R.O.",
    email: "autoland@email.cz",
    phone: "+420608027947",
  },
  {
    country: "🇹🇿 EAST AFRICA (Tanzania, Kenya, Uganda, Rwanda, Burundi)",
    name: "GRUND MOTORSPORT",
    email: "grundmosp@yahoo.de",
    phone: "+255769977827",
  },
  {
    country: "🇪🇨 ECUADOR",
    name: "RPM IMPORTS",
    email: "augustolarrea@hotmail.com",
    person: "Augusto Larrea",
    phone: "+593984662590",
  },
  {
    country: "🇪🇬 EGYPT",
    name: "AMC Racing ltd",
    email: "amcracing@cytanet.com.cy",
  },
  {
    country: "🇪🇪 ESTONIA",
    name: "JETSON OÜ",
    website: "www.samsonas.ee",
    email: "tonu@samsonas.ee",
    person: "Mr. Tõnu Sepp",
    phone: "+3725238357",
  },
  {
    country: "🇫🇮 FINLAND",
    name: "DOGBOX OY",
    website: "www.dogbox.fi",
    email: "jukka@dogbox.fi",
    person: "Mr. Jukka Hara",
    phone: "+358440956777",
  },
  {
    country: "🇫🇷 FRANCE",
    name: "SAMSONAS FRANCE",
    email: "samsonasfrance@gmail.com",
    phone: "+336 187 25308",
    website: "instagram.com/samsonas_france",
  },
  {
    country: "🇩🇪 GERMANY-Rally Market",
    name: "SCHUG MOTORSPORT",
    contact: "Steven Schug",
    website: "www.schug-motorsport.com",
    email: "info@schug-motorsport.com",
    phone: "+491716447529",
  },
  {
    country: "🇬🇷 GREECE",
    name: "Marios Chrysafis",
    email: "mcracing@otenet.gr",
    phone: "+0030 210 2832840, +0030 6944 607090",
  },
  {
    country: "🇭🇺 HUNGARY",
    name: "HUB DYNO BUDAPEST",
    email: "peter@hubdynobudapest.hu",
    phone: "+36308508474",
  },
  {
    country: "🇮🇸 ICELAND",
    name: "TITANCAR EHF",
    email: "gedastitan@gmail.com",
    phone: "+3547681720",
  },
  {
    country: "🇮🇪 IRELAND",
    name: "EUROM SPORT",
    website: "www.eurom-sport.com",
    email: "mick@samsonas.com",
    person: "Michael McCullagh",
    phone: "+442880760775",
  },
  {
    country: "🇮🇱 ISRAEL",
    name: "TIG MOTORSPORT ENGINEERING",
    contact: "Eran Gomer",
    email: "eran@tig-motorsport.com",
    website: "www.tig-motorsport.com",
    phone: "+972-54-7700078",
  },
  {
    country: "🇯🇵 JAPAN",
    name: "GIKEN COMBINATION COMPANY",
    contact: "Nozomu Sagami",
    email: "eaany043@mkc.zaq.ne.jp",
    phone: "+81669031230",
  },
  {
    country: "🇯🇴 JORDAN",
    name: "NMK Performance",
    email: "Sales@nmkperformance.com",
    phone: "+971503538081",
  },
  {
    country: "🇰🇷 SOUTH KOREA",
    name: "VITESSE MOTORSPORTS (Zega corporation)",
    email: "sungmin@vitesse.kr",
    contact: "Mr. Je",
    phone: "+821028237496, +821035910667",
  },
  {
    country: "🇱🇧 LEBANON",
    name: "Mazen Zgheib",
    phone: "+96176693933",
  },
  {
    country: "🇱🇺 LUXEMBOURG",
    name: "QVICK MOTORS",
    contact: "Erik Qvick",
    website: "www.qvickmotors.be",
    email: "erik.qvick@qvickmotors.be",
  },
  {
    country: "🇲🇾 MALAYSIA",
    name: "TP Autoworks",
    email: "tpautoworks@gmail.com",
    phone: "+6019-3048999",
  },
  {
    country: "🇲🇹 MALTA",
    name: "PROSPEEDPARTS",
    website: "www.prospeedparts.com",
    email: "sales@prospeedparts.com",
  },
  {
    country: "🇲🇽 MEXICO",
    name: "SAMSONAS USA",
    email1: "vilius@samsonas.com",
    phone1: "+370 637 41366",
    email2: "usa@samsonas.com",
    phone2: "(202) 930-5460",
  },
  {
    country: "🇳🇱 NETHERLANDS",
    name: "QVICK MOTORS",
    contact: "Erik Qvick",
    website: "www.qvickmotors.be",
    email: "erik.qvick@qvickmotors.be",
  },
  {
    country: "🇳🇿 NEW ZEALAND",
    name: "TOP GEAR GARAGE",
    contact: "Samsonas Motorsport Transmissions AU",
    email: "samsonas@bigpond.com",
    person: "Jason Wright",
    phone: "0409276469",
  },
  {
    country: "🇳🇴 NORWAY",
    name: "Helstad Service",
    contact: "Odd-Helge Helstad",
    phone: "+47 92858905",
    email: "helstad96@live.com",
  },
  {
    country: "🇵🇪 PERU",
    name: "JGK MOTORSPORTS EIRL",
    email: "jimmy@jgkmotorsports.com",
    email2: "ventas@jgkmotorsports.com",
    phone: "+511 3487667",
  },
  {
    country: "🇵🇱 POLAND",
    name: "BR COMPETITION",
    website: "www.brcompetition.com",
    email: "bartek@samsonas.com",
    phone: "+48607441520",
  },
  {
    country: "🇵🇹 PORTUGAL",
    name: "P&R DOMINGOS SPORT LDA",
    email: "dsport@sapo.pt",
    website: "www.facebook.com/domingos.sport",
  },
  {
    country: "🇸🇮 SLOVENIA",
    name: "OV RACE d.o.o.",
    phone: "+386(0)31633300",
    email: "sales@rally-shop.si",
    website: "www.rally-shop.si",
  },
  {
    country: "🇪🇸 SPAIN",
    name: "RMC MOTORSPORT",
    website: "www.rmcmotorsport.es",
    email: "sport@robertomendez.com",
    phone: "+593984662590",
  },
  {
    country: "🇸🇪 SWEDEN",
    name: "JMB OPTIMERING",
    website: "www.jmbo.se",
    email: "info@jmbo.se",
    contact: "Magnus Jaasund",
    phone: "+46708984136",
  },
  {
    country: "🇨🇭 SWITZERLAND",
    name: "MAPTEC AUTOBAU FACTORY",
    email: "info@maptec.ch",
    website: "www.maptec.ch",
    phone: "+41(0)715520050",
  },
  {
    country: "🇸🇾 SYRIA",
    name: "SPEEDPROS RACING",
    contact: "Omar Birro",
    email: "obirro@speedpros-racing.com",
    phone: "+963933227668",
  },
  {
    country: "🇹🇷 TURKEY",
    name: "MTG Motorsport",
    contact: "Timur Pomak",
    email: "mtgmotorsport@outlook.com",
    phone: "+905325121090",
  },
  {
    country: "🇺🇦 UKRAINE",
    name: "NO MOTORS RACE CORP.",
    email: "nomotors.ua@gmail.com",
    phone: "+380681202200",
  },
  {
    country: "🇦🇪 UNITED ARAB EMIRATES",
    name: "NMK Performance",
    email: "Sales@nmkperformance.com",
    phone: "+971503538081",
  },
  {
    country: "🇬🇧 UNITED KINGDOM",
    name: "EUROM SPORT",
    website: "www.eurom-sport.com",
    email: "mick@samsonas.com",
    person: "Michael McCullagh",
    phone: "+442880760775",
  },
  {
    country: "🇺🇸 UNITED STATES (USA)",
    name: "SAMSONAS USA",
    email1: "vilius@samsonas.com",
    phone1: "+370 637 41366",
    email2: "usa@samsonas.com",
    phone2: "(202) 930-5460",
  },
];

const Distributors = () => {
  return (
    <Section>
      <Container>
        <main className="space-y-6">
          <Prose>
            <h1>
              <Balancer>Distributors</Balancer>
            </h1>
          </Prose>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributors.map((distributor, index) => (
              <div key={index} className="distributor p-4 border rounded-lg">
                <h2>{distributor.country}</h2>
                <p>{distributor.name}</p>
                {distributor.contact && <p>{distributor.contact}</p>}
                {distributor.website && <p><a href={`http://${distributor.website}`}>{distributor.website}</a></p>}
                {distributor.email && <p>Email: <a href={`mailto:${distributor.email}`}>{distributor.email}</a></p>}
                {distributor.person && <p>Contact Person: {distributor.person}</p>}
                {distributor.phone && <p>Phone: {distributor.phone}</p>}
                {distributor.email1 && <p>Email: <a href={`mailto:${distributor.email1}`}>{distributor.email1}</a></p>}
                {distributor.phone1 && <p>Phone: {distributor.phone1}</p>}
                {distributor.email2 && <p>Email: <a href={`mailto:${distributor.email2}`}>{distributor.email2}</a></p>}
                {distributor.phone2 && <p>Phone: {distributor.phone2}</p>}
              </div>
            ))}
          </div>
          <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {distributors.map((distributor, index) => (
              <Marker key={index} position={distributor.position} icon={L.icon({ iconUrl: '/marker-icon.png' })}>
                <Popup>
                  <h2>{distributor.country}</h2>
                  <p>{distributor.name}</p>
                  {distributor.contact && <p>{distributor.contact}</p>}
                  {distributor.website && <p><a href={`http://${distributor.website}`}>{distributor.website}</a></p>}
                  {distributor.email && <p>Email: <a href={`mailto:${distributor.email}`}>{distributor.email}</a></p>}
                  {distributor.person && <p>Contact Person: {distributor.person}</p>}
                  {distributor.phone && <p>Phone: {distributor.phone}</p>}
                  {distributor.email1 && <p>Email: <a href={`mailto:${distributor.email1}`}>{distributor.email1}</a></p>}
                  {distributor.phone1 && <p>Phone: {distributor.phone1}</p>}
                  {distributor.email2 && <p>Email: <a href={`mailto:${distributor.email2}`}>{distributor.email2}</a></p>}
                  {distributor.phone2 && <p>Phone: {distributor.phone2}</p>}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </main>
      </Container>
    </Section>
  );
};
export default Distributors;
*/
