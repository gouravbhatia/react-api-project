import axios from 'axios';

const url = 'https://jsonblob.com/api/jsonBlob/ecfad985-bc66-11ea-8cae-99a0660a95d6';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
        return data;

    } catch(error) {
        console.log(error);
    }
}