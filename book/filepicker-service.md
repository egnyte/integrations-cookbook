# Integrate via File Picker as a Service [File Picker]

## Introduction

> Integrating with Egnyte Connect using File Picker requires just a few minutes of development work!

If you're seeking a simple integration that allows the user to choose a file from Egnyte and perform a straightforward action like sharing a link to that file, this is for you.

### Use this recipe if you:

- Want to let your users post direct links or get file info in your app's context
- Don't need full control over the file picking experience
- Want to avoid implementing authorization through OAuth

## Ingredients

- Two tablespoons of understanding: [Egnyte-specific terms](definitions.md)
- API Key and **FilePicker registration**

## Steps

1. Get an API key at [developers.egnyte.com](https://developers.egnyte.com)
2. [Get in touch](contact.md) to join the File Picker program. We'll register your key and your app's web address
3. Prepare some hot tea or coffee
4. Attach the File Picker Service script to your web app
5. Call one function from the script with options from the documentation
6. Handle the response with a callback
7. The integration is done, continue waiting for the tea/coffee to cool down so you can begin drinking it.

Still too much? Copy this code and fill in the two gaps to get a working integration for testing.

```hmtl
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Egnyte Filepicker</title>
  </head>
  <body>
    <div>
      <label for="clientId">Client ID</label><br />
      <input style="width: 600px" type="text" placeholder="Your registered app ID" id="clientId" />
    </div>
    <div>
      <label for="domain">Egnyte Domain</label><br />
      <input style="width: 600px" type="text" placeholder="Your domain in name.egnyte.com format" id="domain" />
    </div>
    <hr />
    <div>
      <textarea style="width: 600px; height: 300px" id="result">My files:</textarea>
    </div>
    <div>
      <button id="btn" type="button">Open Filepicker</button>
    </div>
    <script>
      const host = 'https://us-partner-integrations.egnyte.com';
      let pickerWindow;
      const textArea = document.getElementById('result');
      document.getElementById('btn').addEventListener('click', openFilePicker);

      function messageListener(event) {
        if (event.origin !== host) {
          console.warn('event.origin !== host', event.origin, host);
          return;
        }
        switch (event.data.status) {
          case 'ready':
            console.log('Filepicker ready');
            break;
          case 'success':
            console.log(event.data);
            const toDisplay = event.data.payload
              .map(({ item }) => `name: ${item.name}\nlink: ${item.directLink}`)
              .join('\n\n');
            textArea.value = (textArea.value ? `${textArea.value}\n\n` : textArea.value) + toDisplay;
            pickerWindow.close();
            break;
          case 'error':
            console.error(event.data);
            break;
          default:
            console.warn('Unknown message status:', event.data.status);
        }
      }

      function isChildClosedListener() {
        const intervalId = setInterval(() => {
          if (pickerWindow.closed) {
            console.log('Filepicker closed');
            window.removeEventListener('message', messageListener);
            clearInterval(intervalId);
          }
        }, 100);
      }

      async function openFilePicker() {
        const config = {
          clientId: document.getElementById('clientId').value,
          domain: document.getElementById('domain').value,
          openerOrigin: window.location.origin,
        };
        const initParams = new URLSearchParams(config).toString();
        const pickerUrl = `${host}/filepicker?${initParams}`;
        pickerWindow = window.open(pickerUrl, 'EgnyteFilepicker');
        isChildClosedListener();
        window.addEventListener('message', messageListener);
      }
    </script>
  </body>
</html>
```
