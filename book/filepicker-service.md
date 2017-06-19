# Integrate via File Picker as a Service [BETA]

## What does it mean it's BETA?

There will be no more breaking changes in the API, we will only add features.

The single thing you'll need to do because of beta is update the script you're embedding in your app some time near the end of Beta period. Your code won't have to change.

## Introduction

> Integrating with Egnyte Connect using File Picker Service is just a few minutes of development work!

If you're after a simple integration that allows the user to choose a file from Egnyte and perform a simple action like sharing a link to that file.

*The service will also allow for more advanced actions via webhooks soon, letting your app perform an action on the file itself.*


### Use this recipe if you:
- want to let your users post links to files in your apps' content
- don't need full control over the file picking experience
- want to avoid implementing authorization through OAuth

## Ingredients

- Two tablespoons of understanding: [Egnyte-specific terms](definitions.md)
- API Key and **Beta registration**
- [File Picker Service documentation](https://github.com/egnyte/for-integrators/blob/master/doc/FPaaS.md)

## Steps

1. Get an API key at [developers.egnyte.com](https://developers.egnyte.com)
1. [Get in touch](contact.md) to join the Beta program, we'll register your key and your app's web address
1. Get some hot tea or coffee
1. Attach the File Picker Service script to your web app
1. Call one function from the script with options from the documentation
1. Handle the response with a callback
1. The integration is done, continue waiting for the tea/coffee to cool down so you can begin drinking it.

Still too much? Copy this code and fill in the 2 gaps to get a working integration.

```hmtl
<div id="pickerWrapper"></div>

<script src="https://us-partner-integrations.egnyte.com/services/pick/popup.js"></script>
<script>
EgnyteService.openPicker({
    key: "FILL_IN_API_KEY",
    feature: {
        action: "createLink"
    },
    targetNode: document.querySelector("#pickerWrapper"),
    success: function (result) {
        "data": {
        url: "<share link>",
        name: "<name of file / folder>"
    }
        var egnyteLink = '<a href="'+ result.data.url +'"'>'+ result.data.name +'</a>';
        FILL_IN_CODE_TO_PUT_THE_LINK_IN_CONTENT
    },
    error: function (err) {
        console.log(err)
    }
})
</script>
```
