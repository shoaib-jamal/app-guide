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
