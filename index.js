
async function getCC(cookie, url = '', data = null) {
    global.url = url
    global.data = data
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    let dom = new JSDOM(``, {
        url: "https://eb.meituan.com/ebooking/order-eb/index.html",
    });
    global.window = dom.window
    cookie.split(';').forEach(item => {
        window.document.cookie = item
    })
    global.document = window.document
    global.XMLHttpRequest = window.XMLHttpRequest
    const localStorage = {}
    window.localStorage = localStorage
    global.location = {
        ...window.location,
        "ancestorOrigins": {},
        "href": "https://eb.meituan.com/ebooking/order-eb/index.html#/checkin",
        "origin": "https://eb.meituan.com",
        "protocol": "https:",
        "host": "eb.meituan.com",
        "hostname": "eb.meituan.com",
        "port": "",
        "pathname": "/ebooking/order-eb/index.html",
        "search": "",
        "hash": "#/checkin"
    }
    global.navigation = {
        ...window.navigation,
        canGoBack: true,
        canGoForward: false,
        currentEntry: {
            id: "04274192-833a-4ed8-b0ae-348c0d45ff6c",
            index: 4,
            key: "7427c587-099b-4c1d-b704-44a696d878ee",
            ondispose: null,
            sameDocument: true,
            url: "https://eb.meituan.com/ebooking/order-eb/index.html#/checkin",
        },
        oncurrententrychange: null,
        onnavigate: null,
        onnavigateerror: null,
        onnavigatesuccess: null,
        transition: null
    }
    global.Navigation = navigation
    window.navigation = navigation
    global.Window = window

    global.screen = {
        availHeight: 1032,
        availLeft: 0,
        availTop: 0,
        availWidth: 1920,
        colorDepth: 24,
        height: 1080,
        isExtended: false,
        onchange: null,
        orientation: {
            ScreenOrientation: { angle: 0, type: 'landscape-primary', onchange: null }
        },
        pixelDepth: 24,
        width: 1920
    };
    window.screen = screen
    global.navigator = window.navigator
    const H5guard = require('./H5guard.js');
    const res = await H5guard.getMtgsig()
    return res
}
module.exports = {
    getCC
}






const cookie = 'ebbsid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const url = "https://eb.meituan.com/api/v1/ebooking/comments/commentsInfo?limit=10&offset=20&partnerId=4330984&platform=1&poiId=1338202795&prefetchIndex=1&replyType=0&reportStatus=&tag=&yodaReady=h5&csecplatform=4&csecversion=2.1.2&_mtsi_eb_u=64714615&_mtsi_eb_p=4330984&optimus_uuid=4330984&optimus_risk_level=71&optimus_code=10&login_type=unknown"
const data = null

getCC(cookie, url, data).then(res => {
    console.log(res)
})