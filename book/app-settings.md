# App Settings


Your integration will be featured in our *Egnyte Builder*, also known as *Apps & Add-Ons*, where it can provide an option to open a user settings screen.

![Screenshot of settings](./assets/settings-menu.png)

All you need to do to have that option is to provide `userSettings` field in your App Definition ([what's an App Definition?](./ui-framework.md))

The field needs to contain a `https://` url to your app's settings screen.

## UI Integration

**If you're building a [UI integration](./ui-framework.md)** you can leverage Egnyte to store your settings per user and get them back with every invocation.

Settings are stored encrypted in our database, in case you wondered if you can keep access tokens to your app there.

Detailed documentation of settings is available along with invocation flow docs [UI Integration Framework user settings](https://github.com/egnyte/for-integrators/blob/master/doc/UIntegrate_flow.md#ui-integration-framework-user-settings-flow)
