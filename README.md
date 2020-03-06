# Setting up Angular9 and C#

In Visual Studio (**Mac or Window**)
* Create a .Net Core application

> I have Mac, so location: new -> .NET Core -> App -> Angular

This will create angular project (**Most likely Angular8**)

> Try and build project Just so we know everything i working currently

**Adding GitHub Angular**

Now that we know it works,

delete the current generated angular project.

Install project files from this repo in main project.

```git clone git@github.com:TooEnsureDevelopment/Angular9_CSharp_Configured.git```

Project will look like

```ruby
├──ProjectName
    ├──ProjectName
       ├── Controllers
       ├── Angular9_CSharp_Configured # <- This Repo/ Same name as older folder
       ├── Pages
       ├── Program.cs
       ├── Properties
       ├── Startup.cs
       ├── WeatherForecast.cs
       ├── appsettings.Development.json
       ├── appsettings.json
       ├── wwwroot
       ├── appsettings.Development.json
       ├── appsettings.json
```

Enter ```Angular9_CSharp_Configured``` directory

```cd Angular9_CSharp_Configured```

Then move ```ClientApp``` out of repo to main project.

``` mv ClientApp .. ```

```ruby
├──ProjectName
    ├──ProjectName
       ├── Angular9_CSharp_Configured # <- This Repo/ Same name as older folder
       ├── Controllers
       ├── ClientApp
       ├── Pages
       ├── Program.cs
       ├── Properties
       ├── Startup.cs
       ├── WeatherForecast.cs
       ├── appsettings.Development.json
       ├── appsettings.json
       ├── wwwroot
       ├── appsettings.Development.json
       ├── appsettings.json
```

Delete Repo

``` rm -rf Angular9_CSharp_Configured```


If you decide to change name of ```ClientApp```

remember


Startup.cs
```ruby
// This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            ...
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";  # <- You may need to change this
            });
        }

        app.UseSpa(spa =>
            {
                ...
                spa.Options.SourcePath = "ClientApp"; # <- Also This will need change

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
```


> Tip: Just so that everything goes right first delete the "rm -rf .git" within repo project then inside visual studio move "ClientApp" to main project. Things worked a little better when I moved file in the IDE.

> Also might take a small (well not exactly small) amount of time it will then lunch in the browser





