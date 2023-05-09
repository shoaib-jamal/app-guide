# RebornXP Developer's Guide: Publishing Your Web App to the Appstore
Welcome to the RebornXP Developer's Guide! This guide is designed to help you publish your web app to the RebornXP Appstore using the Developer Panel. Follow these steps to get started:
<br>
1. Click <a href="https://xpstore.glitch.me/createapp">here</a> to navigate to Developer's Panel
2. This guide contains rules and templates for creating a RebornXP-supported program and submitting it to the app store. Take the following code as a reference and write your program to be able to resize the app window, app title, and app link, for example:
<br>

``` 
var el = $.parseHTML(`<window width="800" height="500" title="Your App's title">
   <!--Adjust the window title and size according to your web app-->
    
    <style>
iframe[seamless]{
  background-color: transparent;
  border: 0px none transparent;
  padding: 0px;
  overflow: hidden;
}
.frame-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}
  </style>
  
  <div class="frame-container">
    
<iframe height="100%" seamless="seamless" width="100%" src="https://www.helloworld.org"></iframe>
<!--Make sure your site has anti-framing disabled or your app will show a blank screen!-->

  </div> 
 </window>`);
    
document.body.append(el[0]);
$(el).updateWindow(); 
```
<br>
For reference, following code compiles a Microsoft Bing Search App:
<br><br>

``` 
var el = $.parseHTML(`<window width="800" height="800" title="Bing Search">
    <style>
iframe[seamless]{
  background-color: transparent;
  border: 0px none transparent;
  padding: 0px;
  overflow: hidden;
}
.frame-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}
  </style>
  
  <div class="frame-container">
    <iframe height="100%" seamless="seamless" width="100%" src="https://bing.com"></iframe>
  </div> 
 </window>`);
    
document.body.append(el[0]);
$(el).updateWindow(); 
```
<br>
3. After you have modified the code, copy it (don't fork or send pull requests). Next, navigate to the RebornXP Developer's Panel and type in the app name, description, and a proper URL for an icon and screenshot, for example: https://xyz.com/1.png. In the appcode section, paste the code, select a category, and click the "Create!" button.
<br>
4. Congratulations, you have successfully published your app to the RebornXP Appstore!

We hope this guide was helpful in getting your web app published to the RebornXP Appstore. If you have any questions or issues, please feel free to contact us. Good luck and happy coding!
