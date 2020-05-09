<template>
  <div ref="worldmap_container" ></div>   
</template>

<script>
import d3 from 'd3'
import Datamap from 'datamaps'
export default {
  mounted(){
    var series = ["ARE","ARG","AUT","AUS","BEL","BRA","BGR","CAN","CHE","CHN","COL","CUB","CZE","DEU","EGY","FRA","GBR","GRC","HKG","HUN","IDN","IRL","ISR","IND","ITA","JPN","KOR","LTU","LVA","MAR","MEX","MYS","NGA","NOR","NZL","PHL","POL","PRT","ROU","SRB","RUS","SAU","SWE","SGP","SVN","SVK","THA","TUR","TWN","UKR","USA","VEN","ZAF"];
        var dataset = {};
        series.forEach(function(item){ 
            dataset[item] = { fillColor: "#0d47a1" };
        });
        var map = new Datamap({
            //element: document.getElementById('worldmap_container'),
            element: this.$refs.worldmap_container,
            responsive: true,
            projection: 'mercator', // big world map
            fills: { defaultFill: '#F5F5F5' },
            data: dataset,
            geographyConfig: {
                borderColor: '#DEDEDE',
                highlightBorderWidth: 2,
                highlightFillColor: function(geo) {
                    return geo['fillColor'] || '#F5F5F5';
                },
                highlightBorderColor: '#B7B7B7'            
            }            
        });
        d3.select(window).on('resize', function() {
            map.resize();
        });
  }
}
</script>