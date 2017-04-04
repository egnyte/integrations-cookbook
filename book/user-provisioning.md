# User provisioning

## Introduction

Egnyte Connect has a nice UI for managing users, but starting at some quantities it becomes troublesome.

If you're building a user management service or an SSO provider, you want to let your customers transfer users and groups into Egnyte Connect.

### Use this recipe if you:
- want to provision users and groups to Egnyte Connect

## Ingredients

- Two tablespoons of understanding: [Egnyte-specific terms](definitions.md)
- [Authentication](auth.md)
- [Public API Users Management](https://developers.egnyte.com/docs/read/User_Management_API_Documentation)
- [Public API Groups Management](https://developers.egnyte.com/docs/read/Group_Management)
- Consider using an [SDK](https://developers.egnyte.com/Egnyte_SDK) matching your preferred language (optional)

## Steps

1. Implement Auth - use a web app interface (or a webview) to go through OAuth2 with our Enhanced Auth Service. If you can't use web auth flow, [get in touch](./contact.md)
1. After authenticating the user make sure they're an admin - get [Getting User Info](https://developers.egnyte.com/docs/read/Public_API_Authentication#Getting-User-Info) for current user info and request Users API for details by id to check if current user is an admin. If not, they won't be able to provision users.
1. Use Users and Groups APIs to create what you need.
1. Beware of throttling - your API key is only allowing a certain number of requests per second per user. SDKs should handle that for you.
1. Bake your integration and send it for certification.

### Tips

- If you already have a [SCIM1.1](https://tools.ietf.org/html/draft-scim-api-01) compliant client, it might work with our APIs without modification.
