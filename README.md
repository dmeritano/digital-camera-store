## DIGITAL CAMERA STORE APP

## React/NextJs Application

It simulates a camera store and uses a Strapi Headless CMS backend as a data source, deployed on Heroku

The backend project is here on Github, repository `digital-camera-store-backend` and in the README.md file of that repository are all the details of that installation


<u>FrontEnd Application Details</u>

* Main packages and their versions::
```json
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    ".........": "......",
    ".........": "......"    
   }
```
* Bootstrapped with *create-next-app*
* CSS Modules
* Dinamyc Routing
* Custom error(404) page
* Friendly URL conversion (blog entries) for SEO (implemented on strapi)
* Backend Strapi API consumption (methods):
  * getServerSideProps
  * getStaticProps with getStaticPaths


### Environment Varialbles (.env)

* STRAPI_API_URL=backend_url_api


