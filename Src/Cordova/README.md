## Plugins
The following plugins are used in the Cordova project to shape the game as it is.

### [Cordova AdMob](https://github.com/sunnycupertino/cordova-plugin-admob-simple)
Used to display ads in the game. Ads are displayed to speed up the game, or gain in-game currency.

### [Cordova Google Play Games Services](https://github.com/artberri/cordova-plugin-play-games-services)
Used to integrate leaderboards and achievements in the game.

### [Cordova Splashscreen](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/#supported-platforms)
Used for splashscreen on iOS and Android.

### [Cordova Purchase](https://github.com/j3k0/cordova-plugin-purchase)
Used for in-app purchases.

## Building

The ID's that are needed to configure AdMob, Billing and Play Services are templated. These will be placed into the respective files build-time. This way private identifiers won't be placed on a public place like this GitHub repository.