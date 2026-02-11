const getFetchData = async function () {
    try {
        const URL: string = 'https://retoolapi.dev/aX2gFH/plussallatok';
        const response = await fetch(URL);
        if (!response.ok) {
            return (new Error(`Státusz: ${response.status}, Üzenet: ${response.statusText}, Hibás url: ${response.url}`));
        };
        const data = await response.json()
        deleteFetchData(URL, data);
        // console.log(data[0]['Column 1']);
    } catch (err: any) {
        throw new Error(err);
    };
};

const deleteFetchData = async function (URL: string, arr: []) {
    try {
        for (let i = 0; i < arr.length; i++) {
            await fetch(`${URL}/${i}`, {
                method: "DELETE"
            });
        };
    } catch (err: any) {
        throw new Error(err);
    };
};

const fillDb = async function () {
    const name = generateName();
    const height = generateHeight();
    const color = generateColor();
    try {
        const URL: string = 'https://retoolapi.dev/aX2gFH/plussallatok';
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, b: 'Textual content' })

        });
        if (!response.ok) {
            return (new Error(`Státusz: ${response.status}, Üzenet: ${response.statusText}, Hibás url: ${response.url}`));
        };
        const data = await response.json()
        deleteFetchData(URL, data);
        // console.log(data[0]['Column 1']);
    } catch (err: any) {
        throw new Error(err);
    };
};

// fillDb();
getFetchData();