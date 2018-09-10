# Simply Sharing a Link

## Introduction

Egnyte is often used as a central file storage and access platform for a whole company. For many communication or project management apps just letting users share links to files in Egnyte is a great first functionality to integrate.

Customers appreciate these integrations because they don't have to leave your application's context to create the link and copy-paste it.

> [File Picker Service](filepicker-service.md) is available. You can solve this use case with close to no development work.

### Use this recipe if you:
- want to let your users post links to files in your apps' content
- want to control authentication and file picker (if not, see File Picker Service)
- don't need to have your functionality available in Egnyte UI context menus.

## Ingredients

- Two tablespoons of understanding: [Egnyte-specific terms](definitions.md)
- [Authentication](auth.md)
- [Public API File System](https://developers.egnyte.com/docs/read/File_System_Management_API_Documentation#List-File-or-Folder)
  - list folder
- [Public API Links](https://developers.egnyte.com/docs/read/Egnyte_Link_API_Documentation)
  - create link
  - link settings
- [JS SDK Filepicker](https://github.com/egnyte/egnyte-js-sdk/blob/master/src/docs/widgets.md)

## Steps

While you can use front-end only to build this integration, you'd have to authenticate the user again every time they open the file picker. You'll get better results if you add a pinch of back-end for authentication and store the token securely on your side.

Don't store access tokens in the browser. We had developers try that before. There's a certification step at the end of development to prevent listing an integration that would attempt such things.

1. Implement Auth - use the Enhanced Auth Service to receive OAuth2 code and exchange it for a token.
1. [Include JavaScript SDK](sdk-get-started.md)
1. Use JS SDK Filepicker and let user choose the file. Note you can configure many options about the filepicker like single/multi selection.
1. When user has made the choice, take the file `group_id` and use it for creating a link
1. Decide what kind of links you want to create: [Link types](link-types.md) or what choice to give users. Feel free to consult your choices with someone at Egnyte. We know how people use various kinds of links.
1. Implement creating links based on `group_id`
1. Bake your integration and send it for certification.
