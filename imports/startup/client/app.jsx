import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '../../ui/containers/MainLayout.jsx';
import { RxStateProvider, createState } from "../../state/RxState.js";
import reducer$ from "../../reducers/index.js";

Meteor.startup(() => {
  ReactDOM.render(
    <RxStateProvider state$={createState(reducer$)}>
        <MainLayout />
    </RxStateProvider>,
    document.getElementById('app')
  );
});
