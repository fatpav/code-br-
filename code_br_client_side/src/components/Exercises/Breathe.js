import Timer from './Timer';

const Breathe = () => {
    return (
        <>
            <h2>Breathe</h2>
            <div class="breathe-tool">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <h2 id="text"></h2>

            <Timer />
      </>
    )
}

export default Breathe;

