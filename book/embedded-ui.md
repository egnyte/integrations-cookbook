# Embedded Egnyte Connect UI

## Introduction

Egnyte Connect has a simplified UI version which you can load inside of an iframe in your app.

You can point to a specific directory based on your app's context.

### Use this recipe if you:
- want to let your users directly access Egnyte Connect on a specific folder based on what they're browsing in your app

## Ingredients

- Two tablespoons of understanding: [Egnyte-specific terms](definitions.md)
- [Authentication](auth.md)
- [Public API Embedded UI](https://developers.egnyte.com/docs/read/Embedded_UI_API)


## Steps

1. Implement Auth - use a web app interface to go through OAuth2 with our Enhanced Auth Service. 
1. Make sure you send "Egnyte.launchwebsession" scope among other scopes you may need. 
1. Make a request to the navigation API with `embedded=true` and `path` set to the folder of your choice.
1. Load the "redirect" URL you get back in an iframe.
1. Make sure you store and use the access_token securely on the backend and only send the redirect URL to the browser.
1. Bake your integration and send it for certification.

### Tips

- If you get errors about missing scope while you do send the "Egnyte.launchwebsession" scope in auth, add scope list to the token request body as well, to match the ones set in code request.
- Test your app with unusual characters in paths - you need to encode them correctly when passing to Navigate API
- The redirect URL you get from the API is one time use only, so on each reload you need to get a new one.