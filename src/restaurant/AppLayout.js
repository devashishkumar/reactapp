import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src="data:image/png;base64,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" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  );
};

const restaurantCardStyle = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card" style={restaurantCardStyle}>
            <img className="res-logo" src="data:image/jpeg;base64,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" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    );
};

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    })
                }
            </div>
        </div>
    );
};

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <Header />
            <BodyComponent />
        </div>
    );
};

root.render(<AppLayoutComponent />);


const resList = [
    {
      "info": {
        "id": "65797",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "r4ufflqojich0r29efvc",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "65797",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "371281",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 04:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "7th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": ["Burgers", "American"],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "5934",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 05:05:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-7th-block-koramangala-bangalore-5934",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23682",
        "name": "McDonald's",
        "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
        "locality": "7TH Sector",
        "areaName": "HSR Layout",
        "costForTwo": "₹400 for two",
        "cuisines": ["Burgers", "Beverages", "Cafe", "Desserts"],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "23682",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4900
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4900
        },
        "parentId": "630",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 03:45:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-7th-sector-hsr-layout-bangalore-23682",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "390621",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "erthy4fufoubazvpbzow",
        "locality": "KODICHIKKANAHALLI",
        "areaName": "Bommanahalli",
        "costForTwo": "₹200 for two",
        "cuisines": ["Waffle", "Desserts", "Ice Cream"],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "390621",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 6600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6600
        },
        "parentId": "2233",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-kodichikkanahalli-bommanahalli-bangalore-390621",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "425",
        "name": "Hotel Empire",
        "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹450 for two",
        "cuisines": ["North Indian", "Kebabs", "Biryani"],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "425",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "475",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 05:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-empire-koramangala-bangalore-425",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "93741",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "The Nexus Mall",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": ["Salads", "Snacks", "Desserts", "Beverages"],
        "avgRating": 3.7,
        "feeDetails": {
          "restaurantId": "93741",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "2",
        "avgRatingString": "3.7",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-the-nexus-mall-koramangala-bangalore-93741",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10576",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": ["Pizzas"],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "10576",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "721",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "334475",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "334475",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4100
        },
        "parentId": "547",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 02:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-2nd-stage-btm-layout-bangalore-334475",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "75966",
        "name": "Kaati Zone Rolls & Wraps",
        "cloudinaryImageId": "ibmfw10arqzrdibq03mt",
        "locality": "KHB Colony",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Fast Food",
          "Bengali",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "75966",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "248306",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 05:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-khb-colony-koramangala-bangalore-75966",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68144",
        "name": "WarmOven Cake & Desserts",
        "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "68144",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "9696",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 05:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-6th-block-koramangala-bangalore-68144",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68142",
        "name": "Indiana Burgers",
        "cloudinaryImageId": "sqj2kcjjx6n0ng6te1hp",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "68142",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "5714",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 05:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/indiana-burgers-6th-block-koramangala-bangalore-68142",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "506324",
        "name": "Louis Burger",
        "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
        "locality": "6Th Block, Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": ["Burgers", "American", "Fast Food"],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "506324",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "22485",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 04:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/louis-burger-6th-block-koramangala-bangalore-506324",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "375041",
        "name": "Andhra Gunpowder",
        "cloudinaryImageId": "byilgyrcfz690ryoasww",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": ["Andhra", "Biryani", "South Indian"],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "375041",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "10496",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 0.1,
          "serviceability": "SERVICEABLE",
          "slaString": "15 mins",
          "lastMileTravelString": "0.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-6th-block-koramangala-bangalore-375041",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68137",
        "name": "Cupcake Bliss Cake & Desserts",
        "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
        "locality": "6Th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "68137",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "66732",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 05:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-6th-block-koramangala-bangalore-68137",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "18973",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
        "locality": "Koramangala",
        "areaName": "Koramangala 4-B Block",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "18973",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "2120",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "17 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 02:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-koramangala-4-b-block-bangalore-18973",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "444178",
        "name": "Magnolia Bakery",
        "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
        "locality": "JK Plaza",
        "areaName": "Indiranagar",
        "costForTwo": "₹500 for two",
        "cuisines": ["Bakery", "Desserts", "Ice Cream"],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "444178",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 6600
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6600
        },
        "parentId": "267303",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/magnolia-bakery-jk-plaza-indiranagar-bangalore-444178",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "407064",
        "name": "Momo Zone - The Momo Company",
        "cloudinaryImageId": "8c6d80411d9355da849a2e484bb1c7c1",
        "locality": "KHB Colony",
        "areaName": "Koramangala",
        "costForTwo": "₹150 for two",
        "cuisines": ["Chinese", "Tibetan", "Fast Food"],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "407064",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "382343",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 05:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-khb-colony-koramangala-bangalore-407064",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "52954",
        "name": "Faasos - Wraps & Rolls",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Jakkasandra",
        "areaName": "Hsr Layout 5th Sector",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "52954",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "21809",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-jakkasandra-hsr-layout-5th-sector-bangalore-52954",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "125956",
        "name": "Glen's Bakehouse",
        "cloudinaryImageId": "whfviizdgvwg0uwfk8dy",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Desserts",
          "Bakery",
          "Beverages",
          "Continental",
          "Italian"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "125956",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "3220",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "15 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 00:30:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/glens-bakehouse-6th-block-koramangala-bangalore-125956",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "8244",
        "name": "Polar Bear Ice Cream Sundaes",
        "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": ["Ice Cream", "Desserts"],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "8244",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "726",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "14 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-07-30 04:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "D",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "https://www.swiggy.com/restaurants/polar-bear-ice-cream-sundaes-6th-block-koramangala-bangalore-8244",
        "type": "WEBLINK"
      }
    }
  ];