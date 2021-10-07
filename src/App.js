import React from "react";
import "./styles.css";
import { useState } from "react";

const FoodGroup = {
  "Street Food": [
    {
      name: "Vada Pav:",
      rating: "4/5",
      summary:
        "The dish consists of a deep fried potato dumpling placed inside a bread bun (pav) sliced almost in half through the middle."
    },
    {
      name: "Pani Puri:",
      rating: "4/5",
      summary:
        "This dish consists of a hollow, crispy-fried puffed ball that is filled with potato, chickpeas, onions, spices, and flavoured water, usually tamarind or mint, and popped into one's mouth whole."
    },
    {
      name: "Shev Puri:",
      rating: "4/5",
      summary:
        "Sev Puri is made with crispy puri topped with potatoes, onions, tomatoes and a variety of chutneys, and finished with sev."
    },
    {
      name: "Misal Pav:",
      rating: "4/5",
      summary:
        "Misal Pav consists of Pav and Misal which is a curry made of a whole lot of eclectic spices, onion, garlic, ginger and chillies.This curry is then topped with boiled potatoes, chiwda, sev, chopped onions, coriander, green chillies."
    },
    {
      name: "Pav Bhaji:",
      rating: "4/5",
      summary:
        "Pav Bhaji consists of a vegetable curry (bhaji) cooked in tomato gravy and served with a soft bread roll (pav)."
    }
  ],

  "South Indian": [
    {
      name: "Masala Dosa:",
      rating: "4/5",
      summary:
        "It is a light, soft and crispy crepes stuffed with a savory, wonderfully spiced potato and onion filling. Eaten with Chutney and/or Sambhar."
    },
    {
      name: "Idli Sambhar:",
      rating: "3.5/5",
      summary:
        "Idli is made of fermented rice and black gram batter and steamed in molds. Sambar is a vegateable curry with lentil base."
    },
    {
      name: "Mendu Vada:",
      rating: "3.5/5",
      summary:
        "A fritter made from Vigna mungo (black lentil or urad dal). It is usually made in a doughnut shape, with a crispy exterior and soft interior."
    }
  ],

  Foreign: [
    {
      name: "Hakka Noodles:",
      rating: "3.5/5",
      summary:
        "They are Indian-Chinese style noodles made with unleavened refined wheat flour. These are boiled al dente and then stir fried in a Chinese wok with oil, vegetables & soya sauce."
    },
    {
      name: "Pizza:",
      rating: "3.5/5",
      summary:
        "Pizza is a dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings and baked."
    },
    {
      name: "Burger:",
      rating: "3.5/5",
      summary:
        "It is typically considered a sandwich, consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled."
    }
  ]
};

export default function App() {
  const [SelectedType, setType] = useState("Street Food");
  function FoodTypeClickHandler(FoodType) {
    setType(FoodType);
  }

  return (
    <div className="App">
      <h1> 😋 Good Food </h1>
      <p style={{ fontSize: "large" }}>
        {" "}
        Check out my Favourite Food Dishes. Select a Type.{" "}
      </p>

      <div>
        {Object.keys(FoodGroup).map((FoodType) => (
          <button
            onClick={() => FoodTypeClickHandler(FoodType)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "2px solid black",
              margin: "1rem 1rem"
            }}
          >
            {FoodType}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {FoodGroup[SelectedType].map((Food) => (
            <li
              key={Food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",

                width: "70%",
                margin: "1rem 12rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", fontWeight: "bold" }}>
                {" "}
                {Food.name}{" "}
              </div>
              <div style={{ fontSize: "large", margin: "0.5rem" }}>
                {" "}
                {Food.rating}{" "}
              </div>
              <div style={{ fontSize: "large" }}> {Food.summary} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
