import React, { Componenet } from 'react'

export default class EyesOnMe extends Component {
    render() {
        return (
            <div>
                <button onFocus={()=> console.log('Good!')} onBlur={()=> console.log('Hey! Eyes on me!')}>
                    "This is a button"
                </button>
            </div>
        )
    }
}