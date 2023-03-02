import React from "react";
import Button from "./Button";

class Cardbox extends React.Component {
    constructor(){
        super();
        this.state = {vote_count: 0}
    }
    increase_vote = () =>{
        if (this.state.vote_count >= 10) alert("You cannot vote anymore!");
        else this.setState({vote_count: this.state.vote_count + 1}); 
    }
    decrease_vote = () =>{
        if (this.state.vote_count <= 0) alert("You cannot unvote anymore!");
        else this.setState({vote_count: this.state.vote_count - 1}); 
    }

    render() {
        return (
            <div className="w-[100%] border-solid border-black border-4 bg-[#ffebcd] rounded-lg p-6">
                <div className="flex">
                    <div >
                        <h1 className="font-extrabold text-3xl my-4">{this.props.foodtype}</h1>
                        <h3 className="font-bold text-xl mb-4">{this.props.name}</h3>
                        <p>{this.props.info}</p>
                    </div>
                    <div className="w-[150%] ">
                        <img src={this.props.img} alt="" />
                    </div>
                </div>
                <div className="flex justify-center items-center mt-2">
                    <Button type={"Click to Vote"} vote={this.increase_vote}></Button>
                    <div className="px-2 py-4 bg-[#16FA00] text-purple-700 rounded-lg mx-5 font-extrabold border-black border-2 text-3xl">
                        <h1>{this.state.vote_count === 0 ? "MIN" : this.state.vote_count === 10 ? "MAX" : this.state.vote_count}</h1>
                    </div>
                    <Button type={"Click to Unvote"} vote={this.decrease_vote}></Button>
                </div>
            </div>
        );
    }
}

export default Cardbox;