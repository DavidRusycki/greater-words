<template>
  <div id="canvas"></div>
</template>

<script>
import d3Cloud from "d3-cloud";
import * as d3 from "d3";

export default {
  name: "D3WordCloud",
  props: {
    words: Array,
  },
  computed: {
    render() {
      this.words;
      const canvas = document.getElementById("canvas");

      this.words.map(function (d) {
        return { text: d, size: 10 + Math.random() * 100, color: "red" };
      });

      var layout = d3Cloud()
        .size([500, 500])
        //.canvas(canvas)
        .words(this.words)
        .padding(5)
        .rotate(0)
        .font("Arial")
        .fontSize((d) => d.size)
        .on("end", (words) => {
          d3.select("#canvas")
            .append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1])
            .append("g")
            .attr(
              "transform",
              "translate(" +
                layout.size()[0] / 2 +
                "," +
                layout.size()[1] / 2 +
                ")"
            )
            .selectAll("text")
            .data(words)
            .enter()
            .append("text")
            .style("font-size", function (d) {
              return d.size + "px";
            })
            .style("font-family", "Impact")
            .style("color", function (d) {
              return d.color;
            })
            .attr("text-anchor", "middle")
            .attr("transform", function (d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) {
              return d.text;
            });
        });

      layout.start();
    },
  },
};
</script>
