// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentDetail';
import ApprovalCard from './approvalCard';

// Creat a react component
const App =  () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Are you sure you want to do this?</ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" time="Tpday at 4:45PM" comment="Great job."/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" time="Tpday at 2:00AM" comment="Very useful"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" time="Tpday at 3:23AM" comment="Nice work"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jim" time="Tpday at 4:45PM" comment="sounds great"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Flex" time="Tpday at 4:45PM" comment="Awesome"/>
            </ApprovalCard>
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);