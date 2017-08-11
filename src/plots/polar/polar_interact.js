/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var d3 = require('d3');

module.exports = function initInteractions(gd) {
    var fullLayout = gd._fullLayout;

    fullLayout._paper.selectAll('.chart-group .geometry')
        .each(function(d, i) {
            var curveNumber = i;
            d3.select(this).selectAll('path')
                .each(function(d, i) {
                    var valueIndex = i;

                    d3.select(this).on('mouseout', function(pt) {
                        var args = {
                            event: d3.event,
                            points: [pt],
                            curveNumber: curveNumber,
                            pointNumber: valueIndex,
                        };

                        gd.emit('plotly_unhover', args);
                    });

                    d3.select(this).on('mouseover', function(pt) {
                        var args = {
                            event: d3.event,
                            points: [pt],
                            curveNumber: curveNumber,
                            pointNumber: valueIndex,
                        };

                        gd.emit('plotly_hover', args);
                    });

                    d3.select(this).on('click', function(pt) {
                        var args = {
                            event: d3.event,
                            points: [pt],
                            curveNumber: curveNumber,
                            pointNumber: valueIndex,
                        };
                        gd.emit('plotly_click', args);
                    });
                });
        });
};
