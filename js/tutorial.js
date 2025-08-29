function startTutorial() {
  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shepherd-theme-arrows',
      scrollTo: true
    }
  });

  tour.addStep({
    id: 'welcome',
    text: 'Welcome to the Web Page Builder! This quick tutorial will walk you through the main features.',
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'toolbox',
    text: 'This is the toolbox. It contains all the blocks you can use to build your web page.',
    attachTo: {
      element: '.blocklyToolboxDiv',
      on: 'right'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'workspace',
    text: 'This is the workspace. Drag blocks from the toolbox and drop them here to build your page.',
    attachTo: {
      element: '#blockly-div',
      on: 'right'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'preview',
    text: 'This is the live preview panel. It shows you what your web page looks like in real-time as you make changes.',
    attachTo: {
      element: '#preview-container',
      on: 'left'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'download',
    text: 'When you\'re finished, click this button to download your complete web page as a single .html file.',
    attachTo: {
      element: '#download-btn',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Finish',
        action: tour.complete
      }
    ]
  });

  tour.start();
}
