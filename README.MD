Steps to reproduce this repo:

```
react-native init reactNativeMapsExample
cd reactNativeMapsExample
rm -rf node_modules
npm i -S react-native@0.49 #at the moment of creation there was a bug React Native version mismatch
npm i
react-native link
react-native run-ios
```

