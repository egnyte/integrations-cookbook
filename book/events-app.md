# Reactive integration with Events API

## Introduction

Egnyte Connect stores the files, while the ecosystem of apps and integrations lets users manipulate the files in more ways than a single platform could. Some integrations will need to know when a file got updated or when folder contents change.

### Use this recipe if you:
- want to map some structures inside your product to specific folders in Egnyte and keep the functionality up to date for new files showing up
- want to detect new files/versions being uploaded to scan them or perform various kinds of automation

This recipe could pair well with:
- [External Storage Provider](external-storage.md)
- [Elaborate context menu action](elaborate-uint.md)
- A glass of white wine

## Ingredients

- Two tablespoons of understanding: [Egnyte-specific terms](definitions.md)
- [Authentication](auth.md)
- [Public API Events](https://developers.egnyte.com/docs/read/Events_API)
  - getting latest events by ids
  - suppressing events generated by your own app
- [Public API for file system](https://developers.egnyte.com/docs/read/File_System_Management_API_Documentation) to perform actions in reaction to events
- Our [SDKs](https://developers.egnyte.com/Egnyte_SDK) support events (optional)


## Steps

Events API provides means to implement a synchronization service that would duplicate content from Egnyte to a different service. **Don't try to implement general synchronization** between your service's permanent cloud storage and Egnyte. You can try to keep copies of files from a specific folder for limited time if your service benefits from that, but anything more is not recommended.

It always turns out to be much more complicated than initially estimated. And some customers won't be able to use your integration if their company's data governance policy is strict.


1. Implement Auth - use the Enhanced Auth Service to receive OAuth2 code and exchange it for a token.
1. Decide if you want to use one "Admin" token for all interactions or let every user get authenticated separately. We suggest you do your best to choose the latter - API request limits are per-user. If you go with admin-only configuration [get in touch](./contact.md) to figure out what quota limits you'll be working with.
1. Get events
  - Use an SDK if available to handle querying for events if you don't have specific needs for unusual queries.
  - Make requests to the API directly for full control over when and how you're getting events
1. Use Storage API for handling files.
1. Implement resetting your recent event id when you get a 404 for it (see below)
1. Bake your integration and send it for certification.

### Event types

Events API returns events from file system only. You can detect file and folder operations and adding comments to files, but you won't detect users or settings modifications.

### Resetting last event id (cursor)

If you're polling the events API based on last known event id, effectively saying "give me all events that happened after `id`" it's possible that there were 300K events outside of the folder you're watching while you didn't get a single one, or there may not be an event in your watched folder for a month. In that case, the request will start failing as soon as the event with your saved `id` doesn't exist anymore.

Your reaction should be to query the `/cursor` endpoint and make a new request with `oldest_event_id` as your last known event.

### Tips

- Only latest 300000 events are available through Events API. Also, events older than 30 days may be garbage-collected before the limit of 300K is reached
- If you want to use Events API for auditing what's happening, you can't poll too rarely, some customers burn through the limit of 300K events in less than a week
- If you want to show latest activity from a folder in your app's related view, you can query for events by date instead of getting the cursor
- If you're building for scale and expect your client to keep listening to events for multiple folders and domains, vary your polling interval. Your interval should gradually become longer when there's no events and reset to short interval when you notice activity. Related reading: [Exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
