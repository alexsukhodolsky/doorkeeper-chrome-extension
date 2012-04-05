# Dookreeper Chrome Extension Client

This app is an example of OAuth2 Google Chrome extension client. It was built in order to test
the [doorkeeper provider example](http://doorkeeper-provider.herokuapp.com/).
It uses [rails](http://github.com/rails/rails/), [devise](http://github.com/plataformatec/devise)
and [omniauth](http://github.com/intridea/omniauth) gems. OAuth2
strategy is build on top of [abstract OAuth2 strategy for OmniAuth](https://github.com/intridea/omniauth-oauth2)

## About Doorkeeper Gem

For more information [about the gem](https://github.com/applicake/doorkeeper),
[documentation](https://github.com/applicake/doorkeeper#readme),
[wiki](https://github.com/applicake/doorkeeper/wiki/_pages) and another resources,
check out the project [on GitHub](https://github.com/applicake/doorkeeper).

## Installation & Configuration

If you want to run the application by yourself here are the steps for
you.

First you need to clone the [repository from GitHub](http://github.com/applicake/doorkeeper-devise-client)

    git clone git://github.com/hitupalex/doorkeeper-chrome-extension.git 

Open Google Chrome

    url->chrome://settings/extensions

Make sure "Developer mode" is checked

Click "Load unpacked extension"

    Load the doorkeeper-chrome-extension directory

That's it! You should now see the OAuth 2.0 logo in the top right portion of your screen.
Click it and try it out!

## Other Information

A special thanks to the developers at applicake for their [awesome doorkeeper provider RoR gem](https://github.com/applicake/doorkeeper)
and [Boris Smus](https://github.com/borismus) for his awesome OAuth 2.0 Chrome extension library [oauth2-extensions](https://github.com/borismus/oauth2-extensions)!