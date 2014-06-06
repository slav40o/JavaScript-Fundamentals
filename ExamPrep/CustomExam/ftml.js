var activeTags = [];
var openedDelTag = 0;
var revTagStarts = [];
var finalLine = '';

function Solve3(args) {
    for (var j = 0; j < args.length; j += 1) {
        var ftmlLine = args[j];

        for (var i = 0; i < ftmlLine.length; i += 1) {
            if (ftmlLine[i] == '<') {
                var tag = getTag(ftmlLine, i);
                processTag(tag);
                i += tag.length - 1;
            }
            else {
                if (openedDelTag == 0) {
                    var symbolToAdd = ftmlLine[i];

                    for (var k = activeTags.length - 1; k >= 0 ; k -= 1) {
                        symbolToAdd = applyEffect(symbolToAdd, activeTags[k]);
                    }
                    finalLine += symbolToAdd;
                }
            }
        }
        console.log(finalLine);
        finalLine = '';
    }

}

function applyEffect(char, tag) {
    if (tag == '<upper>') {
        return char.toUpperCase();
    }
    else if (tag == '<lower>') {
        return char.toLowerCase();
    }
    else if (tag == '<toggle>') {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            return char.toLowerCase();
        }
        else {
            return char.toUpperCase();
        }
    }
}

function getTag(line, startIndex) {
    var tagStart = startIndex;
    var tagEnd = line.indexOf('>', startIndex + 1);

    return line.substring(tagStart, tagEnd + 1);
}

//If del tag is active continue
//If it is rev tag mark begining point
//If it is ending tag remove last from active tags
//Else it is opening tag and add it to active tags
function processTag(tag){
    if (tag == '<del>') {
        openedDelTag += 1;
    }
    else if (tag == '</del>') {
        openedDelTag -= 1;
    }
    else {
        if (openedDelTag == 0) {
            if(tag == '<rev>'){
                revTagStarts.push(finalLine.length);
            }
            else if (tag == '</rev>') {
                var currentRevStart = revTagStarts[revTagStarts.length - 1];
                revTagStarts.splice(revTagStarts.length - 1, 1);

                reverse(currentRevStart);
            }
            else if (tag[1] == '/') {
                activeTags.splice(activeTags.length - 1, 1);
            }
            else {
                activeTags.push(tag);
            }
        }
    }
}

function reverse(currentRevStart) {
    var reverseSubstr = finalLine.substr(currentRevStart);
    var reversed = reverseSubstr.split('').reverse().join('');
    finalLine = finalLine.replace(reverseSubstr, reversed);
}

function testFTML() {
    Solve3(['So<rev><upper>saw</upper> txet em</rev>',
        '<toggle><rev>ERa</rev></toggle> you',
        '<rev>noc</rev><lower>FUSED</lower>',
        '<rev>?<rev>already </rev></rev>']);
}