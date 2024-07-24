module.exports = {
    NAME : "Vince Rickey",
    ABOUT : "Software Engineer with 8+ years of experience in Android & Mobile Development. Currently @WSJ",
    WSJ : "WSJ",
    OPEN_SOURCE : "Open Source",
    ANDROID_KOTLIN : "Android | Kotlin",
    ANDROID_JAVA : "Android | Java",
    WEB : "Web | JavaScript",
    IOS : "iOS",
    RESUME : "Resume",
    KEY_RESULTS_TITLE : "Key Results",
    KEY_RESULTS_SUBTITLE : "Engineering solutions at scale",
    KEY_RESULT_PLAY_ANCHOR : "#2 News App in the Google Play Store",
    KEY_RESULT_PLAY_TEXT : " with 1+ million downloads.",
    KEY_RESULT_APP_PLATFORM : "Replaced legacy apps with Compose & GraphQL white-label app platform shared by four Dow Jones apps: Wall Street Journal, Barrons, FN, MarketWatch. #1 contributor with 100,000+ lines.",
    KEY_RESULT_TEAM : "Engineering lead for 20 Android Engineers; 45 Mobile Engineers; global 139-person dept.",
    TABLE_HEADER_NUMBER : "#",
    TABLE_HEADER_DOMAIN : "Domain",
    TABLE_HEADER_TECHNICAL : "Technical Acheivement",
    TABLE_HEADER_IMPACT : "Impact",
    TABLE_HEADER_RESULT : "Result",
    TABLE_ITEM_SUBSCRIPTION_DOMAIN : "Subscriptions",
    TABLE_ITEM_SUBSCRIPTION_TECHNICAL : "7 subscription flows, 4 user states, & dynamic paywall",
    TABLE_ITEM_SUBSCRIPTION_IMPACT : "Revenue",
    TABLE_ITEM_SUBSCRIPTION_RESULT : "Infrastructure drives millions of dollars in revenue",
    TABLE_ITEM_ARCHITECTURE_DOMAIN : "Architecture",
    TABLE_ITEM_ARCHITECTURE_TECHNICAL : "4 modules to 53 modules",
    TABLE_ITEM_ARCHITECTURE_IMPACT : "Scale",
    TABLE_ITEM_ARCHITECTURE_RESULT : "Consolidates 4 teams: eliminate redundancy, maximize reuse",
    TABLE_ITEM_TECH_DOMAIN : "Tech Stack",
    TABLE_ITEM_TECH_TECHNICAL : "84% Java to 91% Kotlin",
    TABLE_ITEM_TECH_IMPACT : "Innovation",
    TABLE_ITEM_TECH_RESULT : "Support latest OS features",
    TABLE_ITEM_UI_DOMAIN : "UI",
    TABLE_ITEM_UI_TECHNICAL : "100% View to 100% Compose",
    TABLE_ITEM_UI_IMPACT : "Time to market, Reactive UI",
    TABLE_ITEM_UI_RESULT : "Faster to develop, test, release, and maintain complex UI states",
    TABLE_ITEM_RELEASE_DOMAIN : "Releases",
    TABLE_ITEM_RELEASE_TECHNICAL : "~11 min build time, automated app store releases",
    TABLE_ITEM_RELEASE_IMPACT : "Agility",
    TABLE_ITEM_RELEASE_RESULT : "No code freezes: merge or release any time",
    TABLE_ITEM_TESTING_DOMAIN : "Testing",
    TABLE_ITEM_TESTING_TECHNICAL : "91 to 693 unit tests (+661%)",
    TABLE_ITEM_TESTING_IMPACT : "Resiliency",
    TABLE_ITEM_TESTING_RESULT : "Automate QA",
    REDESIGN_TITLE : "Redesign",
    REDESIGN_SUBTITLE: "Design System and Editorial Tools",
    REDESIGN_SUMMARY : "In 2017 and 2022, I worked with the Design team on a complete redesign of the app where we implemented new themes, cards, articles, fonts, and navigation. Each redesign worked seamlessly with features in our internal editorial tools - Mac and Web apps - that allow editors to configure both the types of cards in the news feed and the visibility, color, and other attributes to fit the news. For example, an editor can curate a specific story in the news feed by changing its card type from a Thumbnail Card to a Portrait Card, or changing its Flashline to a “breaking red” color, then the apps will dynamically update their UI without an app release. As a result, there are thousands of possible card variants and a rich user experience created from a handful of static card types and components in our Design System. In parallel, we integrated Design Tokens across Web, iOS, Android, and Figma so that there is a single source of truth for our brand color palette, typography, and spacing.",
    PURCHASING_TITLE : "Purchasing and Login",
    PURCHASING_SUBTITLE: "Auth0 and Google Play Billing",
    PURCHASING_SUMMARY : "There are many ways to subscribe to WSJ - through Google Play, the Apple App Store, web, phone, etc. - which leads to a complex login and entitlement system. In 2018/2019, I was the Mobile lead on an Identity project for mobile app store subscription purchases, registration, and login. We achieved our goal of unifying access to premium content across Android, iOS, and Web regardless of where the customer made their first purchase. The technical details included setting up Google Play Billing in-app purchases and receipt verification as well as a custom implementation of an Auth0/OAuth login system driven by idTokens. In 2024, this was refactored to Kotlin. We implemented 7 subscription flows to drive 4 user states and a dynamic paywall with 100% unit test coverage.",
    ARCH_TITLE : "Architecture Discovery",
    ARCH_SUBTITLE: "MVP, MVVM, MVI to Jetpack Compose Platform",
    ARCH_SUMMARY : "The WSJ Android app is over 10 years old which meant there was some tech debt to take care of after a few generations of teams. In 2022, we started an architecture discovery process to reevaluate our data and UI flow from the ground up. We brought the architecture from a single app module written in Java with an XML content download system to a white-label, multi-module, GraphQL, fully Jetpack Compose mobile app platform with over 50 modules. It is used not only for the WSJ app, but as a white-label platform for other brands in the Dow Jones such as Market Watch, Barrons, and FN London.",
    UI_TITLE : "Experimental R&D",
    UI_SUBTITLE: "Jetpack Compose and Swift UI",
    UI_SUMMARY : "In 2019 the Mobile team started a R&D effort to determine if it was possible to create Server-Driven UI (with native views) and completely remove app store releases from our process. We developed a working cutting edge feature: a Swift UI and Jetpack Compose Component Library driven by a JSON Declarative UI Model. While we decided against adopting this in favor of a Jetpack Compose platform with a shared component library for feature teams, we have embraced being early adopters of Swift UI and Jetpack Compose. Today, a Compose component library of 85+ reusable cards and components drive 15 different Screens owned by feature teams.",
    GRAPH_TITLE : "Graph QL",
    GRAPH_SUBTITLE: "Shared Data Layer",
    GRAPH_SUMMARY : "In 2020, the App & Web Engineering teams voted to retire our legacy backend content delivery systems and move to a shared content API with GraphQL. For Mobile, this allowed us to pass on the performance benefits (and cost savings) of a much smaller download size to our users. I was a Mobile representative for a company-wide move to GraphQL and suggested Apollo Federation as the best fit for our use cases across many Engineering teams with different requirements for their schema.",
    LFWK_NAME : "Leap for WaniKani",
    LFWK_SUMMARY : "Leap for WaniKani is a hybrid Android-WebView client app for WaniKani, a spaced repetition system used to learn Japanese characters. It’s written in Kotlin and uses MVVM, Coroutines, and LiveData. (2019 Profolio Project)",
    COMPOSE_TITLE : "Jetpack Compose Cards",
    COMPOSE_SUMMARY : "A Jetpack Compose card system with JSON-driven card layouts and text styles. (2020 Portfolio Project)",
    ADAPTER_TITLE : "Adapter Delegate Cards",
    ADAPTER_SUMMARY : "A composition-over-inheritance RecyclerView which uses Components and model-driven styles. It's built with Hannes Dorfmann's library of the same name. (2019 Profolio Project)",
    TWITTER_TITLE : "Twitter Username RxJava",
    TWITTER_SUMMARY : "A sample application that checks if a username is available on Twitter. It's written in Java and uses MVVM with RxJava. (2019 Code Sample)",
    RESUME_TITLE : "React-Bootstrap Resume Website",
    RESUME_SUMMARY : "This website was built using react-bootstrap. (2020 Profolio Project)",
    MET_TITLE : "The Met Impressionist Showcase",
    MET_SUMMARY : "Multi-module Jetpack Compose app showcasing The Met's impressionist collection. My best architecture sample. (2022 Profolio Project)",
    LANGUAGES_TITLE : "Languages",
    LANGUAGES_KOTLIN : "Kotlin: 150,000 lines",
    LANGUAGES_JAVA : "Java: 75,000 lines",
    LANGUAGES_DART : "Dart: 20,000 lines",
    LANGUAGES_JAVASCRIPT : "JavaScript / HTML / CSS: 15,000 lines",
    URL_GITHUB : "https://github.com/vrickey123",
    URL_GITHUB_LFWK : "https://github.com/vrickey123/LeapForWaniKani",
    URL_GITHUB_RESUME : "https://github.com/vrickey123/vrickey123.github.io",
    URL_GITHUB_COMPOSE : "https://github.com/vrickey123/JetpackComposeCards",
    URL_GITHUB_ADAPTER : "https://github.com/vrickey123/AdapterDelegateCards",
    URL_GITHUB_TWITTER : "https://github.com/vrickey123/TwitterUsername",
    URL_GITHUB_MET : "https://github.com/vrickey123/the-met-impressionist-showcase",
    URL_LINKEDIN : "https://www.linkedin.com/in/vincentrickey",
    URL_RESUME : "https://docs.google.com/document/d/1R5T5EphiB8QYKr0xiSzcr2n7re40doICJC2nnIhL3g4/edit?usp=sharing",
    URL_PLAY_WSJ : "https://play.google.com/store/apps/details?id=wsj.reader_sp",
    CONTACT : "Contact",
}