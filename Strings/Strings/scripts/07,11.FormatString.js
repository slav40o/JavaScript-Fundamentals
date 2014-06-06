
//Exercise 7
function parseURL() {
    var rawUrl = jsConsole.read('#parse-url');
    var protocolAddresArr = rawUrl.split("://");

    var endServerIndex = protocolAddresArr[1].indexOf('/');
    var server = protocolAddresArr[1].substring(0, endServerIndex);
    var resource = protocolAddresArr[1].substr(endServerIndex);

    var parsedURL = createURL(protocolAddresArr[0], server, resource)

    jsConsole.writeLine(parsedURL.toString());
}

function createURL(protocol, server, resource) {
    return {
        protocol: protocol,
        server: server,
        resource: resource,
        toString: function urlToString() {
            return formatString("Protocol: {0}, Server: {1}, Resource: {2}",
                this.protocol, this.server, this.resource);
        }
    }
}

//Exercise 11
function formatString(aruments) {
    var formatedStr = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        var placeholder = "{" + (i - 1) + "}";

        while (formatedStr.indexOf(placeholder) !== -1) {
            formatedStr = formatedStr.replace(placeholder, arguments[i]);
        }
    }

    return formatedStr;
}

function test() {
    var formated = formatString("Hi {0}, {1}! What's up {0}, {1}", 'GOSHKO', 'Pesho');
    jsConsole.writeLine(formated);
}