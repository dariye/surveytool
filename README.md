== README

Setup

* Gems

Run
```bundle install```

* Setup Database

Run
```rake db:setup``` or
```rake db:create``` then ```rake db:migrate```

*Angular Dependencies

Rake tasks

```rake bower:install``` to install packages

you can read more at [bower-rails](https://github.com/42dev/bower-rails)

* Mailer, ENV variables

This app uses the [figaro gem](https://github.com/laserlemon/figaro) so you need to define variables in```application.yml``` for

- Customerio check ```initializers/customerio```

- Actionmailer - check ```environments/development``` for env variables to setup. uses gmail to send.

* Run App

Run
```rails s```

Visit localhost:3000
For the survey go to /1 ...and so on

What's left?
==
- Storing user feedback
- Sending that feedback to the product owner
- Adding additional logic per user input/response(making the application reactive)
- Use [restangular](https://github.com/mgonto/restangular) to handle RESTful resources





