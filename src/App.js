import React from 'react';
import './App.css';
import table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function App() {
    const submitFunction = (event) => (
        event.preventDefault()

    )
    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>

                        <th scope="col" colSpan="3" >FIRST NAME</th>
                        <th scope="col" colSpan="3" >LAST NAME</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2" >NAME 01</td>
                        <td colSpan="2" >NAME 02</td>
                        <td colSpan="2" >NAME 03</td>
                    </tr>
                    <tr>
                        <td colSpan="2" >NAME 01</td>
                        <td colSpan="2" >NAME 02</td>
                        <td colSpan="2" >NAME 03</td>
                    </tr>

                </tbody>
            </table>
            <Button className='b1'
                href='https://jsonplaceholder.typicode.com/albums/1'
                variant="primary"
                type="submit" >Submit </Button>


        </div>
    );
}

export default App;