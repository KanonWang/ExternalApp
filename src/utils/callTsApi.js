import uuid from 'uuid/v4';

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
                'X-Tradeshift-RequestId': runtime.requestId || uuid(),
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

export default callTsApi;
