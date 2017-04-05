# Taste test

This test will help you find out which recipes are interesting in your case.

There are no incorrect answers.

- Does your integration include any Graphical User Interface?
  - No
    - Are you doing user provisioning or administration automation?
      - Yes
        - Read [User provisioning](user-provisioning.md)
    - Are you doing security policing or other real time analysis?
      - Yes
        - Read [Reactive app with Events API](events-app.md)
    - Are you doing storage synchronization or migration?
      - Yes
        - Consider writing an [External Storage Provider](external-storage.md)
        - Also look at [Reactive app with Events API](events-app.md)
    - None of the above
      - I'm building something different
        - That's surprising... [Get in touch!](contact.md)
        - If it's a simple app that just needs to store files in Egnyte, look at [Authentication](auth.md) and use File System API
  - Yes
    - Where do you want you integration's user flow to start?
      - Egnyte UIs
        - Do you want to make a file or folder action available?
          - Yes
            - Read [Quick context menu action](context-menu.md) or [Elaborate context menu action](elaborate-uint.md)
        - Do you want to make an editor for files in Egnyte?
          - Yes
            - Read [Editor for certain file types](editor.md)
        - Do you want to react to changes in file system?
          - Yes
            - Read [Reactive app with Events API](events-app.md)
      - Your product UIs
        - Do you need users to be able to choose files or a folder?
          - Yes
            - Read [Share a link to file](share-link.md)
        - Does your integration need to do anything except basic file get and save in Egynte?
          - Yes
            - Do you want to share links to files?
              - Yes
                - Read [Share a link to file](share-link.md)
            - Do you want to manage users or permissions?
              - Yes
                - Read [User provisioning](user-provisioning.md)
          - No
            - If it's a simple app that just needs to store files in Egnyte, look at [Authentication](auth.md) and use File System API
        - Do you need to display data derived from events happening in Egnyte?
          - Yes
            - Read [Reactive app with Events API](events-app.md)
      - Both
        - Try a mix of recipes from both categories. Table of contents should be helpful in this case :)
      - None of the above
        - I'm building something different
          - That's surprising... [Get in touch!](contact.md)


If you're not satisfied with the test results, don't hesitate to [send us](contact.md) a few sentences about your integration idea and we'll tell you which recipe to choose or write a new one!
