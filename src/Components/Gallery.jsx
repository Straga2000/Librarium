import React, {Component} from "react";

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
            <div>
                {links.map(link =>
                    {
                        let dim = this.getPhotoStyle(link);
                        return <img key={link}
                                    src={link}
                                    height={dim.height}
                                    width={dim.width}
                                    alt = "nu"/>
                    })
                }
            </div>
        );
    }
}
