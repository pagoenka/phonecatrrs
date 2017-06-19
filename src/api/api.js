export const PhoneListApi = () => {
    return fetch('./phones/phones.json')
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};

export const PhoneDetailsApi = (phoneName) => {
    return fetch('/phones/'+ phoneName +'.json')
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};