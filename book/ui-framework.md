# UI Integration Framework

It's a set of tools for getting presence for your app inside Egnyte UIs.

Currently Web UI supports this framework and adding it to desktop clients is on the roadmap. We are also considering a limited version of this for mobile apps.

## Basic concepts

**App definition** - a json file with metadata about the app necessary to register it as a UI integration. When you start developing a UI integration, make sure you get a development environment with access to App Definition Form (ask your partner account manager or [get in touch](contact.md))

**Invocation** - the process of calling a 3rd party app (your app!) from Egnyte UI.

**Invocation's access token** - the token that's sent along with invocation is scoped to allow you to use FS API, Users API and Permissions API. If you need more, you'll need to ask the user to authorize your app through regular Auth flow on the invoked screen or in userSettings.

### Security

Invocation is passing Public API access tokens to your app. We require that you handle the token securely and we will check that in certification. You cannot expose the token to the browser anywhere in the process of Invocation. You need to make sure users' access to Egnyte or your application is not leaked to browsing history or a third-party.

## Detailed documentation

- [UI Invocation flow](https://github.com/egnyte/for-integrators/blob/master/doc/UIntegrate_flow.md)
- [App definition docs](https://github.com/egnyte/for-integrators/blob/master/doc/UIntegrate_definition.md)
- For app definition, you'll only have to write the content for the `integrations` field manually, everything else is separate fields in the App Definition Form.
- [User Settings](app-settings.md) - settings are there in case you really need them, but we recommend building UI integrations in a way that doesn't need a settings screen, but asks for settings on first invocation.
