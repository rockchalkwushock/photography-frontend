# photography-frontend

Frontend views of Masha's Photography Website.

## Live Demo

The link below is to the current alpha version of the website. Please keep in mind current services being used are _free tier_ and performance is hampered by this. Deployed using `now` from [Zeit](https://zeit.co):

[0.1.0-alpha.0](https://alpha-010-rnlxpqeazn.now.sh)

## API Routing
| Route                  | Type | Info            | Status |
| ---------------------- |:----:| ---------------:| ------:|
| /api/v1/category/:name | GET  | Find a category | Active |


## Current Bundle Sizes
| File Name   | Size      |
| ----------- |:---------:|
| bundle.js   | 181 kB    |
| 0.js        | 458 bytes |
| 1.js        | 1.12 kB   |
| manifest.js | 1.54 kB   |
| vendor.js   | 303 kB    |
| sw.js       | 8.44 kB   |

## TODO

- [ ] Refactor with ApolloClient & GraphQL.
- [ ] Incorporate language toggeling for `ru` & `en` locales.
- [ ] Rehaul of UI/UX design.
- [ ] Better job handling responsive images.
- [ ] Continue progress towards full _PWA_ status.

