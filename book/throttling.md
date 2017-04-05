# Request throttling / QPS

Our API rate limits restrict both the number of calls per day and number of calls per second. Limits are enforced per access token rather than against the entire key. So, even if one user exceeds their quota under your key, other users will still be able to access Egnyte through your application. Integrations should be built with inherent support for receiving and handling Quota limit errors.

The default settings for all tokens issued under a key are:

Description | Limit
 --- | ---
API Key | 2 API calls per second per token; 1000 API calls per day per token
OAuth token endpoint | 100 token requests per hour

If you anticipate that your application's features will be undermined by these limits, please [contact us](contact.md) and we can discuss other arrangements.

If your API call is throttled you will see a response with a 403 HTTP status code with one of two possible values for the `X-Mashery-Error-Code` header field:

Error | Description
 --- | ---
ERR_403_DEVELOPER_OVER_QPS 	| Exceeded per second throttle
ERR_403_DEVELOPER_OVER_RATE  | Exceeded daily quota

The `Retry-After` header will be set to the number of seconds until the relevant throttle will next be reset.

In addition to the general API endpoint rate limiting, the OAuth token endpoint (/puboauth/token) is also rate limited. When throttled, you will see a response with a 409 HTTP status code. The Retry-After header will be set to the number of seconds until the throttle will next be reset. In general, you will not encounter this limit since you should be requesting a token only once per user and holding on to it rather than requesting a token repeatedly.
