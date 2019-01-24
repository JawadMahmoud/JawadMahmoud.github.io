class GamePage extends React.Component{
    constructor(props) {
        super(props);
    }
    repeatAudio(){
        document.getElementById("word-audio").play();
    }
    render(){
        const audioEnabled = (getCookie("audioEnabled")==='1');
        const colourless = this.props.colourless;
        return(
            <div className="user_options">
                <h1 className="title_message" style={{color: "white"}}>Play</h1>

                <div className="row">
                    <div className="col-xs-4 col-sm-3 col-md-3 text-center">
                        {/* /<!-- <div className="mx-auto" style="width: 200px"> --> */}
                        <p id="spell-text" style={{"fontSize":"2vw"}}>
                            Spell the word...
                        </p>
                        <p id="word-text" style={{"fontSize":"2.5vw","text-decoration":"underline"}}></p>
                        <img className="spell-word" id="spell-word" src="resources/icons/ear.svg" onClick={this.repeatAudio}></img>
                        <audio id="word-audio" autoPlay={false} loop={false} muted={!audioEnabled}></audio>
                        <audio src="resources/sounds/correct.mp3" id="correct-audio" autoPlay={false} loop={false} muted={!audioEnabled}></audio>
                        {/* <!-- </div> --> */}
                    </div>



                    <div className="col-xs-9 col-sm-6 col-md-6">
                        <div className="mx-auto" style={{width: "auto", height: "12em"}}>

                            <img id="img-random" className="guess_pic" src="resources/images/zip.svg" height="100%"/>

                        </div>
                    </div>

                    <div className="col-xs-4 col-sm-3 col-md-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div id="text-place">
                                    {/* <!--<textarea id="write" maxlength="10" cols="20"></textarea>--> */}
                                    <input id="write" type="text" placeholder="answer" maxLength="6" style={{"fontSize":"3vw", width:"5em", borderRadius:"10px", paddingLeft: "15px"}}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div id="check-button">
                                    <img alt="check-button" id="check-button" src="resources/icons/checkbox.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dwWellDone" className="well_done_message hidden_panel">
                    <p className="instruction_message">Well Done!</p>
                </div>


                <div className="version_number"><p>version {window.version}</p></div>
                <div id={"modal"}></div>
            </div>


        );
    }

}