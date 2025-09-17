import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//React Element

// const heading= React.createElement("h1", {id :"heading"},"hi this is heading" )
// const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

//React Element//
// const jsxHeading= (<h1 className="heading" >
//     Namaste react!
//     </h1>)

// console.log(jsxHeading);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//React Functional Component
// const  HeadingComponent=()=>{
//     return (
//         <div>
//             <Title/>
//             {jsxHeading}
//             {Title()}
//             <h2>{console.log("dfguhkjhvhgfdd")}</h2>
//             <h1>Namaste React Funtional component</h1>
//         </div>
//     )
// }
// const Title=()=> (<h1 className="heading" >
//     Namaste react!...
//     </h1>)

// root.render(<HeadingComponent/>)
// const Titles=()=>(
//     <h2>hi iam sneha 2</h2>
// )
// const Funct=()=>{
//     return <div><h1>hi iam sneha!..</h1>
//     {Titles()}
//     </div>
// }

// root.render(Funct());

/*
*Header
-Logo
-links
*Body
-search
-cards container
-cards
   --img
   --name of the res,star rating,cuisine,delivery time etc
*Footer
-copy rights
-adress
links
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
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
    console.log(props);
  const {resData}=props
  
  
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
  className="res-logo"
  alt="res-logo"
  src={
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    resData?.card?.card?.info?.cloudinaryImageId
  }
/>

      <h3>{resData?.card?.card?.info?.name}</h3>
      <h4>{resData?.card?.card?.info?.cuisines.join(" , ")}</h4>
      <h4>{resData?.card?.card?.info?.externalRatings?.aggregatedRating?.rating} Stars</h4>
      <h4>{resData?.card?.card?.info?.sla?.deliveryTime}</h4>
    </div>
  );
};
const resList= [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "705625",
              "name": "Aromas of Biryani",
              "cloudinaryImageId": "9b36a4e176674e135924d86470ad0785",
              "locality": "S T Bed Extension",
              "areaName": "Koramangala",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Tandoor",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "36155",
              "avgRatingString": "4.3",
              "totalRatingsString": "1.7K+",
              "promoted": true,
              "adTrackingId": "cid=32894567~p=0~adgrpid=32894567#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=705624~plpr=COLLECTION~eid=d0f7adb3-cdc1-4b6a-8112-f7a107b14141~srvts=1757844220114~collid=83639",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-15 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "503"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "32894567"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=705624&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "230",
              "name": "Meghana Foods",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "Chinese",
                "Seafood"
              ],
              "avgRating": 4.6,
              "parentId": "635",
              "avgRatingString": "4.6",
              "totalRatingsString": "190K+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-15 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Biryani.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "21K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=229&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "485937",
              "name": "Dindigul Thalappakatti - Since 1957\n",
              "cloudinaryImageId": "cluiug5t7vmz7idrhh82",
              "locality": "Nexus",
              "areaName": "Koramangala",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "South Indian",
                "Biryani",
                "Chinese",
                "North Indian"
              ],
              "avgRating": 4.3,
              "parentId": "641506",
              "avgRatingString": "4.3",
              "totalRatingsString": "2.5K+",
              "promoted": true,
              "adTrackingId": "cid=32909379~p=2~adgrpid=32909379#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=485933~plpr=COLLECTION~eid=a0631f94-d614-41fe-b753-7e1b883ef9df~srvts=1757844220114~collid=83639",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-15 00:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹139"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "32909379"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=485933&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "705624",
              "name": "Aromas of Biryani",
              "cloudinaryImageId": "9b36a4e176674e135924d86470ad0785",
              "locality": "S T Bed Extension",
              "areaName": "Koramangala",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Tandoor",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "36155",
              "avgRatingString": "4.3",
              "totalRatingsString": "1.7K+",
              "promoted": true,
              "adTrackingId": "cid=32894567~p=0~adgrpid=32894567#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=705624~plpr=COLLECTION~eid=d0f7adb3-cdc1-4b6a-8112-f7a107b14141~srvts=1757844220114~collid=83639",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-15 00:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "503"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "32894567"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=705624&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "229",
              "name": "Meghana Foods",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "Chinese",
                "Seafood"
              ],
              "avgRating": 4.6,
              "parentId": "635",
              "avgRatingString": "4.6",
              "totalRatingsString": "190K+",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-15 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  },
                  {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      },
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Biryani.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "21K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=229&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "485933",
              "name": "Dindigul Thalappakatti - Since 1957\n",
              "cloudinaryImageId": "cluiug5t7vmz7idrhh82",
              "locality": "Nexus",
              "areaName": "Koramangala",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "South Indian",
                "Biryani",
                "Chinese",
                "North Indian"
              ],
              "avgRating": 4.3,
              "parentId": "641506",
              "avgRatingString": "4.3",
              "totalRatingsString": "2.5K+",
              "promoted": true,
              "adTrackingId": "cid=32909379~p=2~adgrpid=32909379#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=485933~plpr=COLLECTION~eid=a0631f94-d614-41fe-b753-7e1b883ef9df~srvts=1757844220114~collid=83639",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-15 00:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹139"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "32909379"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=485933&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "251194",
              "name": "Chickpet donne biriyani house",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/1/bf5549d7-78a8-475a-aa3c-334156b5f038_bbc71567-3a06-4867-83cf-daf3b5770353.jpg",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Biryani"
              ],
              "avgRating": 4.3,
              "parentId": "243696",
              "avgRatingString": "4.3",
              "totalRatingsString": "8.5K+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-14 16:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ],
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x"
                        }
                      }
                    ]
                  },
                  "textBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "3.8",
                  "ratingCount": "2.0K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=251194&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1062017",
              "name": "KOMBOZZ by Thalappakatti",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/20/133914a4-e08a-4b66-b4fd-cc93684587e4_7f4a401f-5e31-4705-b625-8360c87bfd72.jpg",
              "locality": "Forum mall koramangala",
              "areaName": "BTM Layout",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "Chinese",
                "Biryani",
                "Desserts",
                "South Indian",
                "Beverages",
                "North Indian",
                "Combos"
              ],
              "avgRating": 4.4,
              "parentId": "616357",
              "avgRatingString": "4.4",
              "totalRatingsString": "153",
              "promoted": true,
              "adTrackingId": "cid=32909418~p=3~adgrpid=32909418#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1062017~plpr=COLLECTION~eid=b88f83a0-1513-4e36-8801-6871b62af8ee~srvts=1757844220114~collid=83639",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-15 00:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "32909418"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1062017&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "31627",
              "name": "Hyderabad Biryaani House",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/10/26/4db82f98-52c0-4936-9263-c06e6041735f_66928758-3d08-4443-8b9e-b7793c519bbf.jpg",
              "locality": "7th Block",
              "areaName": "Koramangala",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Chinese",
                "Tandoor"
              ],
              "avgRating": 4.2,
              "parentId": "2403",
              "avgRatingString": "4.2",
              "totalRatingsString": "31K+",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-14 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "3.1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=31627&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "108097",
              "name": "Ambur Star Briyani Since 1890",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/0f26fc1d-4055-4700-84df-503c9473ea59_049e26a5-47b6-4c7a-85a5-7e4159f254ff.jpg",
              "locality": "2nd Stage",
              "areaName": "BTM Layout",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Chettinad",
                "Andhra",
                "Beverages",
                "Seafood"
              ],
              "avgRating": 4.5,
              "parentId": "21400",
              "avgRatingString": "4.5",
              "totalRatingsString": "23K+",
              "promoted": true,
              "adTrackingId": "cid=32891905~p=5~adgrpid=32891905#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=108097~plpr=COLLECTION~eid=560b8ba6-bd08-45a8-8f43-8518324e4bbf~srvts=1757844220114~collid=83639",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-09-15 00:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x"
                        }
                      }
                    ]
                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹39",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "32891905"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=108097&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ]
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
       {
        resList.map((ele,index)=>(
            <RestaurantCard  key={ele.card?.card?.info?.id || index}   resData={ele}/>
        ))
       }

      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
