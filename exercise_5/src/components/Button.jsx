import React from "react";

class Button extends React.Component {
    render(){
        return(
            <div className="bg-gray-100 hover:bg-grey-200 text-grey-800 py-2 px-4 border border-black border-1 rounded cursor-pointer" onClick={this.props.vote}>
                {this.props.type}
            </div>
        )
    }
}
export default Button
