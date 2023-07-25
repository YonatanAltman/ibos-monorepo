# Start


### Create the repo:
 ```
npx create-nx-workspace --preset=angular
 ```

### Add app:
 ```
nx g @nx/angular:application --name=partner --routing=true --standalone=true
 ```

### add user menu
```
nx g @nx/angular:library --name=user-menu-ui --buildable=true --directory=ui --changeDetection=OnPush --displayBlock=true
```

### add common interface
```
nx g @nx/angular:library --name=common-interface --buildable=true --directory=common
```
