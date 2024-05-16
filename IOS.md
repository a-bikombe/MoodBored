# How to Convert Your Angular Application to a Native Mobile App (iOS)

[https://betterprogramming.pub/how-to-convert-your-angular-application-to-a-native-mobile-app-android-and-ios-c212b38976df](https://betterprogramming.pub/how-to-convert-your-angular-application-to-a-native-mobile-app-android-and-ios-c212b38976df)

## Prerequisites

Before we start, make sure to set up your environment by installing below dependencies:

* Nodejs : [https://nodejs.org/en/](https://nodejs.org/en/)
* Angular CLI: [https://angular.io/cli](https://angular.io/cli)
* Mobile development setup: [https://capacitorjs.com/docs/getting-started/environment-setup](https://capacitorjs.com/docs/getting-started/environment-setup)

## 1 — Generate a new angular application

`ng new angular-mobile-app`
`cd angular-mobile-app`
`ng serve`

## 2 — Add Capacitor to your project

`cd angular-mobile-app`
`npm install @capacitor/core`
`npm install @capacitor/cli`

## 3 — Setup the capacitor config file

`npx cap init`

## 4 — Add native iOS and Android packages

`npm install @capacitor/ios`
`npx cap add ios`

## 5 — Build your app

`ng build --configuration=production`
`npx cap sync`

## 6 — Open Xcode

`npx cap open ios`
