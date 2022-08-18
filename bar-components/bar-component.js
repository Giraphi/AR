AFRAME.registerComponent("bar-component", {
    schema: {
        value: { type: "number", default: 1 },
        color: { type: "color", default: "#AAA" },
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        console.log(data);
        const indicatorHeight = 0.6;
        const indicatorWidth = 0.8;

        el.innerHTML = `
                <a-box
                    animation="property: rotation; easing: linear; to: 0 360 0; loop: true; dur:10000"
                    color="${data.color}"
                    depth="0.7"
                    height="${data.value}"
                    width="0.7"
                    position="0 ${data.value / 2} 0"
                    opacity="0.7"
                    material=""
                    geometry=""
                >
                </a-box>
                <a-text color="${data.color}" value="Some Value" font="sourcecodepro" text="" position="-0.55 -0.24"></a-text>
<!--                <a-text color="${data.color}" value="Some Value" position="-0.5 -0.3 0" font="sourcecodepro" text=""></a-text>-->
                <a-cylinder
                    color="${data.color}"
                    position="0 ${data.value + indicatorHeight / 2} 0"
                    material=""
                    geometry="height: ${indicatorHeight}; radius: 0.006"
                ></a-cylinder>
                <a-cylinder
                    opacity="0.7"
                    color="${data.color}"
                    position="${indicatorWidth / 2} ${data.value + indicatorHeight} 0"
                    height="1"
                    material=""
                    geometry="height: ${indicatorWidth}; radius: 0.006"
                    rotation="0 0 -90"
                    opacity="0.7"
                ></a-cylinder>
                <a-text
                    color="${data.color}"
                    position="${indicatorWidth / 2 + 0.45} ${data.value + indicatorHeight + 0.05} 0"
                    font="sourcecodepro"
                    text="anchor: left; value: ${data.value * 10}; baseline: center"
                ></a-text>
        `;
    },
});
