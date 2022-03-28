## DIGITAL CAMERA STORE APP

## React/NextJs Application

It simulates a camera store and uses a *Strapi Headless CMS Backend* as a data source, deployed on Heroku.

<u>**Deployed application URL**</u> [DCS App](https://dmeritano-dcs-frontend.netlify.app)

The backend project is here on Github, repository `digital-camera-store-backend` and in the README.md file of that repository are all the details of that installation

<u>FrontEnd Application Details</u>

* Main packages and their versions::
```json
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
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


## Deploying App on Netlify

* Create an free account in Netlify
* Install Netlify CLI  (globally)
  * `$ npm install -g netlify-cli`
* Login
  * `ntl login`
* Move to your project folder
* Init as Netlify Repository
  * `ntl init`
    * Create & configure a new site
    * Choose a unique site name (your_site_and_app_name)

      > Site Created
      >
      > Admin URL: https://app.netlify.com/sites/your_site_and_app_name
      >
      > URL: https://your_site_and_app_name.netlify.app
      >
      > Site ID:   db549873-x1b2c3-ya112-9cbd-abdsde32332

Netlify CLI needs access to your GitHub account to configure Webhooks and Deploy Keys. What would you like to do? 

  * Authorize with GitHub through app.netlify.com

Your build command (hugo build/yarn run build/etc):
  * next build

Directory to deploy (blank for current dir): 
  * .next

Netlify functions folder
  * netlify/functions

Seems like this is a Next.js site. We're going to install this Build Plugin: Essential Next.js plugin. OK to install?
  * Yes

No netlify.toml detected. Would you like to create one with these build settings?
  * Yes

> Adding deploy key to repository...
>
> Deploy key added!
>
> Creating Netlify GitHub Notification Hooks...
>
> Netlify Notification Hooks configured!
>
> Success! Netlify CI/CD Configured!
>
> This site is now configured to automatically deploy from github branches & pull requests


## Important

Now, every time we push the current branch ("main" in my case) it will automatically deploy to Netlify.

Ideally, you would have autodeploy configured for a different branch, so that every push to main doesn't trigger a deploy. For example, we work on the "dev" branch and we do all the pushes we need without affecting the deployment in production. Then, when everything is tested and ready, we do a merge to the main branch and there we do the final push that will do the automatic deployment in Netlify.

### Pushing for automatic deploy

* `git push origin main`

This command, as we said, will generate an automatic deploy in Netlify. Once this is done, if we want to access the URL of the application, we will see that it does not work. Additionally, in the Netifly web interface we will see a message indicating "Deploy failed".

This happens because we did not create an environment variable that is used by this application and that is mentioned above. So, we create the variable in question in the administration panel of the application in Netlify.

As a next step, so that the deploy is generated again, we make a new `git push origin main` (with some minor changes so that it is executed) and we will see that the application is deployed correctly.


<u>**Lesson learned**</u>

This step of creating the environment variable should have been done before the first push, so that the first deploy in Netlify would not have failed.

Also, we can change production branch from "Site settings" in Netlify. 

* Branches **>** <u>Control which branches</u> in your Git repository you want to deploy **>** Production branch **>** *main*


