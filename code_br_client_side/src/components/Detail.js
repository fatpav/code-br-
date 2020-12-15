const Detail = ({diaryEntries}) => {

const diaryEntry = diaryEntries.map((entry, index) => {
    return (
        <entry entry = {entry}/>
    )
})

    return(
        <>
        <h2>Granular detail lives here</h2>
            <ul>{diaryEntry}</ul>
        </>
    )
}

export default Detail;

// const MapFetchData = diaryEntries.map((diaryEntry) => {
  //   return (
  //     // <diaryEntry diaryEntry={diaryEntry} />
  //     <p>{diaryEntry}</p>
  //   )
  // });