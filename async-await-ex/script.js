let output = document.getElementById('output');
let data = ['fetching data from connected device', 'user found name->"rahul17"', 'getting all data from chrome data folder', 'fetching user password', 'user password found,stored in config.xml','history,cookies,cache,bookmarks found','fetching','fetched and stored in data.xml file','successfully hacked']
let Data = [];
let out = [];
const fetchData = async () => {
    for (let i = 0; i < data.length; i++) {
        Data[i] = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data[i]);
            }, i * 1000);
        })
    }
    for (let i = 0; i < Data.length; i++) {
        out[i] = await Data[i];
        // console.log(out[i]);
        output.innerHTML += `>> ${out[i]}<br>`;
    }
    return 'successfully hacked';
};
// fetchData()
