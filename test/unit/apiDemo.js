module.exports = class Demo {
    static requestConfig() {
        return {
            $all: {
                method: "get",
            },
            "": "all",
            testGetParams: "get",
            testPostParams: "post",
            testPlugins: ["get", "post"],
            testRest: {
                params: "/:var1/var2"
            },
            testConfig: "get",
            testPath: "get",
            testUpload: {
                method: "post",
                params: "/:id/:to"
            }
        };
    }

    ""(v1) {
        console.log(this.argsList);
        return "hello world";
    }

    async testGetParams(name) {
        console.log(this.argsList);
        "Nice to meet you, " + name;
        return name != null;
    }

    testPostParams(arg1 = {
        pm: ["world"]
    }, arg2) {
        var jsonData = JSON.stringify(arg1);
        return jsonData != null && arg2 != null;
    }

    testPlugins() {
        return this.$stringer.get("txt_demo_string");
    }

    testConfig() {
        return JSON.stringify(this.$config, null, 4);
    }

    testRest(var1, var2) {
        return var1 + var2;
    }

    testPath() {
        var path = require("../../type/path");
        var data = [
            path.findURL(new Demo().upload),
            path.findURL(this.upload),
            path.findURL("/upload"),
        ]
        return data;
    }

    testUpload(id, $raw, to) {
        console.log(JSON.parse($raw));
        console.log(typeof $raw);
        return arguments;
    }

};