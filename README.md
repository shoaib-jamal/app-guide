# RebornXP Developer's Guide
Guide for developers on publishing their web app to the RebornXP Appstore

# Introduction
This guide contains the rules & template for creating a RebornXP supported program and finally submitting it on the app store. Take the reference of the following code and write a program in such way that you are able to resize the app window, app title, app link for example:<br><br>

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
Such as this code compiles a Microsoft Bing Search App:
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
After you are done with modification, copy the code (don't fork or send pull requests) and navigate to <a href="https://xpstore.glitch.me/createapp">RebornXP Developer's Panel</a> and type the app name, description, add a proper url of an icon and screenshot for example: https://xyz.com/1.png, in the appcode section paste the code, select a category and click "Create!" button.
<br>
And you have successfully published your app to the RebornXP AppStore.
