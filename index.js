(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        function d3_number(x) {
            return x != null && !isNaN(x);
        }
        d3.ascending = d3_ascending;
        function d3_ascending(a, b) {
            return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
        }
        d3.quantile = function(values, p) {
            var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
            return e ? v + e * (values[h] - v) : v;
        };
        d3.median = function(array, f) {
            if (arguments.length > 1) array = array.map(f);
            array = array.filter(d3_number);
            return array.length ? d3.quantile(array.sort(d3_ascending), .5) : undefined;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();