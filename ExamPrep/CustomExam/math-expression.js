function Solve6(args) {
    var N = args[0];
    var M = args[1];
    var P = args[2];

    var nominator = (N * N) + (1 / (M * P)) + 1337;
    var denominator = (N - 128.523123123) * P;
    var mod = M % 180;
    var sinPart = Math.sin(mod);
    var result = nominator / denominator + sinPart;

    return result.toFixed(6);
}

function mathTest() {
    console.log(Solve6([1, 2, 3]))
}