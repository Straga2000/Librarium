import React, {Component} from "react";

import '../Styles/index.css'

export default class App extends Component {
    state = {
        info : this.props.info
    };

    getPhotoStyle = (link) =>
    {
        const img = new Image();
        img.src = link;
        return {
                "width" : img.width,
                "height" : img.height}
    };

    render() {
        const links = this.state.info.links;
        return (
            <div className={"no-mg-bd"}>
                {links.map(link =>
                    {
                        let dim = this.getPhotoStyle(link);
                        return <img className={"no-mg-pd"}
                                    key={link}
                                    src={link}
                                    height={"10%"}
                                    width={"20%"}
                                    alt = "nu"/>
                    })
                }
            </div>
        );
    }
}
