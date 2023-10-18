import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// heading is an react element that is basically javascript object.
// console.log(heading); // it will return javascript object.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// this render methon is basically responsible for taking this onject and converting it into a h1 tag.

/* 
Create something like this in react.
<div>
  <div>
    <h1>Hi I'm an h1 tag</h1>
  </div>
</div>

*/

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hi There I'm a h1 tag"),
//     React.createElement("h2", {}, "Hi There I'm a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hi There I'm a h1 tag"),
//     React.createElement("h2", {}, "Hi There I'm a h2 tag"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is a React Element."
// );

// JSX- HTML/XLM like syntax
//JSX (transpiled before it reaches the JS)- PARCEL - Babel
// JSX => React.createElement => ReactElement- JS Object => HTMLElement(render)
// const jsxHeading = <h1 className="head">This is React Element using JSX.</h1>;
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//React Component- Javascript Function which return some piece of JSX
//=> Class Based
//=> Funtional Based

// Functional Based Component

// const Title = () => {
//   return (
//     <div id="container">
//       <h1>This is a React Title</h1>;
//     </div>
//   );
// };
// const title = (
//   <div>
//     <Title />
//     <h1 className="head" tabIndex="5">
//       Hi There
//     </h1>
//   </div>
// );

// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {Title()}
//       <Title />
//       <Title></Title>
//       {title}
//       {/* Component composition */}
//       <h1>This is a React Component</h1>;
//     </div>
//   );
// };

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="app-logo"
          className="app-logo"
          src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resObj?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "43836",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-18 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "570511",
      name: "Bakingo",
      cloudinaryImageId: "qwbqggsxzw86vgk60c9c",
      locality: "MV Jayanthi Road",
      areaName: "Vasanth Nagar",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "570511",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4200,
      },
      parentId: "3818",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-18 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bakingo-mv-jayanthi-road-vasanth-nagar-bangalore-570511",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "5938",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Tasker Town",
      areaName: "Shivaji Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "5938",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-18 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "588619",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Brigade Rd",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "588619",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-18 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-brigade-rd-ashok-nagar-bangalore-588619",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "312660",
      name: "Samosa Party",
      cloudinaryImageId: "ixgxvfu6ggvw1w1awgr1",
      locality: "Brigade Road",
      areaName: "Brigade Road",
      costForTwo: "₹150 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Chaat",
        "North Indian",
        "Street Food",
        "Sweets",
        "Desserts",
        "Punjabi",
        "Bakery",
      ],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "312660",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "6364",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-17 22:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/samosa-party-brigade-road-bangalore-312660",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "23847",
      name: "Domino's Pizza",
      cloudinaryImageId: "fjqcvqfgqlw6h0atques",
      locality: "Rest House Road",
      areaName: "Brigade Road",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "23847",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-17 22:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "281469",
      name: "Lavonne",
      cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
      locality: "St. Marks Road",
      areaName: "St. Marks Road",
      costForTwo: "₹750 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "281469",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "10530",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "14 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-17 22:40:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "15870",
      name: "All Saints Bakery",
      cloudinaryImageId: "yij33zwbu97ulmh9yymy",
      locality: "Brigade Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Snacks", "Desserts"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "15870",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "21659",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-17 19:10:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/all-saints-bakery-brigade-road-ashok-nagar-bangalore-15870",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "739040",
      name: "Restaurant Chef Pillai",
      cloudinaryImageId: "475688804b4b6086854d60b3a68440e7",
      locality: "Ashok Nagar",
      areaName: "Central Bangalore",
      costForTwo: "₹1400 for two",
      cuisines: ["South Indian", "Seafood"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "739040",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "318016",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "ABOVE ₹1500",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-8c4c8672-13bb-42be-9d1c-53963d53e85a",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/restaurant-chef-pillai-ashok-nagar-central-bangalore-bangalore-739040",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-conainer">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
        {/* <RestaurantCard resObj={resList[0]} />
        <RestaurantCard resObj={resList[1]} />
        <RestaurantCard resObj={resList[2]} />
        <RestaurantCard resObj={resList[3]} />
        <RestaurantCard resObj={resList[4]} />
        <RestaurantCard resObj={resList[5]} />
        <RestaurantCard resObj={resList[6]} />
        <RestaurantCard resObj={resList[7]} />
        <RestaurantCard resObj={resList[8]} /> */}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
