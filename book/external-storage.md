# External Storage Provider

## Introduction

Egnyte is often used as a central file storage and access platform for a whole company. Many integrations have one simple role - provide some product's functionality for files stored in Egynte. In such scenarios, Egnyte Connect is working as a so called External Storage Provider.

Customers appreciate these integrations because they help them use multiple tools in their company without having to look for files and their versions in all services they use.

### Use this recipe if you:
- want to let your users open and save their files from/to Egnyte Connect inside your product
- want to allow exploring files in your product's user interface OR store all content from your product in one folder in Egnyte
- don't need to have your functionality available in Egnyte UI context menus.


## Ingredients

- Two tablespoons of understanding: [Egnyte-specific terms](definitions.md)
- [Authentication](auth.md)
- [Public API for file system](https://developers.egnyte.com/docs/read/File_System_Management_API_Documentation)
  - get folder info
  - get file metadata
  - get file contents
  - create file version
  - upload file
  - lock (optional)
- Your back-end language specific SDK (optional)

## Steps

Make sure you plan your integration in a way that always uses File System API for reading the files and writing back. You can introduce a temporary cache and delay sending the changed file, sure, but make sure you **don't try to implement synchronization** between your service's permanent cloud storage and Egnyte.

It always turns out to be much more complicated than initially estimated. And some customers won't be able to use your integration if their company's data governance policy is strict.

Instead, we recommend you write a thin abstraction layer on top of File System API so that it's compatible with your current storage handling code. Then it can be put in place of any other storage your product is using.

1. Implement Auth - use the Enhanced Auth Service to receive OAuth2 code and exchange it for a token.
2. Decide if you want to use one "Admin" token for all interactions or let every user get authenticated separately. We suggest you do your best to choose the latter - API request limits are per-user.
3. Use File System API for handling files.
4. Storing location options:
  - Implement your own file chooser
  - Use a single (user-defined) path for all files and use convention for file and folder names - eg. based on project names or discussion titles in your product.
5. Bake your integration and send it for certification.
