import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Lists from "./Lists";
import TagSwipe from "./TagSwipe";
<<<<<<< HEAD
import EventCardComponent from "./EventCardComponent";
import { getTags } from "./utils/DataHandler";
=======
>>>>>>> f344d8e8740c3f80badd04210552da0e44c54b09

const GlobalStyle = createGlobalStyle`

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

body{
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  text-align: center;
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.app{
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
}

#root>div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app>div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}`;

const displayedEvents = [
  {
    "id": "7cec1d3e-fc4b-4d9c-adab-a75187d70116",
    "title": "Microservices and testing",
    "presentor": "Abbi Mcdonnell",
    "location": "CoZone and Canteen",
    "date": "16/9/2019",
    "tags": ["API", "Microservices", "Serverless", "Testing", "Architecture"]
  },
  {
    "id": "98ee4bed-ae15-485b-b054-79832e2a7056",
    "title": "Data & Analytics Management Event",
    "presentor": "Kristian Mahoney",
    "location": "CoZone and Canteen",
    "date": "21/9/2020",
    "tags": ["Data science", "Big data", "Analytics", "Hosting"]
  },
  {
    "id": "b66a1d01-3b49-4002-b755-676b47ecd3b9",
    "title": "SAP on Azure Envision Workshops",
    "presentor": "Celine Stubbs",
    "location": "CoZone and Canteen",
    "date": "28/9/2019",
    "tags": ["SAP", "Azure", "Hosting", "Architecture"]
  },
  {
    "id": "97ed5319-3894-407e-ad7c-43f42c00b709",
    "title": "Agile gaming evening",
    "presentor": "Ami Shea",
    "location": "CoZone LR",
    "date": "12/10/2020",
    "tags": ["Gaming", "Agile", "Social"]
  },
  {
    "id": "8903f7f1-a0f0-4df0-8ae3-1e917a442935",
    "title": "Combi IoT/Arduino klusavond",
    "presentor": "Linda Gunn",
    "location": "CoZone LR",
    "date": "2/11/2020",
    "tags": ["IoT", "Arduino"]
  },
  {
    "id": "4ffffb46-0481-42bc-8e4c-c2d63b126781",
    "title": "IoT Microprocessor",
    "presentor": "Linda Gunn",
    "location": "CoZone LR",
    "date": "16/11/2020",
    "tags": ["IoT", "Arduino"]
  },
  {
    "id": "74bc7993-6078-4aae-89e8-03809eca3519",
    "title": "AdvantageYou event:  DevOps",
    "presentor": "Leandro Kumar",
    "location": "CoZone LR",
    "date": "30/11/2020",
    "tags": ["DevOps", "AdvantageYou"]
  },
  {
    "id": "2c3697ec-7461-4215-b9aa-dab87d770887",
    "title": "AdvantageYou: Internet of Things",
    "presentor": "Ethel Holmes",
    "location": "CoZone LR",
    "date": "10/12/2020",
    "tags": ["IoT", "AdvantageYou"]
  },
  {
    "id": "95795e2f-d40d-4236-a0ec-d08cd12080b5",
    "title": "AdvantageYou event: Ethics & AI",
    "presentor": "Ethel Holmes",
    "location": "CoZone LR",
    "date": "3/12/2020",
    "tags": ["Machine learning", "AdvantageYou"]
  },
  {
    "id": "0dd57b0b-8869-4dc2-bd5e-789e25d6f351",
    "title": "AdvantageYou event: Intelligent Automation",
    "presentor": "Linda Gunn",
    "location": "CoZone LR",
    "date": "16/12/2020",
    "tags": ["IoT", "Machine learning", "AdvantageYou"]
  },
  {	
    "id": "60691b8b-0d02-4691-95bc-9b09f64e139c",
    "title":"(Capgemini CSD Java) Radio Kafka: Discussion on Chapter 11-12", 
    "presentor": "jade.eloff@capgemini.com",
    "date":"Thursday, January 7th, 2021", 
    "url": "",
    "tags": ["Java"]
  },
  {	
    "id": "29e1d2cf-094b-4ab8-93cf-78f338e5aaef",
    "title":"How to handle your patterns? IoT/Arduino klusavond (discussion included)", 
    "presentor": "By Bart van Beek & Hans van Rijs",
    "date":"Wednesday, January 13th, 2021: 18:30h – 21:00h", 
    "url": "",
    "tags": ["IoT", "Arduino"]
  },
  {	
    "id": "e97403b7-4a25-401e-a442-3a8e1466bfe6",
    "title":"(Capgemini CSD Java) Radio Kafka: Discussion on Chapter 12-15", 
    "presentor": "jade.eloff@capgemini.com",
    "date":"Thursday, January 14th, 2021", 
    "url": "",
    "tags": ["Java"]
  },
  {	
    "id": "2e397849-0d49-43bc-9768-2e4b96cfbf6b",
    "title":"Practical 3D Graphics & Programming", 
    "presentor": "Quincy Jacobs, Remko Haagsma",
    "date":"Wednesday, January 20th, 2021", 
    "url": "",
    "tags": ["3D", "Graphics", "Animation"]
  },
  {	
    "id": "ed52be4b-0d30-4f92-9dd4-58d82fb92dff",
    "title":".NET 5 + Blazor + Xamarin + Visual Studio 2019 productivity tips", 
    "presentor": "Sina Wahed & Karel Metselaar",
    "date":"Wednesday, February 3rd", 
    "url": "",
    "tags": [".NET", "xamarin", "Blazor", "productivity"]
  },
  {	
    "id": "ff2940d8-4a0f-4690-a5b6-048f3ee1b8df",
    "title":"IoT: Exploring IoT Microprocessors", 
    "presentor": " Martin Brommer",
    "date":"Wednesday, February 10th", 
    "url": "",
    "tags": ["IoT", "Microproceccor"]
  },
  {	
    "id": "80fd77a6-3a40-45d8-b3ba-ad75b0a6ac6f",
    "title":"How to deal with agile startarchitecture", 
    "presentor": "Ben Kooistra & Hans van Rijs",
    "date":"Wednesday, February 3rd", 
    "url": "",
    "tags": ["Architecture", "Agile"]
  },
  {	
    "id": "b7217d9e-b274-4346-b462-f7978b232e82",
    "title":"Building OAUTH2 security with SpringBoot", 
    "presentor": "Bart van Beek",
    "date":"Wednesday, February 17th, 2021", 
    "url": "",
    "tags": ["Security", "OAuth", "Java", "Spring", "Spring Boot"]
  },
  {	
    "id": "c5713ad4-aab8-4494-8526-89bc7e145649",
    "title":"Practical 3D Graphics & Programming", 
    "presentor": "Quincy Jacobs, Remko Haagsma",
    "date":"Wednesday, February 24th, 2021", 
    "url": "",
    "tags": ["3D", "Graphics", "Animation"]
  },
  {	
    "id": "4b3e06e8-965d-43f1-933a-ffcaa749c2a5",
    "title":"IoT/Arduino klusavond", 
    "presentor": "Aishwarya Dhall",
    "date":"Wednesday, March 10th, 2021", 
    "url": "",
    "tags": ["IoT", "Arduino"]
  }
];

function App() {
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  return (
    <>
      <GlobalStyle />
      <div className="app">
        <TagSwipe
          likes={likes}
          dislikes={dislikes}
          setLikes={setLikes}
          setDislikes={setDislikes}
        />
        <EventCardComponent event={displayedEvents[0]}/>
        <Lists
          likes={likes}
          dislikes={dislikes}
          setLikes={setLikes}
          setDislikes={setDislikes}
        />
      </div>
    </>
  );
}

export default App;
