### 集成 typescript https://github.com/Microsoft/TypeScript-React-Native-Starter

```
yarn add --dev typescript
yarn add --dev react-native-typescript-transformer
yarn tsc --init --pretty --jsx react
touch rn-cli.config.js
yarn add --dev @types/react @types/react-native
```

CTRL+M 跳出 android 模拟器菜单

Support for the experimental syntax 'decorators-legacy' isn't currently enabled

https://github.com/ds300/react-native-typescript-transformer/issues/81

添加 redux
https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/

vscode 有关 各个语言自动设置格式
https://segmentfault.com/a/1190000011122443

https://code.visualstudio.com/docs/getstarted/settings#_language-specific-editor-settings

###patch-package 给包打补丁的库
https://github.com/ds300/patch-package

### android studio 模拟器 无法正常连接网络
https://stackoverflow.com/questions/42736038/android-emulator-not-able-to-access-the-internet

解决方案:
C:\Users\jdoe\AppData\Local\Android\sdk\emulator\emulator.exe -avd Nexus_5X_API_25 -dns-server 8.8.8.8
D:\androidSdk\emulator>emulator.exe -avd Nexus_5X_API_28 -dns-server 8.8.8.8
