import React, { Component } from 'react';

import Taskbar from './Taskbar';
import CLI from './CLI';

class TerminalWindow extends Component {
    state = {
        intro_hidden: false,
        bg_color: "#000"
    };

    redPill = () => {
        this.setState({ intro_hidden: true, bg_color: "#282c34" });
    }

    bluePill = () => {
        window.location = 'https://www.youtube.com/watch?v=zE7PKRjrid4';
    }

    render() {
        return (
            <React.Fragment>
            <div class="mainBG" style={{ height: "100vh", backgroundColor: this.state.bg_color }}>
            <div className='TerminalWindow container-fluid m-0 p-0'>
                <div className="pt-5 d-none d-sm-block d-md-block d-lg-block">&nbsp;</div>
                <Taskbar visibility={(this.state.intro_hidden) ? "" : "invisible"}/>
                <CLI visibility={(this.state.intro_hidden) ? "" : "invisible"}/>
                <div className={"text-center " + (this.state.intro_hidden ? "d-none" : "")}>
                    <div className="m-auto pb-4 container CLI text-left" style={{ color: "#eee" }}>
                    This is a Hackathon with absolutely no prerequisites apart from basic coding skills and competency in Googling. <br/><br/>
                    The duration is from 0800 hours on 23rd May to 2000 hours on 24th May, with a presentation by each team at the end.
                    </div>
                            <div className="pt-4">
                                <button onClick={this.redPill} className="mx-2 my-2 btn btn-hacc btn-redpill"> take the red pill </button>
                                <button onClick={this.bluePill} className="mx-2 my-2 btn btn-hacc btn-bluepill"> take the blue pill </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TerminalWindow;
