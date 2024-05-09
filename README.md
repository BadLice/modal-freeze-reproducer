# modal-freeze-reproducer

![Build](https://github.com/BadLice/modal-freeze-reproducer/workflows/Pre%20Merge%20Checks/badge.svg)

This is a project to create a minimum reproducible example of a randomly occurring bug in react-navigation library.
It is advised to run this project on a physical iOS device to increase the chances of the bug to occur.

related issues:
- https://github.com/react-navigation/react-navigation/issues/11981 
- https://github.com/software-mansion/react-native-screens/issues/2125

to run this project:
- run `cd ReproducerApp`
- run `yarn install`
- run `cd ios`
- run `bundle install`
- run `bundle exec pod install`
- run `yarn run start` and `yarn run ios` simultaneously