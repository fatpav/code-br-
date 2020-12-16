const getData = () => {
    fetch("http://localhost:8080/diaryentry")
        .then(response => response.json())
        .then(results => setDiaryEntries(results))
        .then(() => setLoaded(true))
        console.log(diaryEntries);
};