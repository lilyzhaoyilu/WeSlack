### How to reset PG Database on Heroku?

- Step 1: `heroku restart`
- Step 2: `heroku pg:reset DATABASE` (no need to change the `DATABASE`)
- Step 3: `heroku run rake db:migrate`
- Step 4: `heroku run rake db:seed` (if you have seed)

**One liner**

`heroku restart; heroku pg:reset DATABASE --confirm weslackin; heroku run rake db:migrate`

**Note 1**

Heroku doesn't allow users from using `rake db:reset`, `rake db:drop` and `rake db:create` command. They only allow `heroku pg:reset` and `rake db:migrate` commands.

More info: https://devcenter.heroku.com/articles/rake

**Note 2**

If you have more than 1 remote, append `--remote [your_remote_name]` like this:

`heroku run rake db:migrate --remote dev` (`dev` is example remote here)
