[![CircleCI](https://circleci.com/gh/tonnguyen/litium-fieldtype-bag/tree/master.svg?style=shield)](https://circleci.com/gh/tonnguyen/litium-fieldtype-bag/tree/master)

# Litium Field types bag

A bag of custom field types. [Live demo](https://storiesofmyfield.tonnguyen.com/)
- [Color picker](https://storiesofmyfield.tonnguyen.com/?path=/story/fieldeditorcolor--color)
- [Google Map](https://storiesofmyfield.tonnguyen.com/?path=/story/fieldeditorgooglemap--map)
- [Password](https://storiesofmyfield.tonnguyen.com/?path=/story/fieldeditorpassword--password)
- [Tristate checkbox](https://storiesofmyfield.tonnguyen.com/?path=/story/fieldeditortristatecheckbox--tri-state-checkbox)
- [React textbox](https://storiesofmyfield.tonnguyen.com/?path=/story/react--text)

## Install
To install this Add-on to your site, you need a site running equivalent version of Litium. This Add-on's version is inlined with Litium's version. If its version is 6.0.0, that means it is built against Litium 6.0.0. 

Add this project to your existing Litium solution.

## How to use
Just like other field type:
1. Create a field with type GoogleMap ![Create Google Maps field](images/Field.PNG)
2. Edit the field to enter the Google Map Api key. Here is how to get the key: https://developers.google.com/maps/documentation/javascript/get-api-key
![Enter Google Map Api key](images/MapKey.PNG)
3. Add it to the template ![Add Google Maps field to the template](images/Template.PNG)
4. Then the Google Map component will be added to the entity page. ![Edit Google Maps field](images/Edit.PNG)

## Build from source
Even though the AddOn is ready to use by just installing the package, you can still build it from source.
### Requirement
1. Make sure you have set up Litium NuGet feed https://docs.litium.com/download/litium-nuget-feed
2. You need a site running equivalent version of Litium. This Add-on's version is inlined with Litium's version. If its version is 6.0.0, that means it is built against Litium 6.0.0.
3. You need to have NPM installed. [How to install NPM](https://www.npmjs.com/get-npm)

### Build
1. Open the project file TonNguyen.FieldTypeBag.csproj
2. Execute the following command in Package Manager Console: `Update-Package -ReInstall`
3. Execute the BuildClientScripts.bat file
4. Build the solution
