# Link types

Egnyte has a well established sharing functionality with various configurable parameters.

The basic distinction is between [Public Links](#public-links) and [Deep Links](#deep-links)

## Public links

Public Linkns can:
- allow not logged in users access to a file or folder
- be protected by a password
- expire after a pre-defined time
- expire after a pre-defined number of uses (aka clicks)
- allow a logged-in user access to file in a folder that's not shared with them
- be managed/removed at any time

Links can be created from Public API:
[Public API Links](https://developers.egnyte.com/docs/read/Egnyte_Link_API_Documentation#Create-a-Link)

For more details on links see [user guides on public links](https://helpdesk.egnyte.com/hc/en-us/articles/201637104-Sharing-Files-in-Egnyte#filelink)

### Link settings

Admins can restrict or outright disable public links. An attempt to create a link from public API will fail with an error if it's against the policy.

There's an endpoint in Public API that returns link settings. It's not documented officially yet, but is not experimental anymore and should not change.

```
GET /pubapi/v1/links/settings
```
returns
```
{
    "expiration": { //expiration setting by admin
        "default": null, //object defining a number and unit (days, weeks, months)
        "max_allowed": null,
        "upload_links": true //upload links allowed (not relevant to APIs)
    },
    "file_links": { //types of file link access allowed
        "anyone": true,
        "password": true,
        "domain": true,
        "recipients": true,
        "default_type": "anyone"
    },
    "folder_links": { //types of file link access allowed
        "anyone": true,
        "password": true,
        "domain": true,
        "recipients": false,
        "default_type": "anyone"
    }
}
```

If `file_links` is not present, all public links are disabled

`expiration.default.unit` of months actually means 30 day periods. It's not requiring you to count real months in the future.

Here's an example function that fetches link settings in JavaScript: [for-integrators/link-settings.js](https://github.com/egnyte/for-integrators/blob/master/examples/javascript/link-settings.js)

## Deep links

Deep links provide a reference back to a file or folder in the Web UI. The user has to be logged in and already have permissions to access the folder. If you need fine grained control, please use Public Links.

Creating a Deep Link:

1. Find out what the Egnyte domain and `group_id` is.
1. Just concatenate strings: `https://{domain name}.egnyte.com/navigate/file/{group_id}``
