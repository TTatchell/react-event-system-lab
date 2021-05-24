import React, { Component } from 'react'

export default class Keypad extends Componenet {
    render() {
        return (
            <div>
                <input 
                type="password"
                onKeyUp={()=> console.log('Entering password...')} />
            </div>
        )
    }
}