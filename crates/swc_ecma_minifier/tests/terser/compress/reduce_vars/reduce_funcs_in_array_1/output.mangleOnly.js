(function() {
    function a() {
        return 123;
    }
    function b() {
        return [
            a
        ].concat([
            2
        ]);
    }
    var c = [
        b(),
        b()
    ];
    console.log(c[0][0] === c[1][0], c[0][0]());
})();
