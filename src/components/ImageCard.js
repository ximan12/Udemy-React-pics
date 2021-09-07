import React from "react";

class ImageCard extends React.Component {
    imageRef = React.createRef();
    state = {span: 0};

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.DynamicSpan);
    }

    DynamicSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spanValue = Math.ceil(height / 150 + 1);
        this.setState({span: spanValue});
    }

    render() {
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;