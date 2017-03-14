import React from 'react';
import Counter from '../components/Counter';
import Tasks from '../components/Tasks';

export default class AboutComponent extends React.Component {
    render() {
        return (
            <div className='About'>
                <h1>About</h1>
                <hr/>
                <Counter />
                <hr/>
                <Tasks />
            </div>
        );
    }
}
