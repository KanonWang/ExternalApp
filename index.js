function callTsApi(path, method, urlType, customHeaders) {
    const mainAppIframe = window.top.document.getElementById("main-app-iframe");
    console.log(mainAppIframe);
    const runtime = mainAppIframe.contentWindow.runtime;
    console.log(runtime);
    method = method || 'GET';
    customHeaders = customHeaders || {};
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, path, true);
        const header = Object.assign(
            {},
            {
                Authorization: runtime.accessToken,
                'Content-Type': 'application/json',
                'X-Tradeshift-TenantId': runtime.companyId,
                'X-Tradeshift-ActorId': runtime.userId,
                'X-Requested-With': 'XMLHttpRequest',
                Accept: 'application/octet-stream, application/json'
            },
            customHeaders
        );
        Object.keys(header).forEach(key => {
            xhr.setRequestHeader(key, header[key]);
        });
        xhr.responseType = 'json';
        xhr.onload = function () {
            if(xhr.status === 200) {
                return resolve({
                    status: xhr.status,
                    data: xhr.response
                });
            } else {
                return reject({
                    status: xhr.status,
                    data: xhr.response
                });
            }
        };
        if (method === 'POST') {
            xhr.send(JSON.stringify(urlType));
        } else {
            xhr.send();
        }
    });
}

ts.ui.ready(() => {
    ts.ui.Header.title('My app');
    ts.ui.Footer.buttons({
        label: 'Continue',
        type: 'ts-primary',
        onclick: ()  => {
            callTsApi('/v4/proxy/network/connections?limit=10&page=0&type=&omitConnections=false');
        }
    });
});
