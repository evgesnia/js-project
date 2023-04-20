import React from "react";

const MyCheckbox=({text,checked,onClick})=>{
    const id =`checkbox-${Math.round(Math.random() * 1000000)}`;
    return (
                <>
                    <input
                        id={this.id}
                        defaultChecked={this.checked}
                        type="checkbox"
                        onClick={(event) => this.onClick(event.target.checked)}
                    />
                    <label htmlFor={this.id}>{this.text}</label>
                </>
            );
}
export default MyCheckbox;

