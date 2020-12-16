const Journal = () => {
    return (
        <>
            <h2>Journal</h2>
            <h2>Dropdown of Journal Entries by Date</h2>
            <div class="journalform">
                <input id="inputbox" placeholder="How did you feel today?" />
            </div>
            <div class="navbar">
                <button class="navbuttons" type="submit">Save</button>
            </div>
        </>
    )
};

export default Journal;