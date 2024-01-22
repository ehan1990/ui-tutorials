import constants from './Constants';

export function addOneUrl(url) {
    try {
        let res = fetch(constants.API_URL, {
            method: "POST",
            body: JSON.stringify({
                url: url,
            }),
        });
    } catch (err) {
        console.log(err);
    }
};

export function checkUrl(url) {
    fetch(constants.API_URL + "/check?url=" + url)
        .then(response => response.json())
        .then(data => {
            console.log("got response");
            console.log(data);
            return data["exists"];
        })
        .catch(error => console.error(error));
};
