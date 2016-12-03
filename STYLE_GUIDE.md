# Style Guide

--> Follow Standard
--> No Semi-Colons on JS and JSX files
--> Parthenesis on render returns
--> ES6: 
    --> Arrow functions on all non-React main component functions 
    --> All 'let' and 'const' never 'var'
    

## React Component

        import React from 'react'

        export default class name extends React.Component {

            constructor(props) {
                super(props)
                this.state = {
                    firstName: '',
                    lastName: ''
                }
            }

            customFuncs() {
                return this
            }

            getFullName() {
                return this.state.firstName + ' ' + this.state.lastName
            }

            render() {
                return (
                    <div>
                        {/* Inner functinos are ES6 */}
                        {list.map(e => (
                            <li>{e}</li>
                        ))}

                    </div>
                    )
                }
        }

