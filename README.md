# circleStats.js by [@IsmaGNU](http://twitter.com/#!/ismaGNU)
Create animated beautyful circle stats in pure javascript

## Highlights

* Two circle colors
* Filling circle with animation
* Tested on chrome and firefox

## Circle configuration

You can customize the circle with these options:

* **canvas** - Canvas where you want to draw your circle
* **percentage** - [0-100] Percentage to fill
* **speed** - Animation speed. Control how fast the circle is filled in
* **background** - Circle's background color
* **foreground** - Circle's foreground color
* **radius** - Circle's radius

The height and width of the circle is canvas width and height


## Usage

``` html
 <canvas class="circle_canvas" width="116px" height="116px">
```

```javascript
var circle = new CircleStat({
    'canvas': document.getElementById("canvas"),
    'percentage': 45,
    'speed': 0.06,
    'background': 'rgb(238,234,229)',
    'foreground': 'rgb(24, 85, 143)',
    'radius': 45
});
```
Also, you can add a legend inside the circle using html, it looks really nice.

``` html
<div class="days">
    <canvas width="116px" height="116px"></canvas>
    <p><span>15</span><strong>Days left</strong></p>
</div>
```

# License 
Feel fre to enjoy with the GNU/GPL v3 and above

Please contact me if you're using it you'll make my day :)
