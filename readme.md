## What's the ar.js "default" camera? ist it location based?

Neither location based nor marker based. But it uses ar.js's `rotation-reader`. Besides that is seems to a-frame's <a href="https://aframe.io/docs/0.9.0/components/camera.html#default-camera">default camera</a>

## Rotation-Reader

`<a-camera>`'s with `rotation-reader` 'counter' phone rotations by reading the gyroscope and make the object fixed in space. When walking around, the object will follow us.

Currently this seems to be a good approach if we just want to display a 3D object/scene without caring too much where exactly it is placed in space.

## Position object in front of user based on gps
gps doesn't seem to be precise enough for that:
> GPS-enabled smartphones are typically accurate to within a 4.9 m (16 ft.) radius under open sky

<a href="https://www.gps.gov/systems/gps/performance/accuracy/">Source</a>

## Make gestures work in non marker based situations
use the hack that emits a `markerFound` event.

##Docs
- <a href="https://ar-js-org.github.io/AR.js-Docs/">AR.js docs</a>
- <a href="https://aframe.io/docs/1.3.0/introduction/">A-frame</a>

##Fonts
https://msdf-bmfont.donmccurdy.com/



QWERTZUIOPASDFGHJKLYXCVBNMqwertzuioplkjhgfdsayxcvbnm,.-1234567890
