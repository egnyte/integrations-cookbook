# Authentication and authorization

Egnyte APIs use OAuth2.

We are providing a helper service *"Enhanced Auth Service"* to our partners developing apps that adds an additional step before OAuth Auth Code flow to ask the user about their Egnyte Connect domain (what's a domain? see [definitions](definitions.md))

You should evaluate using the service before trying anything else. More on that below.

Our online documentation lists various methods of getting an access token:

- [AUTHORIZATION CODE FLOW](https://developers.egnyte.com/docs/read/Public_API_Authentication#Authorization-Code-Flow) - your default choice of OAuth2 flow. It's also the only flow that works with *Enhanced Auth Service*
- [IMPLICIT GRANT FLOW](https://developers.egnyte.com/docs/read/Public_API_Authentication#Authorization-Code-Flow) - A less secure version of OAuth2 compatible flow. Only usable for integrations that are limited to just JavaScript code in the browser and have no back-end to participate in auth. Not recommended unless it's impossible to use Code flow.
- Internal Applications "Resource Owner Password Credentials Flow" - only usable for Egnyte customers using the APIs. Your developer key will not work with this method

## Enhanced Auth Service

The service will start by asking your user what their Egnyte domain is. (what's a domain? see [definitions](definitions.md))

If user types a domain that their company set up on top of the one provided by Egnyte, our service will make sure it's correctly resolved to {somename}.egnyte.com for you.

After getting the domain, *Enhanced Auth Service* will get the Auth Code step done too and let you continue the flow.

### Usage
[Enhanced Auth Service documentation](https://developers.egnyte.com/docs/read/Public_API_Authentication#Enhanced-Auth-Service)

Use it just like you would use the first step of OAuth2 Code flow.

We provide two URLs for the service to let you redirect users to the closest location, but in fact only one request is made to that server, so if you don't have means to figure out if the user should start in US or Europe, just pick one.
