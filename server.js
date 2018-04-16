var request = require("request")
var express = require("express")
var app = express()

var LIFX_TOKEN='adbadbadbadbadbabdabdabdbad4adbadbadbadbadbabdbadbabdabdbadbabdb';
var HUE_TOKEN='adbadbadbadbadbabdabdab';
var HUE_IP="192.168.0.100";

app.get("/", function (req, res) {
    res.send("Hello World!")
})

app.get("/do", function (req, res) {
    var action = req.query.action;
    console.log("action received: ",action);

    if (action == "party") {
        request({uri:"http://192.168.0.107/power/on"});

        request({
            uri:"https://api.lifx.com/v1/lights/all/state",
            method:"PUT",
            headers: { "Authorization":"Bearer "+LIFX_TOKEN },
            body: JSON.stringify({"color":"purple"}),
        });

        request({
            uri: "http://"+HUE_IP+"/api/"+HUE_TOKEN+"/lights/3/state",
            method: "PUT",
            body: JSON.stringify({"on":true,"sat":254,"bri":254,"hue":52792}),
        });
    }

    res.send("OK")
})

app.listen(3000, function () {
    console.log("Example app listening on port 3000!")
})
