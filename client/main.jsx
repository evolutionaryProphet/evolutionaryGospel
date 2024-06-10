import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';

Meteor.startup(() => {
  var M = require('materialize-css');

  const container = document.getElementById('react-target');
  const root = createRoot(container);


  root.render(<App />);


});
