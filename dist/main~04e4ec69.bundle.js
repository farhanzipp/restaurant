(()=>{"use strict";var r,n={756:(r,n,A)=>{A.d(n,{Z:()=>o});var e=A(537),i=A.n(e),t=A(645),a=A.n(t)()(i());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]),a.push([r.id,":root {\r\n  --primary: #617A55;\r\n  --primary-variant: #A4D0A4;\r\n  --secondary: #F7E1AE;\r\n  --secondary-variant: #FFF8D6;\r\n  --light: #fff;\r\n  --dark: #333;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-color: azure;\r\n}\r\n\r\n/*\r\n * Skip to Content\r\n */\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -80px;\r\n  left: 0;\r\n  padding: 1rem;\r\n  background-color: var(--primary-variant);\r\n  color: var(--dark);\r\n  font-size: 2rem;\r\n  text-decoration: none;\r\n  z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n  margin: 1rem;\r\n}\r\n\r\n/*\r\n * Navigation\r\n */\r\n\r\napp-bar {\r\n  padding: 0.5rem 2rem;\r\n  background-color: var(--primary);\r\n  color: var(--light);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.nav-brand {\r\n  font-family: 'Lobster', cursive;\r\n  font-size: 44px;\r\n  user-select: none;\r\n}\r\n\r\n.nav-drawer {\r\n  position: fixed;\r\n  top: 0px;\r\n  right: -150px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 1rem;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.nav-drawer.open {\r\n  right: 0;\r\n}\r\n\r\n.nav-drawer ul li a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: black;\r\n  padding: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.nav-drawer ul li a:hover {\r\n  color: var(--secondary);\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n#nav-button {\r\n  background-color: transparent;\r\n  color: var(--light);\r\n  border: none;\r\n  font-size: 2rem;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n * Jumbotron\r\n */\r\n\r\napp-hero {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 400px;\r\n  width: 100%;\r\n}\r\n\r\npicture {\r\n  width: 100%;\r\n}\r\n\r\npicture img {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  min-height: 400px;\r\n}\r\n\r\n.hero-inner {\r\n  position: absolute;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.hero-title {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  font-size: 36px;\r\n}\r\n\r\n.hero-tagline {\r\n  color: #fff;\r\n  margin-top: 16px;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n}\r\n\r\n.section-title {\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  color: var(--primary);\r\n}\r\n\r\n#main-content,\r\n.content {\r\n  min-height: 100vh;\r\n}\r\n\r\n.favorite-not-found,\r\n.page-not-found h1 {\r\n  margin: 5rem auto;\r\n}\r\n\r\n.favorite-not-found {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n/*\r\n * Cards\r\n */\r\n\r\n.card-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.card {\r\n  border: 1px solid transparent;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  background-color: #fff;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  flex-basis: 100%;\r\n  color: var(--dark);\r\n  text-decoration: none;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 var(--dark);\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.card-img-wrapper {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-img  {\r\n  width: 100%;\r\n  height: 150px;\r\n  object-fit: cover;\r\n}\r\n\r\n.card-label {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 8px;\r\n  background-color: var(--primary);\r\n  color: var(--light);\r\n  padding: 4px;\r\n  font-size: 0.7rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.card-title {\r\n  margin: 0.5rem 0 0.2rem 0;\r\n  padding: 5px 0;\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.card-title a {\r\n  text-decoration: none;\r\n  color: var(--dark);\r\n  padding: 10px 0;\r\n}\r\n\r\n.card-title a:hover {\r\n  color: var(--primary);\r\n}\r\n\r\n.fa-star {\r\n  margin: 0 1px;\r\n}\r\n\r\n.card-rating {\r\n  color: grey;\r\n  user-select: none;\r\n}\r\n\r\n.star {\r\n  width: 10px;\r\n  height: 10px;\r\n  color: gold;\r\n  margin-right: 4px;\r\n}\r\n\r\n.star-half {\r\n    background: linear-gradient(to right, gold 50%, lightgrey 50%);\r\n    -webkit-background-clip: text;\r\n    -moz-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n}\r\n\r\n.star-empty {\r\n  width: 10px;\r\n  height: 10px;\r\n  color: lightgrey;\r\n}\r\n\r\n.card-description {\r\n  height: 70px;\r\n  overflow: hidden;\r\n  margin: 1rem 0 0.5rem 0;\r\n  font-size: 1rem;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n  user-select: none;\r\n}\r\n\r\n.read-more {\r\n  font-size: 0.8rem;\r\n  margin-top: 22px;\r\n  padding: 1rem 0;\r\n  color: grey;\r\n  font-style: italic;\r\n}\r\n\r\n/*\r\n * Detail Page\r\n */\r\n\r\n.detail {\r\n  padding: 1rem;\r\n  min-height: 100vh;\r\n}\r\n\r\n.detail-wrapper p {\r\n  margin-top: 5px;\r\n}\r\n\r\n.detail-img {\r\n  width: 100%;\r\n}\r\n\r\n.detail-title {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.detail-section {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.detail-section h3 {\r\n  text-align: center;\r\n  font-family: 'Lobster', cursive;\r\n}\r\n\r\n.detail-description {\r\n  text-align: justify; \r\n}\r\n\r\n.menu-list {\r\n  margin: 0.5rem 0 0.5rem 2rem;\r\n}\r\n\r\n.review-card {\r\n  background-color: var(--light);\r\n  box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.09);\r\n  -webkit-box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.09);\r\n  -moz-box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.09);\r\n  list-style: none;\r\n  padding: 7px;\r\n  margin: 5px 0;\r\n}\r\n\r\n.review-date {\r\n  color: lightslategray;\r\n  font-size: 10px;\r\n  margin: 0px !important;\r\n}\r\n\r\n.review-text {\r\n  font-size: 14px;\r\n}\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  \r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\nfooter {\r\n  padding: 1rem;\r\n  background-color: var(--dark) !important;\r\n  color: var(--light);\r\n  text-align: center;\r\n}\r\n\r\n/* Tablet */\r\n@media screen and (min-width: 480px) {\r\n  .nav-brand {\r\n    font-size: 2rem;\r\n    padding-top: 8px;\r\n  }\r\n\r\n  .nav-drawer {\r\n    position: static;\r\n    width: 100%;\r\n    background-color: transparent;\r\n    padding: 0;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .nav-drawer ul {\r\n   display: flex;\r\n   justify-content: end;\r\n   list-style: none;\r\n  }\r\n\r\n  .nav-drawer ul li a {\r\n    color: var(--light);\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  #nav-button {\r\n    display: none;\r\n  }\r\n\r\n  .card {\r\n    flex-basis: calc(50% - 32px);\r\n  }\r\n\r\n  .detail-wrapper {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    gap: 10px;\r\n  }\r\n\r\n  .detail-img {\r\n    grid-column: 1/2;\r\n  }\r\n\r\n  .detail-info {\r\n    grid-column-start: 2;\r\n  }\r\n\r\n  .detail-section h3 {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .detail-description,\r\n  .detail-menu,\r\n  .detail-review {\r\n    grid-column: 1/3;\r\n  }\r\n\r\n  .detail-menu {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .detail-menu h3 {\r\n    grid-column: 1/3;\r\n  }\r\n\r\n  .detail-menu h4 {\r\n    text-align: center;\r\n  }\r\n\r\n  .foods {\r\n    grid-column-start: 1;\r\n  }\r\n\r\n  .review-card {\r\n    width: 50%;\r\n    margin: 10px auto;\r\n  }\r\n}\r\n\r\n/* Desktop */\r\n@media screen and (min-width: 768px) {\r\n  .nav-bar {\r\n    padding: 0.5rem 10%;\r\n  }\r\n\r\n  .card {\r\n    flex-basis: calc(33.33% - 32px);\r\n  }\r\n}\r\n\r\n/* XL */\r\n@media screen and (min-width: 1200px) {\r\n  nav {\r\n    padding: 0.5rem 20vw;\r\n  }\r\n\r\n  app-bar {\r\n    padding: 0.5rem 20%;\r\n  }\r\n\r\n  main {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  app-hero {\r\n    min-width: 1000px;\r\n  }\r\n\r\n  picture img {\r\n    height: 500px;\r\n  }\r\n\r\n  .hero-title {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .hero-tagline {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .section-title {\r\n    font-size: 1.7rem;\r\n    margin: 2rem 0;\r\n  }\r\n\r\n  .card-img  {\r\n    height: 250px;\r\n  }\r\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n\r\n:root {\r\n  --primary: #617A55;\r\n  --primary-variant: #A4D0A4;\r\n  --secondary: #F7E1AE;\r\n  --secondary-variant: #FFF8D6;\r\n  --light: #fff;\r\n  --dark: #333;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-color: azure;\r\n}\r\n\r\n/*\r\n * Skip to Content\r\n */\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -80px;\r\n  left: 0;\r\n  padding: 1rem;\r\n  background-color: var(--primary-variant);\r\n  color: var(--dark);\r\n  font-size: 2rem;\r\n  text-decoration: none;\r\n  z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n  margin: 1rem;\r\n}\r\n\r\n/*\r\n * Navigation\r\n */\r\n\r\napp-bar {\r\n  padding: 0.5rem 2rem;\r\n  background-color: var(--primary);\r\n  color: var(--light);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.nav-brand {\r\n  font-family: 'Lobster', cursive;\r\n  font-size: 44px;\r\n  user-select: none;\r\n}\r\n\r\n.nav-drawer {\r\n  position: fixed;\r\n  top: 0px;\r\n  right: -150px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 1rem;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.nav-drawer.open {\r\n  right: 0;\r\n}\r\n\r\n.nav-drawer ul li a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: black;\r\n  padding: 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.nav-drawer ul li a:hover {\r\n  color: var(--secondary);\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n#nav-button {\r\n  background-color: transparent;\r\n  color: var(--light);\r\n  border: none;\r\n  font-size: 2rem;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n * Jumbotron\r\n */\r\n\r\napp-hero {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 400px;\r\n  width: 100%;\r\n}\r\n\r\npicture {\r\n  width: 100%;\r\n}\r\n\r\npicture img {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  min-height: 400px;\r\n}\r\n\r\n.hero-inner {\r\n  position: absolute;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.hero-title {\r\n  color: #fff;\r\n  font-weight: 500;\r\n  font-size: 36px;\r\n}\r\n\r\n.hero-tagline {\r\n  color: #fff;\r\n  margin-top: 16px;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n}\r\n\r\n.section-title {\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  color: var(--primary);\r\n}\r\n\r\n#main-content,\r\n.content {\r\n  min-height: 100vh;\r\n}\r\n\r\n.favorite-not-found,\r\n.page-not-found h1 {\r\n  margin: 5rem auto;\r\n}\r\n\r\n.favorite-not-found {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n/*\r\n * Cards\r\n */\r\n\r\n.card-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.card {\r\n  border: 1px solid transparent;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  background-color: #fff;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  flex-basis: 100%;\r\n  color: var(--dark);\r\n  text-decoration: none;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 var(--dark);\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.card-img-wrapper {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.card-img  {\r\n  width: 100%;\r\n  height: 150px;\r\n  object-fit: cover;\r\n}\r\n\r\n.card-label {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 8px;\r\n  background-color: var(--primary);\r\n  color: var(--light);\r\n  padding: 4px;\r\n  font-size: 0.7rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.card-title {\r\n  margin: 0.5rem 0 0.2rem 0;\r\n  padding: 5px 0;\r\n  font-size: 1.2rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.card-title a {\r\n  text-decoration: none;\r\n  color: var(--dark);\r\n  padding: 10px 0;\r\n}\r\n\r\n.card-title a:hover {\r\n  color: var(--primary);\r\n}\r\n\r\n.fa-star {\r\n  margin: 0 1px;\r\n}\r\n\r\n.card-rating {\r\n  color: grey;\r\n  user-select: none;\r\n}\r\n\r\n.star {\r\n  width: 10px;\r\n  height: 10px;\r\n  color: gold;\r\n  margin-right: 4px;\r\n}\r\n\r\n.star-half {\r\n    background: linear-gradient(to right, gold 50%, lightgrey 50%);\r\n    -webkit-background-clip: text;\r\n    -moz-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n}\r\n\r\n.star-empty {\r\n  width: 10px;\r\n  height: 10px;\r\n  color: lightgrey;\r\n}\r\n\r\n.card-description {\r\n  height: 70px;\r\n  overflow: hidden;\r\n  margin: 1rem 0 0.5rem 0;\r\n  font-size: 1rem;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n  user-select: none;\r\n}\r\n\r\n.read-more {\r\n  font-size: 0.8rem;\r\n  margin-top: 22px;\r\n  padding: 1rem 0;\r\n  color: grey;\r\n  font-style: italic;\r\n}\r\n\r\n/*\r\n * Detail Page\r\n */\r\n\r\n.detail {\r\n  padding: 1rem;\r\n  min-height: 100vh;\r\n}\r\n\r\n.detail-wrapper p {\r\n  margin-top: 5px;\r\n}\r\n\r\n.detail-img {\r\n  width: 100%;\r\n}\r\n\r\n.detail-title {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.detail-section {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.detail-section h3 {\r\n  text-align: center;\r\n  font-family: 'Lobster', cursive;\r\n}\r\n\r\n.detail-description {\r\n  text-align: justify; \r\n}\r\n\r\n.menu-list {\r\n  margin: 0.5rem 0 0.5rem 2rem;\r\n}\r\n\r\n.review-card {\r\n  background-color: var(--light);\r\n  box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.09);\r\n  -webkit-box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.09);\r\n  -moz-box-shadow: 2px 3px 2px 0px rgba(0,0,0,0.09);\r\n  list-style: none;\r\n  padding: 7px;\r\n  margin: 5px 0;\r\n}\r\n\r\n.review-date {\r\n  color: lightslategray;\r\n  font-size: 10px;\r\n  margin: 0px !important;\r\n}\r\n\r\n.review-text {\r\n  font-size: 14px;\r\n}\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  \r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\nfooter {\r\n  padding: 1rem;\r\n  background-color: var(--dark) !important;\r\n  color: var(--light);\r\n  text-align: center;\r\n}\r\n\r\n/* Tablet */\r\n@media screen and (min-width: 480px) {\r\n  .nav-brand {\r\n    font-size: 2rem;\r\n    padding-top: 8px;\r\n  }\r\n\r\n  .nav-drawer {\r\n    position: static;\r\n    width: 100%;\r\n    background-color: transparent;\r\n    padding: 0;\r\n    box-shadow: none;\r\n  }\r\n  \r\n  .nav-drawer ul {\r\n   display: flex;\r\n   justify-content: end;\r\n   list-style: none;\r\n  }\r\n\r\n  .nav-drawer ul li a {\r\n    color: var(--light);\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  #nav-button {\r\n    display: none;\r\n  }\r\n\r\n  .card {\r\n    flex-basis: calc(50% - 32px);\r\n  }\r\n\r\n  .detail-wrapper {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    gap: 10px;\r\n  }\r\n\r\n  .detail-img {\r\n    grid-column: 1/2;\r\n  }\r\n\r\n  .detail-info {\r\n    grid-column-start: 2;\r\n  }\r\n\r\n  .detail-section h3 {\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  .detail-description,\r\n  .detail-menu,\r\n  .detail-review {\r\n    grid-column: 1/3;\r\n  }\r\n\r\n  .detail-menu {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .detail-menu h3 {\r\n    grid-column: 1/3;\r\n  }\r\n\r\n  .detail-menu h4 {\r\n    text-align: center;\r\n  }\r\n\r\n  .foods {\r\n    grid-column-start: 1;\r\n  }\r\n\r\n  .review-card {\r\n    width: 50%;\r\n    margin: 10px auto;\r\n  }\r\n}\r\n\r\n/* Desktop */\r\n@media screen and (min-width: 768px) {\r\n  .nav-bar {\r\n    padding: 0.5rem 10%;\r\n  }\r\n\r\n  .card {\r\n    flex-basis: calc(33.33% - 32px);\r\n  }\r\n}\r\n\r\n/* XL */\r\n@media screen and (min-width: 1200px) {\r\n  nav {\r\n    padding: 0.5rem 20vw;\r\n  }\r\n\r\n  app-bar {\r\n    padding: 0.5rem 20%;\r\n  }\r\n\r\n  main {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  app-hero {\r\n    min-width: 1000px;\r\n  }\r\n\r\n  picture img {\r\n    height: 500px;\r\n  }\r\n\r\n  .hero-title {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .hero-tagline {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .section-title {\r\n    font-size: 1.7rem;\r\n    margin: 2rem 0;\r\n  }\r\n\r\n  .card-img  {\r\n    height: 250px;\r\n  }\r\n}"],sourceRoot:""}]);const o=a},46:(r,n,A)=>{var e=A(379),i=A.n(e),t=A(795),a=A.n(t),o=A(569),E=A.n(o),d=A(565),p=A.n(d),l=A(216),B=A.n(l),C=A(589),g=A.n(C),s=A(756),c={};c.styleTagTransform=g(),c.setAttributes=p(),c.insert=E().bind(null,"head"),c.domAPI=a(),c.insertStyleElement=B(),i()(s.Z,c),s.Z&&s.Z.locals&&s.Z.locals}},A={};function e(r){var i=A[r];if(void 0!==i)return i.exports;var t=A[r]={id:r,exports:{}};return n[r](t,t.exports,e),t.exports}e.m=n,r=[],e.O=(n,A,i,t)=>{if(!A){var a=1/0;for(p=0;p<r.length;p++){for(var[A,i,t]=r[p],o=!0,E=0;E<A.length;E++)(!1&t||a>=t)&&Object.keys(e.O).every((r=>e.O[r](A[E])))?A.splice(E--,1):(o=!1,t<a&&(a=t));if(o){r.splice(p--,1);var d=i();void 0!==d&&(n=d)}}return n}t=t||0;for(var p=r.length;p>0&&r[p-1][2]>t;p--)r[p]=r[p-1];r[p]=[A,i,t]},e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var A in n)e.o(n,A)&&!e.o(r,A)&&Object.defineProperty(r,A,{enumerable:!0,get:n[A]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r={479:0};e.O.j=n=>0===r[n];var n=(n,A)=>{var i,t,[a,o,E]=A,d=0;if(a.some((n=>0!==r[n]))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(E)var p=E(e)}for(n&&n(A);d<a.length;d++)t=a[d],e.o(r,t)&&r[t]&&r[t][0](),r[t]=0;return e.O(p)},A=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];A.forEach(n.bind(null,0)),A.push=n.bind(null,A.push.bind(A))})(),e.nc=void 0;var i=e.O(void 0,[946,2,578,334,291],(()=>e(253)));i=e.O(i)})();
//# sourceMappingURL=main~04e4ec69.bundle.js.map