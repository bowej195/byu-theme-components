/**
 * Created by jmooreoa on 7/6/17.
 */

(function () {

    var s = document.createElement('script');
    s.src = "../bower_components/color/one-color.js";
    s.onload = function () {
        chai.use(function (chai) {
            chai.Assertion.addMethod('colored', function (colorString) {
                var expected = one.color(colorString),
                    actual = one.color(this._obj);

                this.assert(
                    actual.equals(expected),
                    'expected #{act} to be the same color as #{exp}',
                    'expected #{act} to be a different color than #{exp}',
                    expected.hex(),
                    actual.hex()
                );
            });
        });
    };

    document.head.appendChild(s);

})();

