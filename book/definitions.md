# Egnyte-specific terms

Here are a few basic concepts to help you understand how Egnyte APIs work.


**Egnyte domain**

An instance of Egnyte Connect product that is owned by a client has a separate subdomain {name}.egnyte.com. Can have a custom domain name with branding.

Only {name}.egnyte.com domain names work with Public API so a custom domain needs to be resolved to .egnyte.com before being used. Don't worry, we have a [service for that](auth.md)

**file group_id and entry_id**

A file in Egnyte Connect can have versions. Every time you update the file, group_id remains the same and points to the file, but every version gets a new entry_id that points to it.

**/Shared and /Private**

/Shared is the root of a company's folder tree.

/Private is where each user has their own folder accessible only by them and domain admins

**permissions**

Permissions are set on a folder level and all files inside the folder are accessible with the same permissions.

Permissions only work in /Shared, **not** in /Private
