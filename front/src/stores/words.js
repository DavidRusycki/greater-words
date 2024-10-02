import { defineStore } from 'pinia'
import d3Cloud from 'd3-cloud'
import * as d3 from 'd3'

export default defineStore('words', {
  state: () => ({
    words: []
  }),
  actions: {
    setWords(words) {
      this.words = words
    },
    render() {
      console.log('render method')

      let actualWords = []
      this.words.forEach(function (d) {
        actualWords.push({
          text: d,
          size: 10 + Math.random() * 100
        })
      })

      document.getElementById('canvas').innerHTML = ''
      var layout = d3Cloud()
        .size([500, 500])
        //.canvas(canvas)
        .words(actualWords)
        .padding(5)
        .rotate(0)
        .font('Arial')
        .fontSize((d) => d.size)
        .on('end', () => {
          d3.select('#canvas')
            .append('svg')
            .attr('width', layout.size()[0])
            .attr('height', layout.size()[1])
            .append('g')
            .attr(
              'transform',
              'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')'
            )
            .selectAll('text')
            .data(actualWords)
            .enter()
            .append('text')
            .style('font-size', function (d) {
              return d.size + 'px'
            })
            .style('font-family', 'Impact')
            .style('color', function (d) {
              return d.color
            })
            .attr('text-anchor', 'middle')
            .attr('transform', function (d) {
              return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')'
            })
            .text(function (d) {
              return d.text
            })
        })

      layout.start()
    }
  }
})
